---
title: "AudioBusDefinition"
description: "Reference for AudioBusDefinition in Inno.Audio."
uid: api.inno.audio.runtime-script.135e22b37b88e217
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioBusDefinition`

This reference describes `AudioBusDefinition` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2b0cbff42ad60546) | Method |
| [`id`](#api-ee1d6d7b0ac8648e) | Property |
| [`muted`](#api-1872b440b114e465) | Property |
| [`parent`](#api-6bd1d5a01a198742) | Property |
| [`processors`](#api-2b0633eedd52bba3) | Property |
| [`volume`](#api-3195db0aa0d8bf0c) | Property |

## Type declaration

<a id="api-135e22b37b88e217"></a>
<!-- api: T:InnoEngine.Audio.AudioBusDefinition 38a90d22291bddf57013b2e3990a1c62312e0ee9d735a9cf1d406e8933bf0443 -->

```csharp
public sealed class InnoEngine.Audio.AudioBusDefinition
```

Describes one bus and its ordered processor chain in a compiled mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L87).

## `#ctor`

<a id="api-2b0cbff42ad60546"></a>
<!-- api: M:InnoEngine.Audio.AudioBusDefinition.#ctor(InnoEngine.Audio.AudioBusId,System.Nullable{InnoEngine.Audio.AudioBusId},System.Single,System.Boolean,System.Collections.Generic.IEnumerable{InnoEngine.Audio.AudioProcessorConfiguration}) 4b481d7a4c4c4def83c4366a5ef99fc901bc95de76a8123242e494f5a886be3e -->

```csharp
public InnoEngine.Audio.AudioBusDefinition.AudioBusDefinition(InnoEngine.Audio.AudioBusId id, InnoEngine.Audio.AudioBusId? parent, float volume, bool muted, System.Collections.Generic.IEnumerable<InnoEngine.Audio.AudioProcessorConfiguration>? processors = null)
```

Creates an immutable mixer bus definition.

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier, or `null` only for the master bus.

**Parameter `volume`:** Non-negative linear bus gain.

**Parameter `muted`:** Whether output from the bus is initially silenced.

**Parameter `processors`:** Ordered processor chain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L109).

## `id`

<a id="api-ee1d6d7b0ac8648e"></a>
<!-- api: P:InnoEngine.Audio.AudioBusDefinition.id 032d59e3894f1a2c53120add0359dd1d3a077d48370fbdd5c3adb15b65810b3e -->

```csharp
public InnoEngine.Audio.AudioBusId InnoEngine.Audio.AudioBusDefinition.id { get; }
```

Gets the stable bus identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L134).

## `muted`

<a id="api-1872b440b114e465"></a>
<!-- api: P:InnoEngine.Audio.AudioBusDefinition.muted 04f78789bea427d67cc6078ce3bf978c1281a9f146bc3f29bc62c38b9c40197e -->

```csharp
public bool InnoEngine.Audio.AudioBusDefinition.muted { get; }
```

Gets whether output from the bus is initially silenced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L149).

## `parent`

<a id="api-6bd1d5a01a198742"></a>
<!-- api: P:InnoEngine.Audio.AudioBusDefinition.parent 06b3738ee07e0002a6cc7760b2fabaa8007d8cce19bff4e98bdc4e33401ac6f7 -->

```csharp
public InnoEngine.Audio.AudioBusId? InnoEngine.Audio.AudioBusDefinition.parent { get; }
```

Gets the parent bus, or `null` for the master bus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L139).

## `processors`

<a id="api-2b0633eedd52bba3"></a>
<!-- api: P:InnoEngine.Audio.AudioBusDefinition.processors d78470cc6c3dfaaa06dcd3f3af2b31af4c6e3064625a9ab19c51edf38ca9eece -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Audio.AudioProcessorConfiguration> InnoEngine.Audio.AudioBusDefinition.processors { get; }
```

Gets the ordered immutable processor chain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L154).

## `volume`

<a id="api-3195db0aa0d8bf0c"></a>
<!-- api: P:InnoEngine.Audio.AudioBusDefinition.volume 6a44d4b76cf0b2b5adcc7d237cc8ed477843924c5bdcd44483083e6b8e70c47b -->

```csharp
public float InnoEngine.Audio.AudioBusDefinition.volume { get; }
```

Gets the initial linear bus gain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioMixer.cs#L144).
