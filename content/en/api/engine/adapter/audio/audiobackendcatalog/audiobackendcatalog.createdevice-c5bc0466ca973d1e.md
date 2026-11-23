---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c5bc0466ca973d1ec6803c65859cd8041b070cd0532242df67dd82a0a37f26f8
symbol: engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.AudioBackendCatalog.CreateDevice(Inno.Adapter.Audio.AudioBackendID,Inno.Adapter.Audio.AudioBackendOptions)
title: AudioBackendCatalog.CreateDevice
kind: api
owners:
- Inno.Adapter.Audio
apiSurface: source-clr
sourceFingerprint: a4f5c6654d5383c7f0d5ab219b8f09737a5f728f93d1422da0d34130cb5de8bf
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
