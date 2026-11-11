---
title: "ShaderGraphTemplateRegistry"
description: "Reference for ShaderGraphTemplateRegistry in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.b67715d5a563745c
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphTemplateRegistry`

This reference describes `ShaderGraphTemplateRegistry` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f3f739ce03e2db9e) | Method |
| [`Create`](#api-eb5202eab2648c4d) | Method |
| [`Dispose`](#api-5f6d34e514af1abb) | Method |
| [`templates`](#api-e75769383e21f94c) | Property |

## Type declaration

<a id="api-b67715d5a563745c"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphTemplateRegistry 32602361998e69d9bcda5952c8befd207c03e8ef2bd1f7f9d03c62967d7bf12f -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphTemplateRegistry : System.IDisposable
```

Owns generation-safe template discovery and invocation for editor asset creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L28).

## `#ctor`

<a id="api-f3f739ce03e2db9e"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateRegistry.#ctor(Inno.Extensibility.Types.TypeCatalog) 17cba7722a3c77eedd6803b4e2acad6b65245b3c0fd09e9193f9a9e7c97113f1 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphTemplateRegistry.ShaderGraphTemplateRegistry(Inno.Extensibility.Types.TypeCatalog types)
```

Registers a template owner with the shared type-generation catalog.

**Parameter `types`:** Catalog which must outlive this owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L39).

## `Create`

<a id="api-eb5202eab2648c4d"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateRegistry.Create(System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 488c9ed26ba408f6ec482c58d17bfa5f72e9a251ed36d0458869e9bc51389d3a -->

```csharp
public Inno.Core.Graphs.GraphDocument Inno.Rendering.Shaders.ShaderGraphTemplateRegistry.Create(string id, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Invokes the selected template under one generation lease.

**Parameter `id`:** Stable template identity from the creation menu.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** A detached graph; no provider instance crosses the invocation boundary.

**Throws `System.InvalidOperationException`:** The selected template is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L76).

## `Dispose`

<a id="api-5f6d34e514af1abb"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateRegistry.Dispose c7040dc8097efebc1db881082578e8d8c679aab69f5f25c1571d5fdbb3ac6c37 -->

```csharp
public void Inno.Rendering.Shaders.ShaderGraphTemplateRegistry.Dispose()
```

Retires providers through the shared generation lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L91).

## `templates`

<a id="api-e75769383e21f94c"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphTemplateRegistry.templates baea24f0b7f6cdf7daff200b2e85fc4c8c268663b365d6b01f4818dddb4b6024 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderGraphTemplateInfo> Inno.Rendering.Shaders.ShaderGraphTemplateRegistry.templates { get; }
```

Gets detached menu descriptions for the current generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L48).
