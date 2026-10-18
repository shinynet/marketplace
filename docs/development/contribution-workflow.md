# Contribution workflow

Read [coding guidelines](coding-guidelines.md) before code implementation/review. Product/content/publication changes follow [PR delivery](pr-create.md) and [Jira](jira-workflow.md).

## Workspaces and cleanup

Use a dedicated task worktree for implementation and an exact-current-head checkout for review. Do not reset/switch a checkout under another task or its verification. Use T3 worktree isolation when a delegated task needs its own checkout; preparation and dependencies belong to that checkout.

The creator owns task-worktree cleanup; the implementing author is the backstop for all delegated review, temporary and T3-created checkouts. Track paths, preserve evidence/unique work, stop only owned processes and remove clean terminal worktrees through their supported lifecycle. Confirm both path absence and `git worktree list`; settling a T3 thread alone does not prove removal. Do not force-remove dirty, unrelated or live-owned work. Cleanup precedes Jira Done.

## Documentation and instructions

Update affected canonical documentation and relevant designs with the change. Before PR creation and closeout, reconcile actual behavior, requirements, indexes and approved artifacts; distinguish planned from shipped. Completed plans follow [plan retirement](../plans/README.md#completion-and-retirement).

Keep `AGENTS.md` short and `CLAUDE.md` importing only `@AGENTS.md`. Detailed guidance uses ordinary path links and loads when relevant. Keep one authoritative home per rule; leave tutorials, inventories, dated evidence and transient task state out of the shared core. Do not copy sibling implementation conventions merely because policy is shared.

## Internal guidance exception

Requested contributor-guidance, nonserved technical-documentation/design-artifact or repository-configuration-only changes may be committed directly to `main` after relevant reference/configuration checks and diff inspection; no ticket, PR or extra worktree is required. This does not exempt served content, runtime behavior, release/catalog/channel metadata or assets from their delivery/approval contracts. Mixed changes follow the product lifecycle. Preserve unrelated local commits and worktrees.
