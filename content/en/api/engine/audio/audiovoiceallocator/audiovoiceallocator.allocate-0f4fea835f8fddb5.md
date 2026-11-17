---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0f4fea835f8fddb5d5f56ce253532c98968c53f8261f1d671d105b1986adb966
symbol: engine:Inno.Audio:M:Inno.Audio.AudioVoiceAllocator.Allocate
title: AudioVoiceAllocator.Allocate
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: f0a15fa4519f836d1ce0e0043600b9c1d91c272810bc3b5336bfa4e5789552b5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A new opaque playback handle; identities are never reused within this owner.

## Exceptions

**Exception `T:System.OverflowException`:** The owner exhausted its playback identities.
