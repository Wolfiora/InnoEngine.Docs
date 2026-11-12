---
title: "AudioMixerExtensionAttribute"
description: "Reference for AudioMixerExtensionAttribute in Inno.Audio."
uid: api.inno.audio.runtime-script.3b951c2a16553561
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioMixerExtensionAttribute`

This reference describes `AudioMixerExtensionAttribute` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9423322dc603047a) | Method |
| [`id`](#api-bea44f930dac95bd) | Property |

## Type declaration

<a id="api-3b951c2a16553561"></a>
<!-- api: T:InnoEngine.Audio.AudioMixerExtensionAttribute 311d78405b17378b40d82e8549165b9ad74cf1bd146010ed8565106d96dd26d2 -->

```csharp
public sealed class InnoEngine.Audio.AudioMixerExtensionAttribute : System.Attribute
```

Marks a reloadable extension that creates the base audio mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L9).

## `#ctor`

<a id="api-9423322dc603047a"></a>
<!-- api: M:InnoEngine.Audio.AudioMixerExtensionAttribute.#ctor(System.String) de393f96ff57d0116529b7a9bda8a7268173e5a2da3143aefcc2976d83b75080 -->

```csharp
public InnoEngine.Audio.AudioMixerExtensionAttribute.AudioMixerExtensionAttribute(string id)
```

Creates a mixer extension declaration.

**Parameter `id`:** Globally stable mixer extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L17).

## `id`

<a id="api-bea44f930dac95bd"></a>
<!-- api: P:InnoEngine.Audio.AudioMixerExtensionAttribute.id 7cfd499a14e9c54fe019ef2379ebc01d6e37c2a47d7ca3477cca5e66b6fc1e82 -->

```csharp
public string InnoEngine.Audio.AudioMixerExtensionAttribute.id { get; }
```

Gets the globally stable mixer extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixerExtensions.cs#L26).
