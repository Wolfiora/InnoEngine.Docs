---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.audio.9ba5ad2168e42c86
symbol: engine:Inno.Audio:T:Inno.Audio.AudioContentProviderContext
title: AudioContentProviderContext
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: b9bc15d5457f4b32d68f719482f58070a17b500b83ffe2e482a61b9fb1c75580

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-audio#playback-and-device-contract
aliases: []
---

Collects one bounded, atomic provider contribution on the owning control thread.

## Remarks

The host disposes this borrowed context when the provider returns. A rejected submission invalidates the entire contribution, even if the provider catches the exception. The context does not own the content scope.
