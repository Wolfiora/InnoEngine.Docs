---
uid: api.6962ad983b6f60571e179210bcc274a85420ad76bc304e878e64b40f2171ca3a
symbol: "engine:Inno.Audio:M:Inno.Audio.Audio.PreloadAsync(Inno.Audio.AudioClipAsset,Inno.Audio.AudioClipLoadMode,System.Threading.CancellationToken)"
source: xml
reviewed: 89a7b7a6b2a52dd8cb69f25fb06f63298c231429e1ec1c08e2a7f6a74876ff19
title: "PreloadAsync"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Prepares a clip and retains it in the runtime cache.

**Parameter `clip`:** Imported clip to prepare.

**Parameter `loadMode`:** Storage strategy override.

**Parameter `cancellationToken`:** Cancellation token observed before the cache commit.

**Returns:** An asynchronous operation that completes after the cache entry is ready.
