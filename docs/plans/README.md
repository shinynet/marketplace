# Implementation plans

Use [launch/](launch/) for committed launch work and [non-launch/](non-launch/) for deferred/exploratory/post-launch work. Record owning epic/tickets, scope, approval/review state, current contracts/paths/designs, dependencies, release order and observable acceptance. Do not promote undecided work by where you file it. Existing plans elsewhere are legacy; classify/relocate when revising them from approved intent, not guesswork.

## Approval and review

Once Devin accepts a plan, obtain [independent review](../development/review-workflow.md) before declaring it ready, decomposing implementation-ready tickets or starting authorized execution. Review current code/contracts, simplest sound design, edge cases, ownership, sequencing and test value. Iterate to explicit final agreement. Minor technical refinements are autonomous; material changes to approved intent go back to Devin. Approval does not authorize an unassigned next phase.

Tickets then follow [Jira workflow](../development/jira-workflow.md) and receive their own decomposition/description review.

## Completion and retirement

The final delivery change distills durable decisions into the owning technical docs, reconciles affected designs/content and deletes completed launch/ticket plans and completed temporary discussion transcripts. Repair indexes/live links. Keep unfinished/deferred work, approved design baselines and irreplaceable release/approval evidence; split non-launch scope before retiring a completed launch portion. Git preserves retired plans.

The epic's final ticket owns this reconciliation. Do not move the epic to Done while completed execution plans still look active or deployment, relevant acceptance or task cleanup remains. Non-launch plans stay clearly deferred until delivered or superseded, then follow the same retirement process.
