---
title: "RenderFeatureExtensionAttribute"
description: "Reference for RenderFeatureExtensionAttribute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.0c30728ce3360219
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderFeatureExtensionAttribute`

This reference describes `RenderFeatureExtensionAttribute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-247bb6f04f5ac566) | Method |
| [`id`](#api-cba6125b7eef4277) | Property |

## Type declaration

<a id="api-0c30728ce3360219"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderFeatureExtensionAttribute 143e1bc1d827ac0164ed895b7e03bac69d054e1c98ac14e8eceaaeb69939e201 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderFeatureExtensionAttribute : System.Attribute
```

Marks a reloadable pipeline feature implementation with a stable extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureExtensionAttribute.cs#L16).

## `#ctor`

<a id="api-247bb6f04f5ac566"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderFeatureExtensionAttribute.#ctor(System.String) 8331cff184a00dd8e5c5a1427fe9d0f7f511ca8794097254aafcff7c8a96882b -->

```csharp
public Inno.Rendering.Runtime.RenderFeatureExtensionAttribute.RenderFeatureExtensionAttribute(string id)
```

Creates a feature extension declaration.

**Parameter `id`:** Globally stable feature extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureExtensionAttribute.cs#L24).

## `id`

<a id="api-cba6125b7eef4277"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFeatureExtensionAttribute.id aa70cca7c04ff300248621d95c0a5a16bcb7fcfb854b4404344b16a7e503f2da -->

```csharp
public string Inno.Rendering.Runtime.RenderFeatureExtensionAttribute.id { get; }
```

Gets the globally stable feature extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderFeatureExtensionAttribute.cs#L33).
