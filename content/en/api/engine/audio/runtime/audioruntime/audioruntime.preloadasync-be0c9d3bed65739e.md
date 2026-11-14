---
uid: api.be0c9d3bed65739e4bfb282dd750ae541e6ae5e3b4fada72db314c4cfc6a551e
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.PreloadAsync(Inno.Audio.AudioClipAsset,Inno.Audio.AudioClipLoadMode,System.Threading.CancellationToken)"
source: xml
reviewed: 183145fcd086d3a52f28f05a8b42496a4d0e118572b8e89a5246984eb5321bbc
title: "AudioRuntime.PreloadAsync"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Prepares and explicitly retains a clip cache entry.

## Parameters

**Parameter `clip`:** Imported clip to retain.

**Parameter `loadMode`:** Storage strategy override.

**Parameter `cancellationToken`:** Cancellation token observed before the cache commit.

## Returns

An operation completed at an update safety point after native preparation succeeds or fails.
