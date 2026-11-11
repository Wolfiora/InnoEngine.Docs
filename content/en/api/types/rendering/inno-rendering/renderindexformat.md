---
title: "RenderIndexFormat"
description: "Reference for RenderIndexFormat in Inno.Rendering."
uid: api.inno.rendering.25f1e15ff50655d7
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderIndexFormat`

This reference describes `RenderIndexFormat` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`UInt16`](#api-d9f7fb0b6e0469e8) | Field |
| [`UInt32`](#api-3280216e782b3dac) | Field |

## Type declaration

<a id="api-25f1e15ff50655d7"></a>
<!-- api: T:Inno.Rendering.RenderIndexFormat 68ed5879dab932b4b734fedaf41138ef40817446d952ed611288e638c93cfcdb -->

```csharp
public enum Inno.Rendering.RenderIndexFormat : int
```

Selects the integer representation of an index buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L340).

## `UInt16`

<a id="api-d9f7fb0b6e0469e8"></a>
<!-- api: F:Inno.Rendering.RenderIndexFormat.UInt16 3775afb1f1750b1f5d5cb1958057c97dd209f14d378edfdda21b5466c2cb315d -->

```csharp
Inno.Rendering.RenderIndexFormat.UInt16 = 0
```

Unsigned 16-bit indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L345).

## `UInt32`

<a id="api-3280216e782b3dac"></a>
<!-- api: F:Inno.Rendering.RenderIndexFormat.UInt32 094c41b4fa231b7a786b99c62a61e1f3960c408e9d6ce0627f818fcadc7adad8 -->

```csharp
Inno.Rendering.RenderIndexFormat.UInt32 = 1
```

Unsigned 32-bit indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L349).
