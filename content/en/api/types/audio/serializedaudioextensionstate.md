---
title: "SerializedAudioExtensionState"
description: "Reference for SerializedAudioExtensionState in Inno.Audio."
uid: api.inno.audio.634da0b0565b298b
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `SerializedAudioExtensionState`

This reference describes `SerializedAudioExtensionState` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5786e498e12a2f7f) | Method |
| [`#ctor`](#api-ad835e254c2e3bb7) | Method |
| [`propertyData`](#api-a7a82fc2f1d46a9a) | Property |
| [`stableTypeId`](#api-e6fa468bfab4895a) | Property |

## Type declaration

<a id="api-634da0b0565b298b"></a>
<!-- api: T:Inno.Audio.SerializedAudioExtensionState f8c96af50e555199ea241bc1e7feb30ac3e191124cd9d597e7e4a970290b1232 -->

```csharp
public struct Inno.Audio.SerializedAudioExtensionState
```

Stores reload-safe configuration for one mixer or feature extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L286).

## `#ctor`

<a id="api-5786e498e12a2f7f"></a>
<!-- api: M:Inno.Audio.SerializedAudioExtensionState.#ctor 39b1a1dcd16ed09e9d60de3d9154f136cec4d9808434137624609008340bf444 -->

```csharp
public Inno.Audio.SerializedAudioExtensionState.SerializedAudioExtensionState()
```

Creates empty extension state for deserialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L291).

## `#ctor`

<a id="api-ad835e254c2e3bb7"></a>
<!-- api: M:Inno.Audio.SerializedAudioExtensionState.#ctor(System.Guid,System.ReadOnlySpan{System.Byte}) 06dd4a3ce80b7cd061a1ea5ae9195d12b01edaf0999a28b3902c40027a773739 -->

```csharp
public Inno.Audio.SerializedAudioExtensionState.SerializedAudioExtensionState(System.Guid stableTypeId, System.ReadOnlySpan<byte> propertyData)
```

Creates neutral extension state.

**Parameter `stableTypeId`:** Stable settings type identity, or empty when no typed settings exist.

**Parameter `propertyData`:** Neutral serialized property bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L305).

## `propertyData`

<a id="api-a7a82fc2f1d46a9a"></a>
<!-- api: P:Inno.Audio.SerializedAudioExtensionState.propertyData dfd9286c4b5d204035fa0d69acee3e6da9d3bd08d05d4d70a458166b610dfaf0 -->

```csharp
public byte[] Inno.Audio.SerializedAudioExtensionState.propertyData { get; set; }
```

Gets or sets neutral serialized property bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L323).

## `stableTypeId`

<a id="api-e6fa468bfab4895a"></a>
<!-- api: P:Inno.Audio.SerializedAudioExtensionState.stableTypeId 5420968ab24e11c103ec39da1d7787dfe15c50180932e19cb63b323731c4c4c4 -->

```csharp
public System.Guid Inno.Audio.SerializedAudioExtensionState.stableTypeId { get; set; }
```

Gets or sets the stable settings type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L317).
