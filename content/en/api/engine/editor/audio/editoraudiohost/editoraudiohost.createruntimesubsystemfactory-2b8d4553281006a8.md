---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2b8d4553281006a81e8a505dd1451472f09a91eb6524ef74e6478c8b30687652
symbol: engine:Inno.Editor.Audio:M:Inno.Editor.Audio.EditorAudioHost.CreateRuntimeSubsystemFactory(Inno.Runtime.RuntimeSession)
title: EditorAudioHost.CreateRuntimeSubsystemFactory
kind: api
owners:
- Inno.Editor.Audio
apiSurface: source-clr
reviewed: 3acf27883f65e9292e408e90e9c702b3bb5d8b58b18660615509a864c6d39a6d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `session`:** The explicit session owner; it is never exposed through subsystem contracts.

## Returns

A factory that creates and releases one isolated audio generation per session.
