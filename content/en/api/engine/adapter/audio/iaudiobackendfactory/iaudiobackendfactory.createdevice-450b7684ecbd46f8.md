---
uid: api.450b7684ecbd46f81ca12c7ab41a56f61f9824bcc2151cf950f448c5a820b1a5
symbol: "engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.IAudioBackendFactory.CreateDevice(Inno.Adapter.Audio.AudioBackendId,Inno.Adapter.Audio.AudioBackendOptions)"
source: xml
reviewed: 700ab119c7b90e7e88c4eecfcdd731822a6158ee2d41afe14dba33233e62d0c5
title: "IAudioBackendFactory.CreateDevice"
kind: api
owners: [Inno.Adapter.Audio]
apiSurface: source-clr
---

Creates a new audio device for one runtime audio generation.

## Parameters

**Parameter `backend`:** audio implementation selected by the composition root.

**Parameter `options`:** Backend-neutral device options.

## Returns

A caller-owned backend-neutral audio device.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.
