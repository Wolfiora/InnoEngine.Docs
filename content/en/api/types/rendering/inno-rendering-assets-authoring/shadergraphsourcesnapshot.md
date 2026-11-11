---
title: "ShaderGraphSourceSnapshot"
description: "Reference for ShaderGraphSourceSnapshot in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.279b0da820a949f9
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderGraphSourceSnapshot`

This reference describes `ShaderGraphSourceSnapshot` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`contentHash`](#api-c67f497f9ae0b546) | Property |
| [`document`](#api-ddc8fc05b0d3abc9) | Property |
| [`isReadOnly`](#api-c6d63ad42f74b423) | Property |

## Type declaration

<a id="api-279b0da820a949f9"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderGraphSourceSnapshot 5fe994787cf3d790b816c52b4844fa9bb6ade27e695bfe67982e8a36a8dedb96 -->

```csharp
public sealed class Inno.Rendering.Assets.Authoring.ShaderGraphSourceSnapshot
```

Contains detached graph source state, not a compiled or live runtime asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Editing/ShaderGraphSourceStore.cs#L97).

## `contentHash`

<a id="api-c67f497f9ae0b546"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderGraphSourceSnapshot.contentHash 981d53c26b9d31b3eb964de07630dee65d8308b7c7d8478b48fc4fdc8160f4a4 -->

```csharp
public string Inno.Rendering.Assets.Authoring.ShaderGraphSourceSnapshot.contentHash { get; }
```

Gets the source fingerprint used to reject external-edit conflicts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Editing/ShaderGraphSourceStore.cs#L116).

## `document`

<a id="api-ddc8fc05b0d3abc9"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderGraphSourceSnapshot.document 0a2d79d2cb057f5be0f375a29b1e5c4d45a8f385d7b4d796f8110185342fdcf8 -->

```csharp
public Inno.Core.Graphs.GraphDocument Inno.Rendering.Assets.Authoring.ShaderGraphSourceSnapshot.document { get; }
```

Gets a detached copy of authored graph records.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Editing/ShaderGraphSourceStore.cs#L112).

## `isReadOnly`

<a id="api-c6d63ad42f74b423"></a>
<!-- api: P:Inno.Rendering.Assets.Authoring.ShaderGraphSourceSnapshot.isReadOnly 9214645ee5777722639b32e845f8e8cd63bdcf59b3e90e0aa045a1bbefac627f -->

```csharp
public bool Inno.Rendering.Assets.Authoring.ShaderGraphSourceSnapshot.isReadOnly { get; }
```

Gets whether the source belongs to an immutable installation mount.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Editing/ShaderGraphSourceStore.cs#L120).
