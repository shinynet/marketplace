Version 0.1.41 prepares the combined exercise-unit, manual activity-progress and
minimal withheld-calendar contracts for EF-2100 (EF-2118 / EF-2106 / EF-2103).

Cards and shipped instructions use explicit measurement objects for exercise
load, distance, pace, speed and elevation. They display resolved categories,
keep exact converted load values, and distinguish a one-off entry from an
explicit request to remember a unit. The progress card consumes only
`cardio.activities`: manual-only coverage, account week boundaries, range-wide
metric optionality, zero-filled observed metrics and dated longest single
intervals. Aggregate distance readouts use km/mi with two decimal places;
canonical storage is exact. Minimal withheld calendar rows reveal no imported
title or workout action. Tool inventory and plugin identity are unchanged.

Approved behavior source `c4383acfa3e0e081d13185e135374dd5cc04f482` remains in
this branch's ancestry. `minimumAppCommit` is `7b04b46aa88b8c71c1fb6359e3910ff35ca1fc1d`
(app PR #1683), the combined runtime capability commit containing approved
EF-2118 source, master `22cfcaa68aa6a6545372b5412a1438bef94fbc38` and EF-2106
`26670b9dbfb57de320b71f8c9960ea9d5d2d3827` through merges. It precedes the
application pin to avoid a circular dependency. It identifies capabilities,
not a serving deployment or a published artifact.

This is staged source preparation. No tag, published assets, downloaded digest,
application pin, catalog/channel promotion or deployment is claimed. Existing
0.1.40 assets remain immutable. After exact-head approval, the parent delivery
owner publishes one staged immutable release through the existing tag-triggered
`stage-release.yml` workflow. The parent independently downloads and verifies
the manifest and assets, pins their actual identities on the combined app branch,
and obtains pin review before master activation. Never pin a local candidate
hash. Preserve the tagged source in main ancestry when later merging.

The current application pin remains 0.1.40 and its load-grid fixture rejection
is a known integration gate. After pinning, rerun measurement/schema/skill parity
and the parent's integrated qualification. Authenticated external MCP saved
readback and device qualification remain separate evidence; local protocol tests
and synthetic card rendering do not establish them.
