---
uid: api.c1ded15cd8d52fe83e03759e2ee2677272f5a26d531917b0e0a2273258b1bf38
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.EditorAudioHost.EnterExecutionScope(Inno.Runtime.RuntimeSession)"
source: xml
reviewed: 73b1d3dcbdf47a7f3feb8058e6560a689203597db79a41be49363bc2bd30251c
title: "EditorAudioHost.EnterExecutionScope"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Binds the script-facing audio façade to one session's runtime.

## Parameters

**Parameter `session`:** Session whose feature pipeline owns an active Editor audio generation.

## Returns

A strict last-in-first-out execution scope.
