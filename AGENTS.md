# eFitware marketplace agent instructions

`shinynet/marketplace` owns public client plugins/skills, Vue MCP App views, consumer schemas and immutable release artifacts. Default branch: `main`. Jira: `EF` on `shinynet.atlassian.net`.

## Working rules

- This is public client code. Never copy private server source/history, environment files, credentials or product data. Product auth, permissions, MCP tools and persistence stay in efitware-app; deliberate approved helper/theme copies require provenance and independent contract fixtures.
- Before implementation or code review, read [coding guidelines](docs/development/coding-guidelines.md). Favor the simplest sound long-term solution, including warranted prelaunch refactors.
- Own assigned work through independent review, verified delivery, documentation/design reconciliation, owned-worktree cleanup and Jira closeout. Resolve blockers autonomously within scope; ask Devin only for a necessary decision/access that cannot be resolved another way. Record unrelated actionable discoveries without expanding the assignment.
- Select checks under [test strategy](docs/testing/test-strategy.md): focused per ticket, reusable valid evidence and one applicable complete integration qualification before epic Done. Do not infer a full-suite requirement from a path or reviewer identity.
- Choose agents/models/effort and concurrency for the task and shared-host pressure; no fixed role quotas. Use [agent operations](docs/development/agent-operations.md) and [independent reviews](docs/development/review-workflow.md). Use TWG for Jira with only the documented board-placement exception.

## Read when relevant

Ordinary path links load on relevance. `CLAUDE.md` imports only this shared core.

- Implementation, internal docs and cleanup: [contribution workflow](docs/development/contribution-workflow.md).
- PR creation/delivery: [pr-create.md](docs/development/pr-create.md); review: [pr-review.md](docs/development/pr-review.md).
- Tickets/board/epics: [jira-workflow.md](docs/development/jira-workflow.md); plans: [docs/plans/README.md](docs/plans/README.md).
- UI, content, visual acceptance and approved artifacts: [DESIGN.md](DESIGN.md).
- Repository contracts/setup: [Release contracts](docs/releases.md) and [staged release](docs/staged-release.md).

## Commands

Use the repository-pinned Node/pnpm toolchain on the actual execution host. `pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm release:build --output <new-directory> --strict` (release qualification). Node 24 and zip are required. These are available commands, not a mandatory per-ticket checklist.
