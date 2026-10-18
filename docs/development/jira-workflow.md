---
title: Jira Workflow
description: Ticket quality, epic ownership, labels, board placement and lifecycle.
document-type: policy
status: current
implementation-status: not-applicable
audience:
  - engineers
owner: engineering
last-verified: 2026-10-18
---

# Jira workflow

Use TWG for Jira/Atlassian reads and writes. Resolve live fields and transitions with `twg help`; do not hardcode historical transition IDs. Project: `EF`, site: `shinynet.atlassian.net`, board: **EF board** (ID `5`). For agent-owned work, assign the existing **eFitware AI Agent** account, resolving its current ID rather than creating a duplicate.

## Create implementation-ready work

Search for existing work before creating a ticket. Every non-epic ticket belongs to an epic; reuse the appropriate epic or create a focused one when none fits. Epics themselves need no parent epic. Split work by independently deliverable outcomes and give each shared artifact one implementation owner.

A ticket should let a less capable model implement it without inventing product or architectural decisions. Include only applicable detail:

- Problem, desired behavior, scope and explicit exclusions.
- Owning repository, relevant file paths and current patterns to reuse.
- Settled contracts: types/state semantics, API/data changes, error/retry behavior and migration/release order.
- Observable acceptance criteria, important edge cases and focused verification obligations that meet the [test-value policy](../testing/test-strategy.md).
- Dependencies and exact repository paths/links to relevant designs, specifications and plans; summarize the load-bearing decisions so the ticket is not merely a link dump.

Do not create placeholder tickets that leave essential decisions to implementation. Prefer no label over a vague one. Reuse existing labels with the same meaning and add only labels needed for a real filter, routing or workflow. Search existing usage before adding a label; do not create synonyms, spelling variants or ad hoc status labels.

Before declaring created tickets or an epic ready for implementation, obtain [independent review](review-workflow.md) of the final Jira descriptions and decomposition. Check fidelity to the approved plan, complete acceptance/edge cases, single ownership, dependency order, valuable verification, and correct labels/placement. Resolve all author/reviewer objections; technical refinements need no new Devin approval unless the agreed result materially changes Devin's approved intent.

## Board versus backlog

- Committed launch work belongs on the **Board immediately upon creation**, including work awaiting implementation or review. Explicitly post-launch work and undecided ideas belong in **Backlog**. Do not silently turn undecided ideas into launch commitments.
- Creation defaults to Backlog. Verify placement in the rendered Board section: status, epic membership and results from the Agile backlog endpoint do not prove team-managed board placement.
- For board placement only, TWG's OAuth app lacks `write:board-scope:jira-software`. Use the existing scoped token from `~/.config/efitware-jira/netrc` with `POST /rest/agile/1.0/board/5/issue` on `api.atlassian.com/ex/jira/<cloudId>`, discovering the cloud ID from TWG. Never expose the credential. Use the owner's authenticated Jira browser if that token is unavailable. This exception does not permit alternate routes for other Atlassian operations or authentication repair.
- Preserve statuses during placement. Keep the shared unfiltered Board's **Hide done work items after: Never** setting and the [All tickets view](https://shinynet.atlassian.net/issues/?filter=10040). For an explicit history-visibility repair, cover the entire EF project and preserve resolutions/completion dates; Backlog's older-Done count is not authoritative.

## Progress and closeout

Move work to **In Progress** when implementation starts and **In Review** when the verified PR opens. Keep tickets updated through blockers and review rounds. After approval, implementor merge, successful deployment, relevant verification and task-worktree cleanup, move to **Done** under [pr-create.md](pr-create.md). Merged-but-not-deployed work stays open.

For an assigned epic, continue through its remaining tickets and dependencies autonomously. Before epic Done, verify every child is Done, the [full-suite epic integration check](../testing/test-strategy.md#epic-closeout) and epic acceptance/release checks pass, affected docs/content and applicable approved artifacts under [DESIGN.md](../../DESIGN.md) match delivered behavior, completed plans are retired under [the plan lifecycle](../plans/README.md#completion-and-retirement), and task-created worktrees are removed. Make this reconciliation/cleanup an explicit obligation of the epic's final ticket. Do not complete work owned by another agent without an explicit transfer.
