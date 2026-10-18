# Coding guidelines

Read this guide before implementation or code review; apply only sections relevant to the change.

## Solution quality

- Choose the best long-term correctness, ownership and maintainability. Simplicity describes the resulting design, not the smallest diff or quickest patch. Refactor the affected subsystem when that resolves the root cause; avoid speculative abstractions and temporary workarounds.
- eFitware is prelaunch with test users. Do not add user-compatibility scaffolding merely to preserve obsolete test-account behavior. This does not waive security, real provider/consumer contracts, immutable published assets or private-source preservation.
- Keep coherent responsibilities with existing owners and reuse established components/contracts. Remove superseded code; comments explain non-obvious intent and constraints. Prefer ordinary arrow functions/plain data; classes need an actual identity/lifecycle requirement.

## Types and boundaries

- Use strict TypeScript without `any`; validate/narrow untrusted input. Model absence with `undefined` unless an established contract gives `null` a distinct meaning. Reuse the owning schema/type rather than introducing parallel representations.
- Keep private implementation types with their owner and true wire contracts in the repository's established shared modules. Tests do not justify exporting production internals.
- Enforce authentication, ownership, validation, bounded inputs and retry semantics at the affected boundary. Never put credentials, sensitive documents or unredacted provider errors into code, logs or public artifacts.

## UI and verification

- Use semantic HTML, native controls/accessible library primitives, logical headings, named controls, keyboard/focus behavior and meaningful image alternatives. Use existing tokens/components; avoid static inline styling and duplicate theme values.
- Match the repository's framework and data-flow ownership, not a sibling application's architecture. Inspect the changed real content at relevant phone/desktop widths and themes; use [DESIGN.md](../../DESIGN.md).
- Select checks and valuable new coverage under [the test strategy](../testing/test-strategy.md); keep docs/designs consistent with delivered behavior. Report observed behavior separately from automated/static evidence.

## Marketplace contracts

- Keep Vue/Vite iframe behavior in `apps/workout/` and independent versioned contracts/fixtures in `contract/`. The product DTO/server contract is authoritative; generated consumer schemas are open draft-07 projections, not a second server policy owner.
- Record intentional approved copies in `apps/workout/lib/PROVENANCE.json` with source identity/hash and copied-file hash. Preserve compatible behavior with independent fixtures; never import sibling source or private Git history.
- Bundle Vue, fonts, theme and assets into the deterministic single HTML output; no runtime CDN requests. Preserve the existing 1,500,000-byte uncompressed limit and validate host-bridge capability/refusal behavior.
- Preserve plugin identity `efitware@efitware`, MCP server key `eFitware`, production endpoint `https://app.efitware.com/mcp/v1`, English/German copy parity and locale/unit formatting. Do not import a Nuxt runtime, product routing system or account credential into the card.
- Published tags, assets and manifests are immutable. A released mistake needs a new version. Keep tagged source in `main` ancestry; never squash or rebase a tagged release branch. Follow [release ownership](../releases.md), including schemas, fixtures, provenance and downstream compatibility.
- `minimumAppCommit` identifies capability source, not necessarily a squash merge or serving deployment. Verify those identities separately. Catalog/channel promotion changes advertised metadata only, never already-published bytes.
