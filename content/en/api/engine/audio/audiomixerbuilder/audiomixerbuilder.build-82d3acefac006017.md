---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.82d3acefac006017682c07c947fc0995a6c34c3cc70c75d1605811108461c68d
symbol: engine:Inno.Audio:M:Inno.Audio.AudioMixerBuilder.Build
title: AudioMixerBuilder.Build
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 3d49f7fa17547ef7f48f57aa9b2db3e7b520a7d3ff56cbb123572bbf1249ebc6
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
