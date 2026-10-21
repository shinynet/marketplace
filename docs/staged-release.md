# 0.1.41 promotion preparation

Version 0.1.41 contains the exercise-unit, manual activity-progress and minimal
withheld-calendar contracts for EF-2100 (EF-2118 / EF-2106 / EF-2103). Cards and
instructions use explicit measurement objects and resolved per-category units,
keep exact converted loads, and require explicit intent for lasting preferences.
Activity progress has manual-only coverage, range-wide metric optionality,
zero-filled observed metrics and dated longest single intervals. Aggregate
km/mi distance readouts use two decimals; canonical storage stays exact.

## Immutable identity

- Approved/tagged source: `8eef2f72666f4821b95af9854ed5988f486d2105`.
- Annotated tag and staged release: [v0.1.41](https://github.com/shinynet/marketplace/releases/tag/v0.1.41).
- Manifest SHA-256: `eb3499a082d04534b51b0be7f959e838fb459690820e86097833b53ec3964e77`.
- Capability floor: `7b04b46aa88b8c71c1fb6359e3910ff35ca1fc1d`.
- Official [stage workflow 39576397853](https://github.com/shinynet/marketplace/actions/runs/39576397853) passed, including 26 files / 245 tests.

The parent independently downloaded all 27 release assets and verified their
bytes, manifest hashes and GitHub asset digests before pinning the application.
The approved pin is now shipped. This preparation changes no tagged source,
release asset, manifest or minimum-capability field and creates no second version.

## Compatible producer and fresh public checks

The parent verified production release 0.5.0 source
`10d20af2aaecdb8d38217e3b8756ee95b43e4d1f`, deployment
`dpl_8QPJjghPJUM5tkgo22zYsZo9cWTS`, using five canonical deployment API reads
checking project, production alias, READY and exact source. Migrations 180–185
are applied. [Normal release workflow 39688776223](https://github.com/shinynet/efitware-app/actions/runs/39688776223)
succeeded from reviewed parent `df291a08652687bf4ba747cc0490d8bef6186477`;
its release commit contains the version/manifest delta. The parent reports
828 files / 8,078 tests and 196 E2E checks green at that reviewed parent.
These deployment, migration and broad-suite results are parent-provided evidence,
not repeated by this metadata preparation.

Fresh uncached public reads at 2026-10-21T23:15:46Z returned appVersion `10d20af`
and release `0.5.0`. All four production-hosted files under
`https://app.efitware.com/downloads/efitware/0.1.41/` match the immutable manifest
and live GitHub asset digests: manifest, Codex ZIP, Claude ZIP and standalone
skill ZIP. Exact URLs, byte counts, hashes and asset IDs are recorded in the
[download proof](evidence/0.1.41-production-downloads.json).
Git ancestry also confirms the minimum capability commit precedes the serving
release. The public release-commit endpoint lists first-parent releases only;
a 404 for the capability commit is not evidence of missing capability.

## Prepared metadata and remaining action

`channels.json` prepares `published: 0.1.41` and `staged: null`.
`.github/release-promotion.json` records the exact immutable identity and
compatible READY deployment. Both catalogs remain byte-identical: they have
versionless local-path entries pointing at the plugin. Both plugin manifests
already say 0.1.41 and remain byte-identical. No catalog schema or version field
is invented; tool inventory, schemas, cards, skill and packaging stay unchanged.

This branch is preparation only. The release is still an immutable prerelease;
no latest/release metadata or catalog publication has been performed here.
The parent must obtain independent exact-head review, then merge PR #48 using
a merge commit or fast-forward preserving the annotated tag's source ancestry.
That main-branch channel/receipt update triggers the existing
`Promote verified immutable release` workflow. The workflow verifies all 27
assets, promotes only release metadata, then checks unchanged asset identities
and GitHub latest. Do not run `scripts/promote-release.ts` as a validation command:
it performs that publication write. If Actions cannot run, leave the release
staged until the parent explicitly authorizes the same reviewed manual procedure.
No manual fallback is executed by this preparation.

The parent then independently re-downloads the manifest, verifies its unchanged
hash and the workflow's asset identities, and handles any separately reviewed
website mirror update. No website delivery claim is made here.

## Evidence reuse and limits

The full 26-file / 245-test source suite, strict 26-file asset packaging and
published stage workflow at source `8eef2f7` remain valid: this delta touches
only channels, receipt and documentation. Fresh checks use the existing receipt
schema, metadata agreement, immutable identity and Git ancestry; no build, full
suite, development server or native process is needed. Installed dependency
lock bytes match before the lightweight schema check.

Parent-reported authenticated MCP SDK 1.32 qualification (28 calls, revocation
403 and cleanup) and release SDK compatibility for both generations remain
separate evidence. This preparation does not repeat them or turn fixture tests
into authenticated proof. Desktop/natural-language activation is not claimed.
Native 1.5 OTA is uninitialized with nothing published; physical Samsung
qualification remains held. Native work, final activation, website promotion,
Jira closeout and cleanup remain with their parent/owners.
