---
uid: api.5c5997c9062f0bb5e218d0c99f4401c95b82c8810dd12d2161d8d3c417573886
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.IEditorAudioHost.EnterExecutionScope(Inno.Runtime.RuntimeSession)"
source: xml
reviewed: 4cc8bf4091b851ba483f203ccf3af74b4a8919475c36c5eb542b625508fd1c79
title: "EnterExecutionScope"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Binds the script-facing `N:Inno.Editor.Audio` façade to one session's audio runtime.

**Parameter `session`:** Session whose feature pipeline owns an active Editor audio generation.

**Returns:** A strict last-in-first-out execution scope.
