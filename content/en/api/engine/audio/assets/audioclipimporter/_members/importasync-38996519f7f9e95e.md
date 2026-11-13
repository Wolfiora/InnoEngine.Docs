---
uid: api.38996519f7f9e95e8817e0937f697ff7f28e51499a297adaaca33c667fe0fb1f
symbol: "engine:Inno.Audio.Assets:M:Inno.Audio.Assets.AudioClipImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Audio.AudioClipAsset},System.Threading.CancellationToken)"
source: xml
reviewed: acac2efbda27d8d80b4b7a939d8928e37a6fde8492e8fe7ba6b727f88b61ae85
title: "ImportAsync"
kind: api
owners: [Inno.Audio.Assets]
apiSurface: source-clr
---

Validates source metadata and emits the compact runtime and immutable encoded-data artifacts.

**Parameter `context`:** Source bytes and normalized source extension for the current import.

**Parameter `output`:** Writer that receives the audio asset and its two runtime artifacts.

**Parameter `cancellationToken`:** Token used to cancel artifact writes.

**Returns:** A task that completes after both artifacts have been committed.
