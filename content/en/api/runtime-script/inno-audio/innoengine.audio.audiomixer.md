---
title: "AudioMixer"
description: "Reference for AudioMixer in Inno.Audio."
uid: api.inno.audio.runtime-script.1d525e9aebd5ab3b
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioMixer`

This reference describes `AudioMixer` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5ddd9742c0044843) | Method |
| [`buses`](#api-ff62ba98a38ac6b7) | Property |

## Type declaration

<a id="api-1d525e9aebd5ab3b"></a>
<!-- api: T:InnoEngine.Audio.AudioMixer 62796a5aa5c4997fc61db553b5262ce13f8fda42266f9af0b0e76115f0896a32 -->

```csharp
public sealed class InnoEngine.Audio.AudioMixer
```

Contains one validated backend-neutral mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L160).

## `#ctor`

<a id="api-5ddd9742c0044843"></a>
<!-- api: M:InnoEngine.Audio.AudioMixer.#ctor 9fe21c0d7270c6f536f1aaba577cf5272b3cabebeb7e5c84dc7edff06f3b2716 -->

```csharp
public InnoEngine.Audio.AudioMixer.AudioMixer()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L160).

## `buses`

<a id="api-ff62ba98a38ac6b7"></a>
<!-- api: P:InnoEngine.Audio.AudioMixer.buses 335168123f9b83ba19048ae4a89daf0f940a4779def202916babcad47fcee9e1 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Audio.AudioBusDefinition> InnoEngine.Audio.AudioMixer.buses { get; }
```

Gets buses in parent-before-child creation order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L172).
