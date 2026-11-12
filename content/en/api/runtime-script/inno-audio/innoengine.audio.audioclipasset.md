---
title: "AudioClipAsset"
description: "Reference for AudioClipAsset in Inno.Audio."
uid: api.inno.audio.runtime-script.ebefa3c3b006ef0a
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioClipAsset`

This reference describes `AudioClipAsset` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ca20afcb7a3b358f) | Method |
| [`OnRuntimePayloadChanged`](#api-1c151d265929413b) | Method |
| [`duration`](#api-2c02421cbba73013) | Property |
| [`metadata`](#api-20ca6b7da3d25c26) | Property |

## Type declaration

<a id="api-ebefa3c3b006ef0a"></a>
<!-- api: T:InnoEngine.Audio.AudioClipAsset 06115f7225fc414fe7f2be7e4b14761fd1eec7edbe01df0e2846dbb4fbb9a58a -->

```csharp
public sealed class InnoEngine.Audio.AudioClipAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Represents one imported audio source and its compact runtime metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L155).

## `#ctor`

<a id="api-ca20afcb7a3b358f"></a>
<!-- api: M:InnoEngine.Audio.AudioClipAsset.#ctor 3ead9703bd2b3f012781efe2b9d894cbc70357f7aaa5001607f8c7697714ab35 -->

```csharp
public InnoEngine.Audio.AudioClipAsset.AudioClipAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L155).

## `OnRuntimePayloadChanged`

<a id="api-1c151d265929413b"></a>
<!-- api: M:InnoEngine.Audio.AudioClipAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory{System.Byte},System.ReadOnlyMemory{System.Byte}) 7bab39d00c914ad164f0531a0666889b2c0305acb9a599a5645d184669f4951e -->

```csharp
protected override void InnoEngine.Audio.AudioClipAsset.OnRuntimePayloadChanged(System.ReadOnlyMemory<byte> previousPayload, System.ReadOnlyMemory<byte> currentPayload)
```

Refreshes imported metadata after an artifact commit.

**Parameter `previousPayload`:** Previously committed compact header.

**Parameter `currentPayload`:** Newly committed compact header.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L178).

## `duration`

<a id="api-2c02421cbba73013"></a>
<!-- api: P:InnoEngine.Audio.AudioClipAsset.duration 141b06113b511ef93f9eba78016a143c0a279b21258a84a8e27eea4e01bcac7b -->

```csharp
public System.TimeSpan InnoEngine.Audio.AudioClipAsset.duration { get; }
```

Gets the imported clip duration, or zero before runtime content is loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L167).

## `metadata`

<a id="api-20ca6b7da3d25c26"></a>
<!-- api: P:InnoEngine.Audio.AudioClipAsset.metadata 7a7720150771b02f3cefd9f3c1c4622c24ac84bd75da4f5c04c04d9355afca67 -->

```csharp
public InnoEngine.Audio.AudioClipMetadata? InnoEngine.Audio.AudioClipAsset.metadata { get; }
```

Gets imported metadata, or `null` before runtime content is loaded.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioClipAsset.cs#L162).
