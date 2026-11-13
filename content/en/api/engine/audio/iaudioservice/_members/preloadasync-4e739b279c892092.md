---
uid: api.4e739b279c892092b56868880953cfbd5aef6feaba6c811dc709f21fadb94514
symbol: "engine:Inno.Audio:M:Inno.Audio.IAudioService.PreloadAsync(Inno.Audio.AudioClipAsset,Inno.Audio.AudioClipLoadMode,System.Threading.CancellationToken)"
source: xml
reviewed: 2c4a249736662b0d115e6240a4b9949166479dcbaf2b9399c2725202d65c6d26
title: "PreloadAsync"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Prepares a clip and retains it in the decoded or streamed cache.

**Parameter `clip`:** Imported clip to prepare.

**Parameter `loadMode`:** Storage strategy override.

**Parameter `cancellationToken`:** Cancellation token observed before the cache commit.

**Returns:** An asynchronous operation that completes after the cache entry is ready.
