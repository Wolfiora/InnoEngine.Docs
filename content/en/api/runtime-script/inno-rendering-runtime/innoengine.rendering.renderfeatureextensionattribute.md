---
title: "RenderFeatureExtensionAttribute"
description: "Reference for RenderFeatureExtensionAttribute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.b9b84f7c96f1edc0
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderFeatureExtensionAttribute`

This reference describes `RenderFeatureExtensionAttribute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7555d23238e7b5ba) | Method |
| [`id`](#api-1ac7985f586b7b55) | Property |

## Type declaration

<a id="api-b9b84f7c96f1edc0"></a>
<!-- api: T:InnoEngine.Rendering.RenderFeatureExtensionAttribute cdea83c221f0584b466afe07955d543929310b315311997e80f16f1c03a54ab6 -->

```csharp
public sealed class InnoEngine.Rendering.RenderFeatureExtensionAttribute : System.Attribute
```

Marks a reloadable pipeline feature implementation with a stable extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureExtensionAttribute.cs#L16).

## `#ctor`

<a id="api-7555d23238e7b5ba"></a>
<!-- api: M:InnoEngine.Rendering.RenderFeatureExtensionAttribute.#ctor(System.String) 3fe744658319c997937079daf513554c7d7f2e4b153e9eadad036bbce2bc1aec -->

```csharp
public InnoEngine.Rendering.RenderFeatureExtensionAttribute.RenderFeatureExtensionAttribute(string id)
```

Creates a feature extension declaration.

**Parameter `id`:** Globally stable feature extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureExtensionAttribute.cs#L24).

## `id`

<a id="api-1ac7985f586b7b55"></a>
<!-- api: P:InnoEngine.Rendering.RenderFeatureExtensionAttribute.id f229742126df13d7eacbd91b9f6ff24fd6f8580f522649c040ee763d9e119e80 -->

```csharp
public string InnoEngine.Rendering.RenderFeatureExtensionAttribute.id { get; }
```

Gets the globally stable feature extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureExtensionAttribute.cs#L33).
