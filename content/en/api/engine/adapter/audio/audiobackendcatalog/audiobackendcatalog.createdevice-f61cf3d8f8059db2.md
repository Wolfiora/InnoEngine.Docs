---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f61cf3d8f8059db22dfcfe9bdf39112910d33ddf894f5db7e542876337b00386
symbol: engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.AudioBackendCatalog.CreateDevice(Inno.Adapter.Audio.AudioBackendId,Inno.Adapter.Audio.AudioBackendOptions)
title: AudioBackendCatalog.CreateDevice
kind: api
owners:
- Inno.Adapter.Audio
apiSurface: source-clr
sourceFingerprint: 1e43de4ae783f25e5213338397e6119e0de2cc83e4c71247855b01a4f8bd7f3e
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

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
