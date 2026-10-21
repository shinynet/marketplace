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

The same successor consumes the frozen EF-2106 activity progress contract at
`5ca571d815b6a432866ae2cd5746a66729facf2a`. The general `progress-view.schema.json` consumer schema includes `cardio.activities`, the selected range/week boundary and literal
`manual-only` coverage. `context-view.schema.json` describes training context,
not cardio progress, and has no pooled-effort field to replace. Weekly distance
and longest-interval distance are km/mi
measurement objects, never the application's canonical `distanceMeters`.
The card omits time for distance-only activity and distance for time-only
activity; observed metrics retain zero-filled empty weeks. All eleven activities
have localized labels. Longest distance is dated and explicitly not a PR or race
split; zone-2 copy identifies whole tagged interval durations. There is no pooled
best-effort compatibility adapter. `compat-fixtures.json` includes the frozen
shared progress payload plus independent observed/empty cases for this cutover.
The parent must merge the matching approved EF-2106 app projection before pinning
this single combined successor; the EF-2118 app PR does not duplicate that owner.

Additional focused qualification for the combined candidate: 87 tests pass across
measurement, calendar and progress-unlock contracts. The activity view renders
all eleven activity labels, distance-only running and time-only walking at
320 px English/light, 390 px German/dark and 1280 px without horizontal overflow;
the empty activity range retains the manual-only coverage label and required
zone-2 zero. These remain synthetic component observations.
