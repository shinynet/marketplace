# Pull request review

Read [coding guidelines](coding-guidelines.md), the live ticket and relevant approved plan/specification. Use [the correct identity](agent-operations.md#github-identities), different from the author, and a synchronized review checkout.

- Review the complete current diff, affected owners/callers, comments and responses against every acceptance criterion and dependency. Catch missing scope, dead-end actions, security/data/contract failures and unintended expansion.
- Assess the ideal maintainable root-cause solution, including warranted prelaunch refactors. Reject unnecessary architecture and workarounds with a concrete better alternative; distinguish material issues from style preferences.
- Check consequential edge cases at the affected boundary: invalid/absent input, ownership, retries/concurrency, partial failure, persistence, time/units, offline/accessibility or publication/immutability as applicable.
- For UI/content/media, use [DESIGN.md](../../DESIGN.md) and the applicable approved artifacts. Compare actual rendered/prepared output with intent, not only a possibly drifted plan. Verify documentation/design fidelity and applicable final-plan retirement.
- Assess coverage value and evidence under [test strategy](../testing/test-strategy.md). Reuse valid author/CI results; additional execution addresses a concrete gap, changed input or concern, not reviewer identity or file location. Record reviewed/tested revisions, commands/outcomes, evidence links and reuse rationale honestly.

Submit an actual APPROVE or REQUEST_CHANGES review on the current head. Blocking findings include a failing scenario, impact, path/line and concrete correction; separate optional suggestions. A chat verdict is not approval. Reassess head deltas and substantive responses; rerun affected checks, not every suite automatically.

Return the PR/action and cleanup status. Remove reviewer-created checkouts after final approval/closure/cancellation unless a concrete pending round requires retention. The implementing author owns merge and delivery.
