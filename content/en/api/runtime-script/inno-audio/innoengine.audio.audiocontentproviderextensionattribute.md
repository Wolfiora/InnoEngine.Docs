---
title: "AudioContentProviderExtensionAttribute"
description: "Reference for AudioContentProviderExtensionAttribute in Inno.Audio."
uid: api.inno.audio.runtime-script.7e26a2922ca1e697
kind: api
owners:
  - Inno.Audio
apiSurface: runtime-script
contracts:
  - project.inno-audio#playback-and-device-contract
  - manual.scripting.use-script-api
---
# `AudioContentProviderExtensionAttribute`

This reference describes `AudioContentProviderExtensionAttribute` in `Inno.Audio`. Read the [shared contract](../../projects/inno-audio.md#playback-and-device-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6ee7508b70246961) | Method |
| [`id`](#api-6d38b9a7a84920f1) | Property |
| [`priority`](#api-1be25dcb2779fb43) | Property |

## Type declaration

<a id="api-7e26a2922ca1e697"></a>
<!-- api: T:InnoEngine.Audio.AudioContentProviderExtensionAttribute d70398111e037938fed5c4ccbb283e0a21f206d14ee5f9d6e96b06d0de9e81c6 -->

```csharp
public sealed class InnoEngine.Audio.AudioContentProviderExtensionAttribute : System.Attribute
```

Marks a reloadable provider that converts host content into immutable audio snapshots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L12).

## `#ctor`

<a id="api-6ee7508b70246961"></a>
<!-- api: M:InnoEngine.Audio.AudioContentProviderExtensionAttribute.#ctor(System.String,System.Int32) 4c1213e5f15eb650805d0f612fde5c491d6e50ea6c4d699fb0649f4798d9606d -->

```csharp
public InnoEngine.Audio.AudioContentProviderExtensionAttribute.AudioContentProviderExtensionAttribute(string id, int priority = 0)
```

Creates an audio content provider declaration.

**Parameter `id`:** Globally stable provider identifier.

**Parameter `priority`:** Provider invocation priority; lower values run first.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L23).

## `id`

<a id="api-6d38b9a7a84920f1"></a>
<!-- api: P:InnoEngine.Audio.AudioContentProviderExtensionAttribute.id 103737fd5f8ee9e7ddf995f8bbc95c07575486a089e470062a6451ced94bf34b -->

```csharp
public string InnoEngine.Audio.AudioContentProviderExtensionAttribute.id { get; }
```

Gets the globally stable provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L35).

## `priority`

<a id="api-1be25dcb2779fb43"></a>
<!-- api: P:InnoEngine.Audio.AudioContentProviderExtensionAttribute.priority 5b14db2afbba445b9dccf49c05ce2607f31640154a467e996373efc64b5dd14a -->

```csharp
public int InnoEngine.Audio.AudioContentProviderExtensionAttribute.priority { get; }
```

Gets the provider invocation priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/audio/Inno.Audio/AudioContentProvider.cs#L40).
