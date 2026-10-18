# Independent reviews

The author obtains independent review of accepted plans, implementation-ready tickets/decompositions and PRs; each task guide defines its checks.

## Reviewer selection

In T3, use the other provider/model unless Devin specifies otherwise:

- Claude author: Codex `gpt-6.1-sol`, `target.options: { "reasoningEffort": "high" }`.
- Codex author: Claude `claude-opus-5-5`, `target.options: { "effort": "high" }`.

Resolve provider instances and options through `orchestrator_capabilities`; explicitly pass model/effort. For another author provider, choose a different provider/model using these defaults. If unavailable, try supported routes and report the limitation; do not silently substitute or self-approve. Outside T3 use an available independent reviewer.

## Rounds and agreement

Use a new `delegate_task` with role `review`, normally async, for every round. Include the original brief, current artifact/revision, approved intent, relevant ticket/plan/design/guidance paths, evidence, prior findings/responses and unresolved objections. Use a distinct `clientRequestId` stable across retries. Children do not inherit the parent conversation.

Author and reviewer must explicitly agree on the final artifact with all objections resolved. Evaluate findings against evidence rather than accepting unsound changes for consensus. Technical/minor refinements are autonomous; involve Devin only for a material departure from approved intent/scope/launch commitments or an otherwise unresolved necessary decision/access issue. Agreement does not itself authorize implementation or turn non-launch work into launch work.

Track each task ID and child-created checkout through cleanup. Async completion wakes the parent. PR review additionally requires the actual exact-head GitHub decision under [PR review](pr-review.md).
