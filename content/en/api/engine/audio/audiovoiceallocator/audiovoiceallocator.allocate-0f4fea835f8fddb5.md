---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0f4fea835f8fddb5d5f56ce253532c98968c53f8261f1d671d105b1986adb966
symbol: engine:Inno.Audio:M:Inno.Audio.AudioVoiceAllocator.Allocate
title: AudioVoiceAllocator.Allocate
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: 81af7d085f70ee970f62233435fb31cdb161e607ff282a0ae1068de887b74e13
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
