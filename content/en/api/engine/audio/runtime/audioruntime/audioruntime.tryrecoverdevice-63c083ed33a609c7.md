---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.63c083ed33a609c7044fc6f275566b30e8790b0a1b40b69ece0d039b29dc35f7
symbol: engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.TryRecoverDevice(System.Func{Inno.Audio.IAudioDevice})
title: AudioRuntime.TryRecoverDevice
kind: api
owners:
- Inno.Audio.Runtime
apiSurface: source-clr
reviewed: 281683fa5fd5cd371fe558066760319bb6f7e2b85db4d0f1fca063b71f4b3815
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `deviceFactory`:** Host-owned factory that creates a fresh initialized device candidate.

## Returns

`true` when output is already ready or a ready candidate was installed; otherwise `false` and the current muted or lost generation remains active.
