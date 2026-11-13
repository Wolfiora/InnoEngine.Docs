---
uid: api.inno.audio.9ba5ad2168e42c86
symbol: "engine:Inno.Audio:T:Inno.Audio.AudioContentProviderContext"
source: xml
reviewed: e2050b5293065db7005b1543efab32e8aed508cf214db920a2b1ede1bfe547bf
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
