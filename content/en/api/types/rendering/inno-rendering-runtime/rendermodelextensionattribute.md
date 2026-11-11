---
title: "RenderModelExtensionAttribute"
description: "Reference for RenderModelExtensionAttribute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.2229f458e2666bad
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderModelExtensionAttribute`

This reference describes `RenderModelExtensionAttribute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9091fe3e02f8c8d2) | Method |
| [`id`](#api-a9085bab0b017183) | Property |

## Type declaration

<a id="api-2229f458e2666bad"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderModelExtensionAttribute 4c2b871d0d6bb7f6ab975bf27f97e9decee03f3004bc349692e9c3bd69c10955 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderModelExtensionAttribute : System.Attribute
```

Marks a reloadable rendering model with a stable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelExtensionAttribute.cs#L16).

## `#ctor`

<a id="api-9091fe3e02f8c8d2"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderModelExtensionAttribute.#ctor(System.String) b102dd45452ff40b76d2c59cf63288e0ba1c0df57e11a2d4a8a4ed0c68fe218e -->

```csharp
public Inno.Rendering.Runtime.RenderModelExtensionAttribute.RenderModelExtensionAttribute(string id)
```

Creates a model declaration.

**Parameter `id`:** Globally stable model identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelExtensionAttribute.cs#L24).

## `id`

<a id="api-a9085bab0b017183"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderModelExtensionAttribute.id 7b9e6f17d01aaf0d838a17921cb27b5d2dcacfb5c141cf03eff660c56389aa06 -->

```csharp
public string Inno.Rendering.Runtime.RenderModelExtensionAttribute.id { get; }
```

Gets the globally stable model identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelExtensionAttribute.cs#L33).
