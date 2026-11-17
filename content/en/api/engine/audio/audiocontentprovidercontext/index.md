---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.audio.9ba5ad2168e42c86
symbol: engine:Inno.Audio:T:Inno.Audio.AudioContentProviderContext
title: AudioContentProviderContext
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 4170fb0afa0910e27982cacbc7842df32774550f10102caed0e9d1a0fed55de8
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
