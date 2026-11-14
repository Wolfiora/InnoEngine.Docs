---
uid: api.5c5997c9062f0bb5e218d0c99f4401c95b82c8810dd12d2161d8d3c417573886
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.IEditorAudioHost.EnterExecutionScope(Inno.Runtime.RuntimeSession)"
source: xml
reviewed: 4bff7b1b62145bad280e8f12fdb21e98733711092f261577e4ce08a246961b85
title: "IEditorAudioHost.EnterExecutionScope"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Binds the script-facing `N:Inno.Editor.Audio` façade to one session's audio runtime.

**Parameter `session`:** Session whose feature pipeline owns an active Editor audio generation.

**Returns:** A strict last-in-first-out execution scope.
