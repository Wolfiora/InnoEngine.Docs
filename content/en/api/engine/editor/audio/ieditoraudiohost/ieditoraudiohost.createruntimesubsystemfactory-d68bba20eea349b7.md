---
uid: api.d68bba20eea349b7cb0e827eb10ef7e2b9e74b92d20a2864545a83fb8586b890
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.IEditorAudioHost.CreateRuntimeSubsystemFactory(Inno.Runtime.RuntimeSession)"
source: xml
reviewed: dc5efdc8aa2027dbb7b49e68c19bd775b96934496a25b18588a2010ed89c5157
title: "IEditorAudioHost.CreateRuntimeSubsystemFactory"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Creates the reusable factory that contributes isolated audio runtimes to Editor sessions.

## Returns

A factory whose features are owned and released by their runtime sessions.

## Parameters

**Parameter `session`:** The explicit session being composed.
