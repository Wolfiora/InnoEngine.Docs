---
uid: api.c1ded15cd8d52fe83e03759e2ee2677272f5a26d531917b0e0a2273258b1bf38
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.EditorAudioHost.EnterExecutionScope(Inno.Runtime.RuntimeSession)"
source: xml
reviewed: 20b43ba6d64dba998886446db624a749bc04f8d38919238872eef1c0b35694ad
title: "EnterExecutionScope"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Binds the script-facing audio façade to one session's runtime.

**Parameter `session`:** Session whose feature pipeline owns an active Editor audio generation.

**Returns:** A strict last-in-first-out execution scope.
