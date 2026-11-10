---
title: "AudioContentProviderExtensionAttribute"
description: "Reference for AudioContentProviderExtensionAttribute in Inno.Audio."
uid: api.inno.audio.3f94751ab11a07f0
kind: api
owners:
  - Inno.Audio
apiSurface: source-clr
contracts:
  - project.inno-audio#playback-and-device-contract
---
# `AudioContentProviderExtensionAttribute`

This reference describes `AudioContentProviderExtensionAttribute` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-45fa8dcacf12a684) | Method |
| [`id`](#api-b5f221c369430df5) | Property |
| [`priority`](#api-87215a1c8c1d1380) | Property |

## Type declaration

<a id="api-3f94751ab11a07f0"></a>
<!-- api: T:Inno.Audio.AudioContentProviderExtensionAttribute cfa0424567e956b7a161526d3345b435d78d58971e2fdf0d1530743790e61bac -->

```csharp
public sealed class Inno.Audio.AudioContentProviderExtensionAttribute : System.Attribute
```

Marks a reloadable provider that converts host content into immutable audio snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L12).

## `#ctor`

<a id="api-45fa8dcacf12a684"></a>
<!-- api: M:Inno.Audio.AudioContentProviderExtensionAttribute.#ctor(System.String,System.Int32) 577d067b5afe242461e376a2698732e68333b78fd447ad0e795732843cf98909 -->

```csharp
public Inno.Audio.AudioContentProviderExtensionAttribute.AudioContentProviderExtensionAttribute(string id, int priority = 0)
```

Creates an audio content provider declaration.

**Parameter `id`:** Globally stable provider identifier.

**Parameter `priority`:** Provider invocation priority; lower values run first.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L23).

## `id`

<a id="api-b5f221c369430df5"></a>
<!-- api: P:Inno.Audio.AudioContentProviderExtensionAttribute.id e931593aa17622297c85fa2e0000da02305e7d15d0ad23abfb4286f16fd78674 -->

```csharp
public string Inno.Audio.AudioContentProviderExtensionAttribute.id { get; }
```

Gets the globally stable provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L35).

## `priority`

<a id="api-87215a1c8c1d1380"></a>
<!-- api: P:Inno.Audio.AudioContentProviderExtensionAttribute.priority 3851fc101a581c79f338e0d369f885025874044152f83ca4cfc1a330f28d7435 -->

```csharp
public int Inno.Audio.AudioContentProviderExtensionAttribute.priority { get; }
```

Gets the provider invocation priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio/AudioContentProvider.cs#L40).
