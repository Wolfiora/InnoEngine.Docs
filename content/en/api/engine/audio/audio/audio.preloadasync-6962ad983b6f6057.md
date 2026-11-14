---
uid: api.6962ad983b6f60571e179210bcc274a85420ad76bc304e878e64b40f2171ca3a
symbol: "engine:Inno.Audio:M:Inno.Audio.Audio.PreloadAsync(Inno.Audio.AudioClipAsset,Inno.Audio.AudioClipLoadMode,System.Threading.CancellationToken)"
source: xml
reviewed: 4e0d47adfabb6a903a1d10d19f0ca939a793ab466b530f5250d80e74589ff34c
title: "Audio.PreloadAsync"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Prepares a clip and retains it in the runtime cache.

## Parameters

**Parameter `clip`:** Imported clip to prepare.

**Parameter `loadMode`:** Storage strategy override.

**Parameter `cancellationToken`:** Cancellation token observed before the cache commit.

## Returns

An asynchronous operation that completes after the cache entry is ready.
