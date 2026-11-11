# eFitware marketplace design and content


Use the existing bundled theme and focused Vue view owners under `apps/workout/`; [release contracts](docs/releases.md) and the versioned `contract/` fixtures define consumer behavior. Preserve compact/expanded navigation, host capability fallbacks, English/German presentation and account units.

Inspect actual affected iframe states at narrow/wide sizes and both themes. Long content, keyboard focus, overflow and bridge refusals matter; an SDK fixture or packaged HTML alone does not prove a real host rendered/authenticated correctly. Keep host-mediated editing and display-only actions explicit.


Unified planning (0.1.44 candidate, EF-2566): program cards use server-owned display names and one-time facts. A one-off opens its dated workout collection without program-management controls. Repeating workouts display the authored rule and dates plus the actual timing state; Pause/Resume uses canonical timing operations. End stops future repeats and retains history. Library covers state session/day/week shape, notes stay inline and do not block preparation, and unconfirmed equipment stays preparable as written. This updates consumer presentation; it does not copy the application's page layouts into the iframe.
