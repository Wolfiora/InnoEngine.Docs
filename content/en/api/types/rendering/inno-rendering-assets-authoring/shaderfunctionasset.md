---
title: "ShaderFunctionAsset"
description: "Reference for ShaderFunctionAsset in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.3d32d32d2c4d6b28
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderFunctionAsset`

This reference describes `ShaderFunctionAsset` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5108af6517399534) | Method |
| [`catalogOrder`](#api-3b668f8125d6a646) | Property |
| [`catalogPath`](#api-27e4de140ff478c8) | Property |
| [`exports`](#api-03760c20005e9b7b) | Property |
| [`implementationId`](#api-6b9fc7fc97aaae0f) | Property |
| [`languageId`](#api-e56ffb7e6452b4f8) | Property |

## Type declaration

<a id="api-3d32d32d2c4d6b28"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderFunctionAsset 63613de8c86b62b7531824f026c14fcddad0b5273b7e568e828629eb5f0c51a3 -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderFunctionAsset : Inno.Assets.AssetObject
```

Represents an authoring-only source-function library; it is never a complete GPU stage or runtime dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L12).

## `#ctor`

<a id="api-5108af6517399534"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.#ctor d2dea11398325a9afc6c49034c65dfdc7421fbed1fc20c467efadfa75e7c1e6a -->

```csharp
public Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.ShaderFunctionAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L12).

## `catalogOrder`

<a id="api-3b668f8125d6a646"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.catalogOrder 184b248246c15e2731c5268eddbf68c63fa81a530a61b05d00ffa9977ef79cd2 -->

```csharp
public int Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.catalogOrder { get; internal set; }
```

Gets the stable ordering value inside the authoring catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L33).

## `catalogPath`

<a id="api-27e4de140ff478c8"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.catalogPath 82a3e1a0c67b1bf74e98e103ac4e89b80180e36c0db447bf58bf6de7909db549 -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.catalogPath { get; internal set; }
```

Gets the author-declared catalog path used by Shader creation tools.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L29).

## `exports`

<a id="api-03760c20005e9b7b"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.exports b3b5e377b1791727e60644bb7885c9cabe68e0372017e2024c213a8e9ae9de48 -->

```csharp
public string[] Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.exports { get; internal set; }
```

Gets the explicitly exported functions available to graph source-function nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L21).

## `implementationId`

<a id="api-6b9fc7fc97aaae0f"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.implementationId fe4d04237c33a897ca2402fe98b0d444078332e0f8a9a4a754a5d23fa1dc8c1b -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.implementationId { get; internal set; }
```

Gets the adapter implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L25).

## `languageId`

<a id="api-e56ffb7e6452b4f8"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.languageId 1a6c1a32aa84125b293cc73168254f2dd374fb12ff9844425044e2be747f23b7 -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderFunctionAsset.languageId { get; internal set; }
```

Gets the configured source language identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Importing/ShaderFunctionAsset.cs#L17).
