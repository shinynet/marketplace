# Pull request delivery

The implementing author owns delivery. Read [coding guidelines](coding-guidelines.md), [contribution/worktree rules](contribution-workflow.md), [Jira](jira-workflow.md) and [GitHub identity](agent-operations.md#github-identities).

1. Move the assigned ticket to In Progress and implement/verify in its task worktree. Select checks by risk under [test strategy](../testing/test-strategy.md), reconcile affected documentation/designs and include applicable [plan retirement](../plans/README.md#completion-and-retirement).
2. Push and open a ready PR, never a draft. Include Jira, behavior, selected checks/rationale, evidence and limitations; move Jira to In Review. In T3 call `link_pull_request` immediately for every created/taken-over PR and stack layer.
3. Obtain [independent review](review-workflow.md) until the current head is approved and both agents' objections are resolved. Include the exact head, ticket/plan/design, evidence reuse basis and instructions to submit an actual GitHub review under [pr-review.md](pr-review.md).
4. Re-read head, approval, unresolved threads and relevant checks. Reassess changed heads and obtain renewed approval; reuse unaffected verification honestly. The author merges with an expected-head guard and preserves repository-specific release ancestry. Reviewers do not merge another author's work without explicit transfer.
5. Verify the applicable deployment/publication contract below. Confirm the intended source/artifacts, not merely an older successful deployment. Diagnose failed or absent delivery and fix through renewed review as needed until healthy. Later served commits may supersede yours if proven to include the change.
6. Reconcile docs/designs/plan retirement, confirm removal of every owned/child task worktree, then move Jira to Done with delivery/verification/cleanup evidence. Internal guidance excluded from published output needs relevant checks, not an unrelated deployment. In T3 confirm `list_thread_pull_requests` includes all work.

When waiting on external PR checks/comments, use T3 `watch_pull_request` and yield, then resume on notification; do not run a parallel polling watcher. Call `unwatch_pull_request` before handing back to Devin. Without T3 use the supported host mechanism.

## Delivery contract

Follow [Immutable release and compatibility procedures](../releases.md) and [staged release record](../staged-release.md). Use this repository's existing deployment access, never a sibling credential. For Vercel, verify project, production target, READY deployment, source SHA and the actual serving alias, then relevant public/authenticated smoke behavior. If the merged source has no production deployment, diagnose the Git integration/limits and use the existing authorized project deployment path to deploy that source; do not substitute a stale READY build or change billing/access. Publication-specific identities and owner approvals remain required.

## Prelaunch hosted CI exception

Actions failures solely from exhausted free minutes, billing or spending limits are nonblocking before launch. Record checks as unavailable, perform relevant local verification and continue without repeatedly asking Devin to fund Actions. Real test/build/deployment failures remain actionable; unavailable is never passing evidence.
