---
uid: api.inno.audio.9ba5ad2168e42c86
symbol: "engine:Inno.Audio:T:Inno.Audio.AudioContentProviderContext"
source: xml
reviewed: b9bc15d5457f4b32d68f719482f58070a17b500b83ffe2e482a61b9fb1c75580
title: "AudioContentProviderContext"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
contracts:
- project.inno-audio#playback-and-device-contract
aliases: []
---

Collects one bounded, atomic provider contribution on the owning control thread.

## Remarks

The host disposes this borrowed context when the provider returns. A rejected submission invalidates the entire contribution, even if the provider catches the exception. The context does not own the content scope.
