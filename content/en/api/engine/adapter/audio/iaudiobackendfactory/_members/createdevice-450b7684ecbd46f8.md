---
uid: api.450b7684ecbd46f81ca12c7ab41a56f61f9824bcc2151cf950f448c5a820b1a5
symbol: "engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.IAudioBackendFactory.CreateDevice(Inno.Adapter.Audio.AudioBackendId,Inno.Adapter.Audio.AudioBackendOptions)"
source: xml
reviewed: 421475c122c3ebd3f79d42f90531c33ed0b92020030ff96e6d8de871707519c2
title: "CreateDevice"
kind: api
owners: [Inno.Adapter.Audio]
apiSurface: source-clr
---

Creates a new audio device for one runtime audio generation.

**Parameter `backend`:** audio implementation selected by the composition root.

**Parameter `options`:** Backend-neutral device options.

**Returns:** A caller-owned backend-neutral audio device.

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.
