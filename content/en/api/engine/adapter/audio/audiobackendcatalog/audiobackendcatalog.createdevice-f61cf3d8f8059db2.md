---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f61cf3d8f8059db22dfcfe9bdf39112910d33ddf894f5db7e542876337b00386
symbol: engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.AudioBackendCatalog.CreateDevice(Inno.Adapter.Audio.AudioBackendId,Inno.Adapter.Audio.AudioBackendOptions)
title: AudioBackendCatalog.CreateDevice
kind: api
owners:
- Inno.Adapter.Audio
apiSurface: source-clr
reviewed: cd96d2fc183267e1b0591a01654abc20a5cce0ddd700d451221429b9758588c5
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
