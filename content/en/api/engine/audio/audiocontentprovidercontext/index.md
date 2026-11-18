---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.audio.9ba5ad2168e42c86
symbol: engine:Inno.Audio:T:Inno.Audio.AudioContentProviderContext
title: AudioContentProviderContext
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 37097fa3699a3d3262b90ca0b17b7b4068492d44be533dd45916dda139af9c0e
contracts:
- project.inno-audio#playback-and-device-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

The host disposes this borrowed context when the provider returns. A rejected submission invalidates the entire contribution, even if the provider catches the exception. The context does not own the content scope.
