---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.82d3acefac006017682c07c947fc0995a6c34c3cc70c75d1605811108461c68d
symbol: engine:Inno.Audio:M:Inno.Audio.AudioMixerBuilder.Build
title: AudioMixerBuilder.Build
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: e06e02d69df9bb403e9eeb98770eceb1c7f796db60261cab7f633bfe3f8b5ba5
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
