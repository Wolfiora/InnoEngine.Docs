---
title: "SerializedAudioExtensionState"
description: "Reference for SerializedAudioExtensionState in Inno.Audio."
uid: api.inno.audio.runtime-script.be5618fb5e92818c
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `SerializedAudioExtensionState`

This reference describes `SerializedAudioExtensionState` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c2027680e44eb7ea) | Method |
| [`propertyData`](#api-f495344c726ba630) | Property |
| [`stableTypeId`](#api-04cd42c56672e6cc) | Property |

## Type declaration

<a id="api-be5618fb5e92818c"></a>
<!-- api: T:InnoEngine.Audio.SerializedAudioExtensionState 0083ae4de5e368e362b808d8c0eebedff0f46e5faa2d81f58e648835eaeccc40 -->

```csharp
public struct InnoEngine.Audio.SerializedAudioExtensionState
```

Stores reload-safe configuration for one mixer or feature extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L286).

## `#ctor`

<a id="api-c2027680e44eb7ea"></a>
<!-- api: M:InnoEngine.Audio.SerializedAudioExtensionState.#ctor(System.Guid,System.ReadOnlySpan{System.Byte}) ccb31b726d10399d6975ad3fb9a57b72a70a7572e6611c79d95f49cc28a58ffb -->

```csharp
public InnoEngine.Audio.SerializedAudioExtensionState.SerializedAudioExtensionState(System.Guid stableTypeId, System.ReadOnlySpan<byte> propertyData)
```

Creates neutral extension state.

**Parameter `stableTypeId`:** Stable settings type identity, or empty when no typed settings exist.

**Parameter `propertyData`:** Neutral serialized property bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L305).

## `propertyData`

<a id="api-f495344c726ba630"></a>
<!-- api: P:InnoEngine.Audio.SerializedAudioExtensionState.propertyData 8f4549cc92fdc19c0815ed20c320e0584e867e13911398f2dd826feca474d174 -->

```csharp
public byte[] InnoEngine.Audio.SerializedAudioExtensionState.propertyData { get; set; }
```

Gets or sets neutral serialized property bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L323).

## `stableTypeId`

<a id="api-04cd42c56672e6cc"></a>
<!-- api: P:InnoEngine.Audio.SerializedAudioExtensionState.stableTypeId 026e67890249335c1d223ecacfaab67dc008eae18595200707d9703a7dfc55ef -->

```csharp
public System.Guid InnoEngine.Audio.SerializedAudioExtensionState.stableTypeId { get; set; }
```

Gets or sets the stable settings type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L317).
