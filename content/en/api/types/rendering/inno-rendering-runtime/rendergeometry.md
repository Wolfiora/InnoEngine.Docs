---
title: "RenderGeometry"
description: "Reference for RenderGeometry in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.5b25767f96eb9f6b
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderGeometry`

This reference describes `RenderGeometry` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Bind`](#api-8ea6394e06bb09f1) | Method |
| [`DrawSection`](#api-b6924bf56a346d98) | Method |
| [`indexBuffer`](#api-5296d98370177cd9) | Property |
| [`indexCount`](#api-bf73e1479462c367) | Property |
| [`sections`](#api-f5bad7e94c00b63e) | Property |
| [`vertexBuffer`](#api-040bc14ba20a6a2b) | Property |
| [`vertexCount`](#api-76a98201dcabeedb) | Property |
| [`vertexLayout`](#api-6dcc9d6a8cb91273) | Property |

## Type declaration

<a id="api-5b25767f96eb9f6b"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderGeometry c99c934628e6cf3a7ff24d4422a55e60c77317ab1cef6547715b7c4b1428a8d9 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderGeometry
```

Provides generation-scoped GPU buffers for an imported geometry helper asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L16).

## `Bind`

<a id="api-8ea6394e06bb09f1"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderGeometry.Bind(Inno.Rendering.RenderCommandEncoder) 7cfe971992de41e717837326681f140e939a181f9ec46ebf24d037ec0063eae7 -->

```csharp
public void Inno.Rendering.Runtime.RenderGeometry.Bind(Inno.Rendering.RenderCommandEncoder commands)
```

Binds both geometry streams at their first element.

**Parameter `commands`:** Current pass command encoder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L72).

## `DrawSection`

<a id="api-b6924bf56a346d98"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderGeometry.DrawSection(Inno.Rendering.RenderCommandEncoder,System.Int32,System.Int32) 2b08daef5675473fb1d3087cf31c6909114445f8305ce08a6a573e61ababad4f -->

```csharp
public void Inno.Rendering.Runtime.RenderGeometry.DrawSection(Inno.Rendering.RenderCommandEncoder commands, int sectionIndex, int instanceCount = 1)
```

Binds and draws one indexed section.

**Parameter `commands`:** Current raster pass command encoder.

**Parameter `sectionIndex`:** Zero-based section index.

**Parameter `instanceCount`:** Positive instance count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L91).

## `indexBuffer`

<a id="api-5296d98370177cd9"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderGeometry.indexBuffer de5038fa47c6df520cbb5d3604cd07917e9aaa5a9e1a3889029cf2e62680c697 -->

```csharp
public Inno.Rendering.PersistentBufferHandle Inno.Rendering.Runtime.RenderGeometry.indexBuffer { get; }
```

Gets the persistent index buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L44).

## `indexCount`

<a id="api-bf73e1479462c367"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderGeometry.indexCount 495b10e989323ed7477cb12de54601d684a0d9b8ca8af63ab26081e43fa1f6f2 -->

```csharp
public int Inno.Rendering.Runtime.RenderGeometry.indexCount { get; }
```

Gets the total index count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L59).

## `sections`

<a id="api-f5bad7e94c00b63e"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderGeometry.sections d1ec8e851a73a931123932bbc5505f5dc8249b92a97d1ae8007c813127954781 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.RenderGeometrySection> Inno.Rendering.Runtime.RenderGeometry.sections { get; }
```

Gets independently drawable indexed ranges.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L64).

## `vertexBuffer`

<a id="api-040bc14ba20a6a2b"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderGeometry.vertexBuffer ebc55d924f0d3db276eb2bcf38d0b1c19c16fe02fc440ff7aa64189db8729425 -->

```csharp
public Inno.Rendering.PersistentBufferHandle Inno.Rendering.Runtime.RenderGeometry.vertexBuffer { get; }
```

Gets the persistent vertex buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L39).

## `vertexCount`

<a id="api-76a98201dcabeedb"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderGeometry.vertexCount 8c3a81c4bf1cde5587a0d03b19de0ccc31044b6ab4eae1c53178a988912413d5 -->

```csharp
public int Inno.Rendering.Runtime.RenderGeometry.vertexCount { get; }
```

Gets the number of vertices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L54).

## `vertexLayout`

<a id="api-6dcc9d6a8cb91273"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderGeometry.vertexLayout 959d45784c718ebcd5de2cc19471c3b7c4598358548af3a40b3db5d8d6c8a29d -->

```csharp
public Inno.Rendering.RenderVertexLayout Inno.Rendering.Runtime.RenderGeometry.vertexLayout { get; }
```

Gets the imported interleaved vertex layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L49).
