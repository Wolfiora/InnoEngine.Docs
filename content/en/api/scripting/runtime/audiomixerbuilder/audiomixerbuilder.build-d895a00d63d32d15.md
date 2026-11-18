---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d895a00d63d32d15f5caba34de5b0c2df285261c70de77f8a1944f2ef4b6bb34
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioMixerBuilder.Build
title: AudioMixerBuilder.Build
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: 0ea5e693d748f5fc903f95ffb5112802b5250c8b3657452dcc7369e45f49e0b1
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A validated mixer graph containing the mandatory master bus.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when a parent is missing or bus routing contains a cycle.
