---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.62a1f0a016409f4ee11de3aed7eb16bcbafe6f5a2cf3e8f69de75cedc10f063a
symbol: engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.IAudioBackendFactory.CreateDevice(Inno.Adapter.Audio.AudioBackendID,Inno.Adapter.Audio.AudioBackendOptions)
title: IAudioBackendFactory.CreateDevice
kind: api
owners:
- Inno.Adapter.Audio
apiSurface: source-clr
sourceFingerprint: 6ee9603f1b1a809a5214bcbe5c755d261c51f206203955afbf739a24af138a21
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** audio implementation selected by the composition root.

**Parameter `options`:** Backend-neutral device options.

## Returns

A caller-owned backend-neutral audio device.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.
