---
uid: api.f61cf3d8f8059db22dfcfe9bdf39112910d33ddf894f5db7e542876337b00386
symbol: "engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.AudioBackendCatalog.CreateDevice(Inno.Adapter.Audio.AudioBackendId,Inno.Adapter.Audio.AudioBackendOptions)"
source: xml
reviewed: fa7ffe9c4b5248a8b9781bf1475ed186033c857d6b5c71fb28d42176a60ccf51
title: "AudioBackendCatalog.CreateDevice"
kind: api
owners: [Inno.Adapter.Audio]
apiSurface: source-clr
---

Creates a new audio device for one runtime audio generation.

**Parameter `backend`:** audio implementation selected by the composition root.

**Parameter `options`:** Backend-neutral device options.

**Returns:** A caller-owned backend-neutral audio device.

**Exception `T:System.NotSupportedException`:** Thrown when the catalog does not contain the selected backend.

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
