---
uid: api.2b8d4553281006a81e8a505dd1451472f09a91eb6524ef74e6478c8b30687652
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.EditorAudioHost.CreateRuntimeSubsystemFactory(Inno.Runtime.RuntimeSession)"
source: xml
reviewed: dc3dd72a4fc4bd890de80c1ff79c4af163e213db20b3bb1fc1e161822ecaca4d
title: "CreateRuntimeSubsystemFactory"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Creates the reusable feature factory used by Edit and Play runtime sessions.

**Parameter `session`:** The explicit session owner; it is never exposed through subsystem contracts.

**Returns:** A factory that creates and releases one isolated audio generation per session.
