---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d895a00d63d32d15f5caba34de5b0c2df285261c70de77f8a1944f2ef4b6bb34
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioMixerBuilder.Build
title: AudioMixerBuilder.Build
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: aa0e07089824400b31311bfee72969f470c3ce896dc5689c1c688c3932c16c09
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
