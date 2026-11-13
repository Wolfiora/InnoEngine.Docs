---
uid: api.924d56da1a44ea558f108da0017eef5f1db0906ddd4a9d8e56d28dc3872f0b81
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.Audio.PreloadAsync(InnoEngine.Audio.AudioClipAsset,InnoEngine.Audio.AudioClipLoadMode,System.Threading.CancellationToken)"
source: xml
reviewed: d863cc99f8a0815a357bff230a0ba83b398eae6b442322de47f5439aa094ce1a
title: "Audio.PreloadAsync"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Prepares a clip and retains it in the runtime cache.

**Parameter `clip`:** Imported clip to prepare.

**Parameter `loadMode`:** Storage strategy override.

**Parameter `cancellationToken`:** Cancellation token observed before the cache commit.

**Returns:** An asynchronous operation that completes after the cache entry is ready.
