---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.450b7684ecbd46f81ca12c7ab41a56f61f9824bcc2151cf950f448c5a820b1a5
symbol: engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.IAudioBackendFactory.CreateDevice(Inno.Adapter.Audio.AudioBackendId,Inno.Adapter.Audio.AudioBackendOptions)
title: IAudioBackendFactory.CreateDevice
kind: api
owners:
- Inno.Adapter.Audio
apiSurface: source-clr
reviewed: 03665f7e927742d3a4ed27c64b13f3db1f6a1c52d354f34ab24dc27ed63ed173
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
