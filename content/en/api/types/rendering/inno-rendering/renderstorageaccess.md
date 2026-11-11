---
title: "RenderStorageAccess"
description: "Reference for RenderStorageAccess in Inno.Rendering."
uid: api.inno.rendering.bf37019cd0e65a5a
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderStorageAccess`

This reference describes `RenderStorageAccess` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Read`](#api-b0ad40cbe7d09567) | Field |
| [`ReadWrite`](#api-74b7f095adf64ad8) | Field |
| [`Write`](#api-70fee41a518c85cb) | Field |

## Type declaration

<a id="api-bf37019cd0e65a5a"></a>
<!-- api: T:Inno.Rendering.RenderStorageAccess 99d50038d2c3e5d919e73d729ee37002fe259b7b9a23171c24fec4e6ab2dfebc -->

```csharp
public enum Inno.Rendering.RenderStorageAccess : int
```

Selects unordered storage-resource access for one shader binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L52).

## `Read`

<a id="api-b0ad40cbe7d09567"></a>
<!-- api: F:Inno.Rendering.RenderStorageAccess.Read 7a2cb701f42fa6eec5eec0cebf838ece877ec2571db5dcd6e5d28d8fde28817d -->

```csharp
Inno.Rendering.RenderStorageAccess.Read = 0
```

Shader read-only access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L57).

## `ReadWrite`

<a id="api-74b7f095adf64ad8"></a>
<!-- api: F:Inno.Rendering.RenderStorageAccess.ReadWrite b8079c612c8d22926a8318c92448cde576d5deddac3f8eebe348f46272f4f8d0 -->

```csharp
Inno.Rendering.RenderStorageAccess.ReadWrite = 2
```

Shader read and write access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L65).

## `Write`

<a id="api-70fee41a518c85cb"></a>
<!-- api: F:Inno.Rendering.RenderStorageAccess.Write 395952c0fa8a13c2c5b8557811d3579a1006aaca41cca4ca9a030f60b1985993 -->

```csharp
Inno.Rendering.RenderStorageAccess.Write = 1
```

Shader write-only access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L61).
