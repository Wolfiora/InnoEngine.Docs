---
title: "AudioClipImporter"
description: "Reference for AudioClipImporter in Inno.Audio.Assets."
uid: api.inno.audio.assets.2c8da7a6efb66263
kind: api
owners:
  - Inno.Audio.Assets
apiSurface: source-clr
contracts:
  - project.inno-audio-assets#artifact-and-ownership-contract
---
# `AudioClipImporter`

This reference describes `AudioClipImporter` in `Inno.Audio.Assets`. Read the [shared contract](../../projects/inno-audio-assets.md#artifact-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.Pipeline.AssetImporter<Inno.Audio.AudioClipAsset>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cc9f838377de094b) | Method |
| [`ImportAsync`](#api-200d1810709eaa14) | Method |
| [`supportedExtensions`](#api-3de0f610b65742c0) | Property |

## Type declaration

<a id="api-2c8da7a6efb66263"></a>
<!-- api: T:Inno.Audio.Assets.AudioClipImporter 1579a220637d1971a357aaa3120c2aea76498c535b3720b34aba461213bc8694 -->

```csharp
public sealed class Inno.Audio.Assets.AudioClipImporter : Inno.Assets.Pipeline.AssetImporter<Inno.Audio.AudioClipAsset>
```

Imports standard encoded audio sources into compact runtime metadata and immutable encoded-data artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Assets/AudioClipImporter.cs#L15).

## `#ctor`

<a id="api-cc9f838377de094b"></a>
<!-- api: M:Inno.Audio.Assets.AudioClipImporter.#ctor f1c079a2b1c3e3b6d84a9084a933c3c5b1587853ce3c799b994b62c22199e8c9 -->

```csharp
public Inno.Audio.Assets.AudioClipImporter.AudioClipImporter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Assets/AudioClipImporter.cs#L15).

## `ImportAsync`

<a id="api-200d1810709eaa14"></a>
<!-- api: M:Inno.Audio.Assets.AudioClipImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Audio.AudioClipAsset},System.Threading.CancellationToken) 5138ff38180aff773bcdf7b22fcbfd025ad1519f8bbcba72e7710a415a0bc630 -->

```csharp
protected override System.Threading.Tasks.ValueTask Inno.Audio.Assets.AudioClipImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext context, Inno.Assets.Pipeline.AssetImportWriter<Inno.Audio.AudioClipAsset> output, System.Threading.CancellationToken cancellationToken)
```

Validates source metadata and emits the compact runtime and immutable encoded-data artifacts.

**Parameter `context`:** Source bytes and normalized source extension for the current import.

**Parameter `output`:** Writer that receives the audio asset and its two runtime artifacts.

**Parameter `cancellationToken`:** Token used to cancel artifact writes.

**Returns:** A task that completes after both artifacts have been committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Assets/AudioClipImporter.cs#L37).

## `supportedExtensions`

<a id="api-3de0f610b65742c0"></a>
<!-- api: P:Inno.Audio.Assets.AudioClipImporter.supportedExtensions 638768a0a5aa704efe50910ae8f623171ac83aeb630d55c0c7949a1dd170c722 -->

```csharp
public override System.Collections.Generic.IReadOnlyList<string> Inno.Audio.Assets.AudioClipImporter.supportedExtensions { get; }
```

Gets the source extensions decoded by the standard audio metadata reader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Assets/AudioClipImporter.cs#L20).
