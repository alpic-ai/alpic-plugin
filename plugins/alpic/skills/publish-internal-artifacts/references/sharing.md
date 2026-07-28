# Private visibility and sharing

Select access from the user's intended audience:

| Audience | Visibility | Additional action |
| --- | --- | --- |
| Anyone on the internet | `public` | Require explicit disclosure intent |
| Everyone in the organization | `company` | Require explicit intent to share organization-wide |
| Publisher and named people | `private` | Default; confirm plan support and add allowlist |
| External named reviewers | `company` or `private` | Add exact emails to `sharedWith` |

Public artifacts require no authentication. `sharedWith` does not restrict a
public artifact.

Company artifacts require organization authentication. External addresses on
`sharedWith` can authenticate through the guest OTP flow.

Private artifacts are limited to the publisher and explicitly allowlisted
people and may require a paid plan.

Default every authenticated publish to `private`. If the plan rejects private
visibility, do not retry as `company` or `public`; report the limitation and ask
the user whether they want to broaden access.

When changing access:

1. Fetch the artifact and state its current visibility.
2. Translate the user's audience into a visibility level and allowlist.
3. Call out if the change broadens access.
4. Apply the smallest access change.
5. Fetch metadata again and report the resulting visibility and viewers.

Never silently fall back from private/company to public when a plan or
permission blocks the requested setting.

Official reference: https://display.dev/docs/visibility
