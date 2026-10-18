# Agent operations

Choose subagents, models and effort appropriate to the task. The parent owns the outcome. In T3, discover live providers/models/options with `orchestrator_capabilities`; use native same-provider children when they support the chosen model, otherwise `delegate_task`, including cross-provider work. Use `isolation: "worktree"` for a separate checkout. Do not create top-level conversations unless Devin asks for them.

Give children self-contained outcomes, paths, relevant instruction links, constraints and required evidence. Track task IDs and worktree paths. Async completion wakes the parent; use `task_status` for a needed result, not a polling loop. Each independent review round follows [review workflow](review-workflow.md).

Use another agent's suitable tools/authorized access to resolve capability blockers; Claude normally delegates substantial computer-use work to Codex. Delegation does not override authorization or safety boundaries. Attempt supported lazy-loading/ACP transport before declaring T3 delegation unavailable; report concrete configuration restrictions rather than silently substituting models or changing global settings.

## GitHub identities

Use separate GitHub App identities for agent PRs, reviews, comments, pushes and other GitHub writes. Both Apps are owned by the `shinynet` organization:

- **Claude:** `shinynet-claude[bot]`, using `~/.config/shinynet-claude/bot-gh` for API/CLI writes and `~/.config/shinynet-claude/git-credential-bot` for Git pushes.
- **Codex:** `shinynet-codex[bot]`, using `~/.config/shinynet-codex/bot-gh` for API/CLI writes and `~/.config/shinynet-codex/git-credential-bot` for Git pushes.
- **Devin:** `devinholloway`. Bare `gh` on this Mac is Devin's human login, not an agent identity. Do not switch its active account or change global Git configuration.

Before each write session, verify the effective actor and compare it with the PR author. Reviews must come from a different identity than the PR author. Selecting a model or setting Git author metadata does not switch API/push credentials. Verify the wrappers without exposing their short-lived installation tokens:

```sh
~/.config/shinynet-claude/bot-gh api graphql -f query='{viewer{login}}' --jq .data.viewer.login
~/.config/shinynet-codex/bot-gh api graphql -f query='{viewer{login}}' --jq .data.viewer.login
```

The expected logins are `shinynet-claude[bot]` and `shinynet-codex[bot]`. Use the appropriate wrapper for all hosted writes, including `pr create` and `pr review`. On other hosts, verify the equivalent service-account client; do not copy Mac credentials or assume a connected GitHub tool has the correct actor.

### Commit and push identity

Configure only the dedicated task/review worktree. Enable worktree configuration in the repository if needed, then select the matching bot's author and credential helper. For Codex:

```sh
git config extensions.worktreeConfig true
git config --worktree user.name 'shinynet-codex[bot]'
git config --worktree user.email '344530680+shinynet-codex[bot]@users.noreply.github.com'
git config --worktree --replace-all credential.https://github.com.helper ''
git config --worktree --add credential.https://github.com.helper "$HOME/.config/shinynet-codex/git-credential-bot"
```

Claude uses `shinynet-claude[bot]`, email `287879316+shinynet-claude[bot]@users.noreply.github.com`, and `$HOME/.config/shinynet-claude/git-credential-bot` in the corresponding commands. The empty helper entry clears inherited GitHub helpers so a push cannot fall back to Devin's human credentials. Preserve other worktrees' identities.

Claude's old `~/.config/claude-efitware-bot` directory is a compatibility symlink to `~/.config/shinynet-claude`. Existing helper paths continue to work; remove the compatibility path only after remaining worktrees/threads migrate. Use the new paths for new work.

### Human connector boundary

The ChatGPT Codex Connector acts as the signed-in human. Local Codex must not use it for GitHub writes. Devin decided on 2026-10-18 to keep it installed only for optional ChatGPT cloud tasks; that installation does not authorize local agents to write as Devin. Human-authenticated PAT/MCP clients are likewise unsuitable for agent writes.

Keep App keys outside repositories in owner-only config directories (mode `700`), with PEM files mode `600` and executable token/helper wrappers mode `700`. Never print or commit keys/tokens, put credentials in command-line arguments, use Vercel `--token` arguments or load sibling environment files.

## Shared environment

Determine the execution host and authenticated browser session first. The Mac mini's 16 GB of RAM is shared across all threads/providers/repos/worktrees plus browsers, servers and verification. Choose concurrency and the implementation/review mix for actual bottlenecks and memory pressure; there are no fixed role quotas or universal heavy-job caps. Account for other active work, stagger/reduce owned workloads under contention and scale up when resources permit. Preserve others' resources and actual harness/device coordination.

Use the repository's pinned toolchain on the execution host. Temporary paths are disposable; keep resumable briefs and irreplaceable evidence in task-owned persistent storage. A different client's OS or remembered browser connection does not establish current access.
