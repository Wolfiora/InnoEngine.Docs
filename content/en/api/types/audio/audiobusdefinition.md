---
title: "AudioBusDefinition"
description: "Reference for AudioBusDefinition in Inno.Audio."
uid: api.inno.audio.3d9f904122f8fadf
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioBusDefinition`

This reference describes `AudioBusDefinition` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-273847d1ecdb5eb9) | Method |
| [`id`](#api-d5ac6056c68cd98f) | Property |
| [`muted`](#api-fbffa3b1dd5b7b73) | Property |
| [`parent`](#api-7c9ffd5c05538655) | Property |
| [`processors`](#api-903e43d503eaf5a5) | Property |
| [`volume`](#api-0fb2aa59fc9ce9d2) | Property |

## Type declaration

<a id="api-3d9f904122f8fadf"></a>
<!-- api: T:Inno.Audio.AudioBusDefinition c708c6c6d6576a21fb6971fd141163bec3bf10450f00e9f2882dd671dac818b5 -->

```csharp
public sealed class Inno.Audio.AudioBusDefinition
```

Describes one bus and its ordered processor chain in a compiled mixer graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L87).

## `#ctor`

<a id="api-273847d1ecdb5eb9"></a>
<!-- api: M:Inno.Audio.AudioBusDefinition.#ctor(Inno.Audio.AudioBusId,System.Nullable{Inno.Audio.AudioBusId},System.Single,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Audio.AudioProcessorConfiguration}) fe03e83dc59c25fa9f1a1301668dad5554a257e2fcc8fbb21202734c356d6139 -->

```csharp
public Inno.Audio.AudioBusDefinition.AudioBusDefinition(Inno.Audio.AudioBusId id, Inno.Audio.AudioBusId? parent, float volume, bool muted, System.Collections.Generic.IEnumerable<Inno.Audio.AudioProcessorConfiguration>? processors = null)
```

Creates an immutable mixer bus definition.

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier, or `null` only for the master bus.

**Parameter `volume`:** Non-negative linear bus gain.

**Parameter `muted`:** Whether output from the bus is initially silenced.

**Parameter `processors`:** Ordered processor chain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L109).

## `id`

<a id="api-d5ac6056c68cd98f"></a>
<!-- api: P:Inno.Audio.AudioBusDefinition.id c59bc55bb13732d857ff9c0bf9ec14765f1507d6ae0496bd78a93b399e7f73f5 -->

```csharp
public Inno.Audio.AudioBusId Inno.Audio.AudioBusDefinition.id { get; }
```

Gets the stable bus identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L134).

## `muted`

<a id="api-fbffa3b1dd5b7b73"></a>
<!-- api: P:Inno.Audio.AudioBusDefinition.muted 4bf9df4b243495a75f11b7cb791e7da2866611f72368d8f2c236f3065e54e024 -->

```csharp
public bool Inno.Audio.AudioBusDefinition.muted { get; }
```

Gets whether output from the bus is initially silenced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L149).

## `parent`

<a id="api-7c9ffd5c05538655"></a>
<!-- api: P:Inno.Audio.AudioBusDefinition.parent d4ffcfb6e36312dfbfd9063729b1b02583c85b26581312e2e11f36080e08d264 -->

```csharp
public Inno.Audio.AudioBusId? Inno.Audio.AudioBusDefinition.parent { get; }
```

Gets the parent bus, or `null` for the master bus.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L139).

## `processors`

<a id="api-903e43d503eaf5a5"></a>
<!-- api: P:Inno.Audio.AudioBusDefinition.processors 0d163b0dbfd349cfd97edcdbc8a1a786edcdd45608f4e91452f69ec1154ac3fa -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Audio.AudioProcessorConfiguration> Inno.Audio.AudioBusDefinition.processors { get; }
```

Gets the ordered immutable processor chain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L154).

## `volume`

<a id="api-0fb2aa59fc9ce9d2"></a>
<!-- api: P:Inno.Audio.AudioBusDefinition.volume 213f0a71c33b63c406d3578c4cbbf905e03d4a7945cfad49b351d083143d2b29 -->

```csharp
public float Inno.Audio.AudioBusDefinition.volume { get; }
```

Gets the initial linear bus gain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioMixer.cs#L144).
