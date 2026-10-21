# Exercise units source handoff (EF-2118)

This source change consumes the EF-2116 exercise-unit foundation through the
EF-2118 Coach/MCP projection. It is not a published successor to 0.1.40.

The successor artifact must include `plugins/efitware/skills/efitware/SKILL.md`,
`workout.html`, `compat-fixtures.json`, and the generated workout, template,
exercise-progress, progress and calendar view schemas. Cards accept exact
converted load scalars and explicit distance/pace/speed/elevation objects.
They render denominations literally, use resolved categories for empty fields,
and send edited distance as `{value,unit}`. Template targets retain planned
pace, zone and RPE; recorded pace/speed/elevation/RPE are distinct actuals.
Minimal withheld calendar rows expose neither imported titles nor actions.

The parent EF-2100 delivery owner must prepare the successor release metadata
with the actual approved application consumer commit as its capability floor,
publish new immutable assets, independently download/verify the actual manifest,
and update the application pin. Do not reuse a previous release's digest or
claim a local candidate hash is a published identity. Then rerun application
measurement/skill/schema parity and the parent's integrated qualification.
Existing release assets and the current pin are unchanged by this source PR.

Local qualification uses the focused measurement/calendar contract suites,
Vue type checking, changed-file lint, the ordinary card build and synthetic
browser rendering of the real components. Narrow English light and German dark
set views retain literal units, and the distance edit sends 110 yd without
converting it. Withheld calendar rows render at narrow/wide widths and offer no
workout action. These are component fixtures, not authenticated MCP host or
physical-device evidence. No authenticated new-contract endpoint is available
before parent integration/publication; promoted-client authentication and saved
readback remain explicit follow-through.
