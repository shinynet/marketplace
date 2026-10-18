# Agent operations

Choose subagents, models and effort appropriate to the task. The parent owns the outcome. In T3, discover live providers/models/options with `orchestrator_capabilities`; use native same-provider children when they support the chosen model, otherwise `delegate_task`, including cross-provider work. Use `isolation: "worktree"` for a separate checkout. Do not create top-level conversations unless Devin asks for them.

Give children self-contained outcomes, paths, relevant instruction links, constraints and required evidence. Track task IDs and worktree paths. Async completion wakes the parent; use `task_status` for a needed result, not a polling loop. Each independent review round follows [review workflow](review-workflow.md).

Use another agent's suitable tools/authorized access to resolve capability blockers; Claude normally delegates substantial computer-use work to Codex. Delegation does not override authorization or safety boundaries. Attempt supported lazy-loading/ACP transport before declaring T3 delegation unavailable; report concrete configuration restrictions rather than silently substituting models or changing global settings.

## GitHub identities

Claude writes as `claude-efitware-bot[bot]`, the GitHub App now owned by the `shinynet` organization; Codex writes as `devinholloway` (formerly `shinynet`). Repositories live in the `shinynet` GitHub organization. On this Mac, bare `gh` is `devinholloway`. Verify the effective actor before writes and use an account different from the PR author for reviews. Selecting a model does not switch shell credentials. Use the existing connected tool/client for that identity; do not globally switch accounts.

On this Mac, Claude's existing wrapper is `~/.config/claude-efitware-bot/bot-gh`; its Git helper is `~/.config/claude-efitware-bot/git-credential-bot`. Keep commit/push identity task- or command-scoped, including internal-guidance pushes. Verify equivalent access on other hosts. Never print tokens, use Vercel `--token` arguments or load sibling environment files.

## Shared environment

Determine the execution host and authenticated browser session first. The Mac mini's 16 GB of RAM is shared across all threads/providers/repos/worktrees plus browsers, servers and verification. Choose concurrency and the implementation/review mix for actual bottlenecks and memory pressure; there are no fixed role quotas or universal heavy-job caps. Account for other active work, stagger/reduce owned workloads under contention and scale up when resources permit. Preserve others' resources and actual harness/device coordination.

Use the repository's pinned toolchain on the execution host. Temporary paths are disposable; keep resumable briefs and irreplaceable evidence in task-owned persistent storage. A different client's OS or remembered browser connection does not establish current access.
