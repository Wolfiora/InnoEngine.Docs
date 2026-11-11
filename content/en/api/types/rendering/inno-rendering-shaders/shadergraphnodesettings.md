---
title: "ShaderGraphNodeSettings"
description: "Reference for ShaderGraphNodeSettings in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.44dbca6a6d1fe606
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphNodeSettings`

This reference describes `ShaderGraphNodeSettings` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dd9484b826e8e3e3) | Method |
| [`createOrder`](#api-ab8b902b9114db26) | Property |
| [`createPath`](#api-7c11474d9b58e411) | Property |
| [`displayName`](#api-f784398825e6aa23) | Property |
| [`effect`](#api-b17bba023c8a9f78) | Property |
| [`kind`](#api-2d9010b0fd52d067) | Property |
| [`role`](#api-40f3081f4f1049d1) | Property |

## Type declaration

<a id="api-44dbca6a6d1fe606"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphNodeSettings 38410172c9825ce3c04fbeb4dc49a51fed15c43813aebfcf998de572012e5071 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderGraphNodeSettings : Inno.Core.Serialization.ISerializable
```

Stores graph-level identity and catalog metadata for a reusable Shader node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L43).

## `#ctor`

<a id="api-dd9484b826e8e3e3"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphNodeSettings.#ctor dd8dea6dd7ec397ef7953bd1f812d78d42af372e70b56102ba2649cb9ff3a2df -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodeSettings.ShaderGraphNodeSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L43).

## `createOrder`

<a id="api-ab8b902b9114db26"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeSettings.createOrder f6c238e03d71bd06487d7bf5256ad66d77c56771182966a7bacc976f9e7132ca -->

```csharp
public int Inno.Rendering.Shaders.ShaderGraphNodeSettings.createOrder { get; set; }
```

Gets or sets the deterministic order within the creation catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L56).

## `createPath`

<a id="api-7c11474d9b58e411"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeSettings.createPath 1cbd0acb06d4a833e238596f7f402585a3e4a8cca7f08757cf2eeb086184bac0 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphNodeSettings.createPath { get; set; }
```

Gets or sets the slash-separated creation catalog beneath Graph Nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L52).

## `displayName`

<a id="api-f784398825e6aa23"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeSettings.displayName 062b9d87913ae5e21b31a33a9d35ff078de703c3d5a11f7453c800d436e41870 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphNodeSettings.displayName { get; set; }
```

Gets or sets the node title displayed to authors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L48).

## `effect`

<a id="api-b17bba023c8a9f78"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeSettings.effect af180cab175281838abbdfdeeaa3250ce07837404fca7c9a7e8185f76940bb89 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodeEffect Inno.Rendering.Shaders.ShaderGraphNodeSettings.effect { get; set; }
```

Gets or sets the observable computation behavior of an inline function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L64).

## `kind`

<a id="api-2d9010b0fd52d067"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeSettings.kind 1ad8b50ee36e5dc6f015cbaa17ea22ed1f8697e0caa13c5b6afe0f2703334df6 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphNodeKind Inno.Rendering.Shaders.ShaderGraphNodeSettings.kind { get; set; }
```

Gets or sets how a reference to this graph participates in compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L60).

## `role`

<a id="api-40f3081f4f1049d1"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphNodeSettings.role b8e5c6f1d118a4273839555c858f055daaec3c5c5a5813914c156ad11533716b -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphNodeSettings.role { get; set; }
```

Gets or sets the domain role consumed by a Target; empty for ordinary inline functions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Documents/ShaderGraphNodes.cs#L68).
