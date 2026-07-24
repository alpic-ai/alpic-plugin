#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const errors = [];
const warnings = [];
const pluginNamePattern = /^[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$/;

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readJson(filePath, label) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch (error) {
    errors.push(`${label}: ${error.message}`);
    return null;
  }
}

function requireString(object, key, label) {
  if (typeof object?.[key] !== "string" || object[key].trim() === "") {
    errors.push(`${label}.${key} must be a non-empty string`);
  }
}

function parseFrontmatter(content) {
  const normalized = content.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) return null;
  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) return null;

  const fields = {};
  for (const line of normalized.slice(4, end).split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    if (key) fields[key] = value;
  }
  return fields;
}

async function validateSkills(pluginDir) {
  const skillsDir = path.join(pluginDir, "skills");
  if (!(await exists(skillsDir))) {
    errors.push("plugin skills directory is missing");
    return;
  }

  const entries = await fs.readdir(skillsDir, { withFileTypes: true });
  const skillDirs = entries.filter((entry) => entry.isDirectory());
  if (skillDirs.length === 0) {
    errors.push("plugin must contain at least one skill");
  }

  for (const entry of skillDirs) {
    const skillPath = path.join(skillsDir, entry.name, "SKILL.md");
    if (!(await exists(skillPath))) {
      errors.push(`skill ${entry.name} is missing SKILL.md`);
      continue;
    }

    const frontmatter = parseFrontmatter(await fs.readFile(skillPath, "utf8"));
    if (!frontmatter) {
      errors.push(`skill ${entry.name} has invalid YAML frontmatter`);
      continue;
    }
    if (!frontmatter.name) {
      errors.push(`skill ${entry.name} is missing frontmatter name`);
    }
    if (!frontmatter.description) {
      errors.push(`skill ${entry.name} is missing frontmatter description`);
    }
  }
}

async function validateMcp(pluginDir, manifest) {
  if (manifest.mcpServers !== "mcp.json") {
    errors.push('plugin.mcpServers must reference "mcp.json"');
  }

  const mcpPath = path.join(pluginDir, "mcp.json");
  const mcp = await readJson(mcpPath, "mcp.json");
  if (!mcp) return;

  const server = mcp.mcpServers?.alpic;
  if (!server || typeof server !== "object") {
    errors.push("mcp.json must define mcpServers.alpic");
    return;
  }
  if (server.url !== "https://mcp.alpic.ai") {
    errors.push("mcpServers.alpic.url must be https://mcp.alpic.ai");
  }
  if ("headers" in server || "env" in server) {
    warnings.push("Alpic MCP config contains headers or env; OAuth should not require committed credentials");
  }
}

async function main() {
  const marketplacePath = path.join(root, ".cursor-plugin", "marketplace.json");
  const marketplace = await readJson(
    marketplacePath,
    ".cursor-plugin/marketplace.json",
  );
  if (!marketplace) return finish();

  requireString(marketplace, "name", "marketplace");
  requireString(marketplace.owner, "name", "marketplace.owner");
  if (!Array.isArray(marketplace.plugins) || marketplace.plugins.length !== 1) {
    errors.push("marketplace.plugins must contain exactly one plugin");
    return finish();
  }

  const entry = marketplace.plugins[0];
  requireString(entry, "name", "marketplace.plugins[0]");
  requireString(entry, "source", "marketplace.plugins[0]");
  requireString(entry, "description", "marketplace.plugins[0]");
  if (!pluginNamePattern.test(entry.name ?? "")) {
    errors.push("marketplace plugin name must be lowercase kebab-case");
  }

  const normalizedSource = path.posix.normalize(entry.source ?? "");
  if (
    path.isAbsolute(normalizedSource) ||
    normalizedSource === ".." ||
    normalizedSource.startsWith("../")
  ) {
    errors.push("marketplace plugin source must be a safe relative path");
    return finish();
  }

  const pluginDir = path.resolve(root, normalizedSource);
  const manifest = await readJson(
    path.join(pluginDir, ".cursor-plugin", "plugin.json"),
    "Cursor plugin manifest",
  );
  if (!manifest) return finish();

  for (const key of [
    "name",
    "displayName",
    "version",
    "description",
    "publisher",
    "homepage",
    "repository",
    "license",
    "logo",
    "category",
  ]) {
    requireString(manifest, key, "plugin");
  }
  requireString(manifest.author, "name", "plugin.author");
  requireString(manifest.author, "email", "plugin.author");

  if (manifest.name !== entry.name) {
    errors.push("marketplace plugin name must match plugin manifest name");
  }
  if (!pluginNamePattern.test(manifest.name ?? "")) {
    errors.push("plugin name must be lowercase kebab-case");
  }
  if (!Array.isArray(manifest.keywords) || manifest.keywords.length === 0) {
    errors.push("plugin.keywords must be a non-empty array");
  }
  if (manifest.skills !== "skills") {
    errors.push('plugin.skills must reference the "skills" directory');
  }

  const logoPath = path.resolve(pluginDir, manifest.logo ?? "");
  if (!(await exists(logoPath))) {
    errors.push(`plugin logo is missing: ${manifest.logo}`);
  }
  if (!(await exists(path.join(root, "LICENSE")))) {
    errors.push("repository LICENSE is missing");
  }
  if (!(await exists(path.join(pluginDir, "README.md")))) {
    errors.push("plugin README.md is missing");
  }

  await validateSkills(pluginDir);
  await validateMcp(pluginDir, manifest);
  finish();
}

function finish() {
  for (const warning of warnings) {
    console.warn(`Warning: ${warning}`);
  }
  if (errors.length > 0) {
    for (const error of errors) {
      console.error(`Error: ${error}`);
    }
    process.exitCode = 1;
  } else {
    console.log("Cursor plugin validation passed.");
  }
}

await main();
