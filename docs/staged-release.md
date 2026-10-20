Version 0.1.40 prepares the EF-2090 canonical training-space equipment contract.
The card, generated context schema and skill consume/send only
`trainingSpaces[].equipment.items`, containing official slugs and account-owned
`ceq-` ids. Custom labels resolve through `record.customEquipment`. Empty and
unconfigured inventory states and required/typed `items` validation are retained.

Approved behavior source is marketplace PR #46, merged without squashing at
`1b562488e7f84e2d595523518a02b13313ccb515`; its reviewed head
`c261b041adea69930a1698eeb3f6b38e654d4df1` remains in ancestry. This successor
changes only version and source/compatibility metadata. `minimumAppCommit` is
`8c7f26843ba4389e103930c3d24e8960c17aae0a` (app PR #1663), the capability source
that contracts training-space writes to strict items-only inventories. It is
not a claim about a serving deployment. Tool inventory is unchanged.

This is source preparation. No v0.1.40 tag, immutable assets, application pin,
catalog promotion, application release or deployment is claimed here. Existing
0.1.39 assets remain immutable. After separate publication authorization, the
existing tag-triggered stage-release workflow must build the exact approved
source, preserve that tagged source in main ancestry and publish new staged
assets with the generated manifest's actual commit and hashes. The app then
pins that actual manifest and verifies its affected context contract. Promotion
and the final application release remain separate owner decisions.
