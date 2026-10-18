# Test and verification strategy

Select verification by changed behavior and risk, not directory names or a fixed per-PR bundle. Trace callers/consumers and choose the smallest reliable checks for acceptance and consequential failure paths. Broaden only for a concrete cross-cutting change, uncertain impact or regression evidence; record why. Actual security, private/public output, immutable publication and device/release qualification still apply when affected.

## Valuable coverage

Add coverage only for a distinct material failure: security, money, data integrity, atomicity/recovery, external contracts or a critical product journey. Extend the lowest reliable existing surface. Avoid implementation-string mocks/source-layout checks, trivial pass-through tests, redundant layers and large equivalent-case matrices. Missing file/branch coverage alone is not a reason. Presentation-only changes normally need actual output inspection, not new automated tests.

## Evidence reuse

Reviewers independently evaluate selection/results, not automatically rerun the author's successful commands. Reuse trustworthy results when relevant source, dependencies/configuration/fixtures and execution conditions match. For a changed head inspect the delta and rerun affected checks; do not reset every gate. Record reviewed and tested revisions and the reuse basis; never label reused results as fresh execution. A contention/empty log or skipped setup is not a passing run. Material failures or missing evidence for an affected consequential boundary block approval; an unrun unrelated suite does not.

## Repository checks

Select affected Vitest files under `contract/` and relevant code/type/build checks. `pnpm test` runs the retained automated suite. Card/contract changes need affected schema/fixture/render/bridge evidence; a skill-only prose change does not automatically require every UI scenario.

Creating/promoting an immutable release additionally requires deterministic packaging, exact source/tag/manifest/asset identity and compatibility checks in [releases](../releases.md). Those publication checks address a different risk from ordinary code tests. Fresh website HTTP transport and real external-client activation remain separately evidenced.

## Epic closeout

Before epic Done, run the complete retained automated suite (`pnpm test`) once against the integrated epic state. Reuse a successful run that already covers that state and its relevant inputs; no duplicate ceremonial run is needed. This is not a per-ticket/reviewer gate.

Complete additional applicable browser/native/publication/release acceptance. Resolve material failures before Done. After fixes rerun affected checks; repeat the broad suite only when the broader evidence is invalidated. Do not add an arbitrary every-few-merges schedule or place an unnecessary broad run on every ticket's review path.
