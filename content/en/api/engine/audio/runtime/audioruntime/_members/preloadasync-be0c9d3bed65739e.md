---
uid: api.be0c9d3bed65739e4bfb282dd750ae541e6ae5e3b4fada72db314c4cfc6a551e
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.PreloadAsync(Inno.Audio.AudioClipAsset,Inno.Audio.AudioClipLoadMode,System.Threading.CancellationToken)"
source: xml
reviewed: ebff5fc7b9d548a01ea07182a0a91e087d7e9ec04949af50be4c22b4e9c3154a
title: "PreloadAsync"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Prepares and explicitly retains a clip cache entry.

**Parameter `clip`:** Imported clip to retain.

**Parameter `loadMode`:** Storage strategy override.

**Parameter `cancellationToken`:** Cancellation token observed before the cache commit.

**Returns:** An operation completed at an update safety point after native preparation succeeds or fails.
