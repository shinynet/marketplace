# 0.1.42 completed promotion (EF-2298)

This release removes imported-source exclusions from the client skill, calendar
and progress cards. Imported and linked imported results use ordinary training
names, lifecycle states, actions and progress calculations. The existing
per-client health-sharing boundary remains unchanged.

The approved immutable source is `0e62fbf7f543c7296e4712633ebcf0d96bebcd1f`,
retained by annotated tag [v0.1.42](https://github.com/shinynet/marketplace/releases/tag/v0.1.42).
[Stage run 40465810951](https://github.com/shinynet/marketplace/actions/runs/40465810951)
succeeded; its immutable prerelease has 27 assets. Manifest SHA-256 is
`1d4e207eb4b3423784c1715470065c793a936f2d274c6621565a2045506f0cfa`.
Both plugin manifests identify 0.1.42. The minimum producer remains
`47b0b29bc71ce9dbfab6213bd677e027ad54b490` (EF-448).

Compatible application [release v0.8.0](https://github.com/shinynet/efitware-app/releases/tag/v0.8.0)
completed through [run 40519785665](https://github.com/shinynet/efitware-app/actions/runs/40519785665).
Fresh authenticated Vercel project/alias/deployment reads agree on READY
`dpl_8ktyZpENbKh8tcDTAiDZebXWC1Ex`, serving source
`b2b39e45be9f815d7b55063c627544f93b7bd21e`, which retains the minimum producer.
Uncached public reads on 2026-10-27 confirm version 0.8.0, source `b2b39e4`,
health 200 and migrations current. All four application-hosted downloads match
the immutable pin; [the receipt](evidence/0.1.42-production-downloads.json)
records their hashes and byte counts. These are delivery-owner observations;
independent reviewers may reuse them without claiming fresh deployment checks.

This candidate updates only channel/promotion metadata and nonserved evidence.
Both catalogs are versionless local-path entries and remain byte-identical;
plugin manifests already say 0.1.42. Tagged source, manifest, asset bytes,
minimum producer, tool inventory, schemas and cards remain unchanged.

[PR #49](https://github.com/shinynet/marketplace/pull/49) received independent
Sonnet 5.5 high approval at `bc92b974ef586a35acd5ec0788150a8ab3cb8c0b` and
merged as `5dabbdd356b7aa7dd06373dc6cc957288f91e268`, preserving the tagged source.
The metadata commit and merge used `[skip ci]` to avoid repeating unchanged
artifact checks. The existing manual [promotion run 40522230777](https://github.com/shinynet/marketplace/actions/runs/40522230777)
succeeded on 2026-10-27. It verified every asset before clearing prerelease and
proved unchanged identities afterwards. Fresh latest-release readback identifies
immutable release `425132114`, **v0.1.42**, prerelease false and 27 assets.
A fresh manifest download retains the exact hash above.

The narrow coordinated website pin was independently accepted under EF-2298's
consumer exception. [Website PR #60](https://github.com/shinynet/efitware-www/pull/60)
received Sonnet 5.5 high exact-head approval and merged as
`87c4f52c17fc1457f0ca23b32f2defd13cfebf58`. READY deployment
`dpl_6MDuxnuFJPCKoMns6CLKE6FiFN1J` serves that source at www.efitware.com.
The publisher, focused local transport test and real preview HTTP/2 clone passed.
Final public checks passed two fresh HTTP/2 clones and the retained 0.1.39
fast-forward upgrade, each with clean strict fsck, only HEAD/master advertised,
exact plugin/skill identities and private-path 404s. The website records
[the transport receipt](https://github.com/shinynet/efitware-www/blob/master/docs/evidence/ef2298-public-transport.json). This distribution
step does not block EF-448 or EF-2100 functionality; held marketing work and
launch enablement are outside this release.

Visual qualification used synthetic fixtures through the real Vue components
and built CSS in English and German, light and dark, at 375 and 900 px. Calendar
names/actions/statuses and observed/empty cardio views had no source exclusions
or horizontal overflow. This was component rendering, not an authenticated MCP
host, bridge, or Desktop check. Protected-health redaction remains in place.

The prior completed release record follows as history.

---

# 0.1.41 completed promotion

Version 0.1.41 contains the exercise-unit, manual activity-progress and minimal
withheld-calendar contracts for EF-2100 (EF-2118 / EF-2106 / EF-2103). Cards and
instructions use explicit measurement objects and resolved per-category units,
keep exact converted loads, and require explicit intent for lasting preferences.
Activity progress has manual-only coverage, range-wide metric optionality,
zero-filled observed metrics and dated longest single intervals. Aggregate
km/mi distance readouts use two decimals; canonical storage stays exact.

## Immutable identity

- Approved/tagged source: `8eef2f72666f4821b95af9854ed5988f486d2105`.
- Annotated tag and promoted release: [v0.1.41](https://github.com/shinynet/marketplace/releases/tag/v0.1.41).
- Manifest SHA-256: `eb3499a082d04534b51b0be7f959e838fb459690820e86097833b53ec3964e77`.
- Capability floor: `7b04b46aa88b8c71c1fb6359e3910ff35ca1fc1d`.
- Official [stage workflow 39576397853](https://github.com/shinynet/marketplace/actions/runs/39576397853) passed, including 26 files / 245 tests.

The parent independently downloaded all 27 release assets and verified their
bytes, manifest hashes and GitHub asset digests before pinning the application.
The approved pin is shipped. Promotion changed no tagged source, release asset,
manifest or minimum-capability field and created no second version.

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
not repeated by this promotion record.

Fresh uncached public reads at 2026-10-21T23:15:46Z returned appVersion `10d20af`
and release `0.5.0`. All four production-hosted files under
`https://app.efitware.com/downloads/efitware/0.1.41/` match the immutable manifest
and live GitHub asset digests: manifest, Codex ZIP, Claude ZIP and standalone
skill ZIP. Exact URLs, byte counts, hashes and asset IDs are recorded in the
[download proof](evidence/0.1.41-production-downloads.json).
Git ancestry also confirms the minimum capability commit precedes the serving
release. The public release-commit endpoint lists first-parent releases only;
a 404 for the capability commit is not evidence of missing capability.

## Completed metadata promotion

`channels.json` now records `published: 0.1.41` and `staged: null` on main.
`.github/release-promotion.json` retains the reviewed immutable identity and
compatible READY deployment. Both catalogs remain byte-identical: they have
versionless local-path entries pointing at the plugin. Both plugin manifests
already said 0.1.41 and remain byte-identical. No catalog schema or version field
was invented; tool inventory, schemas, cards, skill and packaging are unchanged.

[PR #48](https://github.com/shinynet/marketplace/pull/48) was independently
approved at `4542a257990e8e927b99d745373ca13095b9ac87` and merged using
`ebf1589ff850fc961580b742ff6d20069903757c`, preserving the annotated tag's source
ancestry. The existing [promotion workflow 39692972017](https://github.com/shinynet/marketplace/actions/runs/39692972017)
succeeded; [job 119543411774](https://github.com/shinynet/marketplace/actions/runs/39692972017/job/119543411774)
completed at 2026-10-21T23:22:41Z. It verified all release bytes before promotion,
changed only release metadata and verified asset identities and GitHub latest
afterward. No manual promotion fallback was used.

The parent freshly read GitHub latest as release `419366530`, tag `v0.1.41`,
immutable true, prerelease false, with all 27 assets. Its fresh manifest download
retained SHA-256 `eb3499a082d04534b51b0be7f959e838fb459690820e86097833b53ec3964e77`
and source `8eef2f72666f4821b95af9854ed5988f486d2105`. All 26 manifest-entry
metadata records match the release API. The four previously verified production
downloads retain their asset IDs, sizes and digests. This documentation pass
independently re-read the successful workflow at the merge SHA and GitHub latest;
it did not rerun publication or the earlier download checks.

Public-safe evidence fingerprints retained by the parent:

- Promotion receipt SHA-256: `e9def19c97ef4f18d93f29b4dad6861afa84919cef91a48b8a0f4ac838ab8e0a`.
- Full workflow log SHA-256: `3b5bd04637b3ead42e59d3f841f990df7e6e4d394669d6337e6300c6601100c5`.

The workflow and release links above are the public evidence entry points;
private evidence locations are not published here. Any website mirror update
and actual client/native activation remain separately qualified. Do not rerun
`scripts/promote-release.ts` for documentation validation: it is a publication
writer, and promotion is already complete.

## Evidence reuse and limits

The full 26-file / 245-test source suite, strict 26-file asset packaging and
published stage workflow at source `8eef2f7` remain valid because promotion and
this documentation reconciliation do not change source or packaging. Preparation checked the receipt schema, metadata
agreement, immutable identity and Git ancestry with matched dependency-lock
bytes. This completion pass checks only the documentation diff, local links and
unchanged release metadata; no tests, build, development server or native process
were run.

Parent-reported authenticated MCP SDK 1.32 qualification (28 calls, revocation
403 and cleanup) and release SDK compatibility for both generations remain
separate evidence. This documentation reconciliation does not repeat them or
turn fixture tests into authenticated proof. Desktop/natural-language activation is not claimed.
At the preparation handoff, native 1.5 OTA was uninitialized with nothing
published and physical Samsung qualification was held. This promotion provides
no new native evidence. Native work, final activation, website promotion,
Jira closeout and cleanup remain with their parent/owners.
