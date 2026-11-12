---
title: "RenderGeometry"
description: "Reference for RenderGeometry in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.c5ef01eba178fc9e
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderGeometry`

This reference describes `RenderGeometry` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-da09ea69ec1a63f2) | Method |
| [`Bind`](#api-e084330eb0efab49) | Method |
| [`DrawSection`](#api-7db97ec9b0e084f1) | Method |
| [`indexBuffer`](#api-4b9e5cc8ec2f0a58) | Property |
| [`indexCount`](#api-c8b0bb3120863434) | Property |
| [`sections`](#api-39593c5795c75252) | Property |
| [`vertexBuffer`](#api-82febecfbcd6aa74) | Property |
| [`vertexCount`](#api-c831e9448f203c2e) | Property |
| [`vertexLayout`](#api-dd6069d36af30dd0) | Property |

## Type declaration

<a id="api-c5ef01eba178fc9e"></a>
<!-- api: T:InnoEngine.Rendering.RenderGeometry 86c580eafa58d349383eb995e3cdc69d530402544c3bac86e0083f6ecf46c44e -->

```csharp
public sealed class InnoEngine.Rendering.RenderGeometry
```

Provides generation-scoped GPU buffers for an imported geometry helper asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L16).

## `#ctor`

<a id="api-da09ea69ec1a63f2"></a>
<!-- api: M:InnoEngine.Rendering.RenderGeometry.#ctor 318d40974208a9de176ab17a228083528765883c9d8b037477c413ee92684c81 -->

```csharp
public InnoEngine.Rendering.RenderGeometry.RenderGeometry()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L16).

## `Bind`

<a id="api-e084330eb0efab49"></a>
<!-- api: M:InnoEngine.Rendering.RenderGeometry.Bind(InnoEngine.Rendering.RenderCommandEncoder) e7a70d6746d10e9b4be79a00620dd23a956baa570c2c566e5718a7d8a06ce344 -->

```csharp
public void InnoEngine.Rendering.RenderGeometry.Bind(InnoEngine.Rendering.RenderCommandEncoder commands)
```

Binds both geometry streams at their first element.

**Parameter `commands`:** Current pass command encoder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L72).

## `DrawSection`

<a id="api-7db97ec9b0e084f1"></a>
<!-- api: M:InnoEngine.Rendering.RenderGeometry.DrawSection(InnoEngine.Rendering.RenderCommandEncoder,System.Int32,System.Int32) 4538ad9d38e07c5fe0a6a5d7e9eeee309b57cb994167410d1b68c624c8c128bc -->

```csharp
public void InnoEngine.Rendering.RenderGeometry.DrawSection(InnoEngine.Rendering.RenderCommandEncoder commands, int sectionIndex, int instanceCount = 1)
```

Binds and draws one indexed section.

**Parameter `commands`:** Current raster pass command encoder.

**Parameter `sectionIndex`:** Zero-based section index.

**Parameter `instanceCount`:** Positive instance count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L91).

## `indexBuffer`

<a id="api-4b9e5cc8ec2f0a58"></a>
<!-- api: P:InnoEngine.Rendering.RenderGeometry.indexBuffer 773a472e3f5f8dc60cefe937d23fd6a78c4d9d269cbe2f36d0426469cc185355 -->

```csharp
public InnoEngine.Rendering.PersistentBufferHandle InnoEngine.Rendering.RenderGeometry.indexBuffer { get; }
```

Gets the persistent index buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L44).

## `indexCount`

<a id="api-c8b0bb3120863434"></a>
<!-- api: P:InnoEngine.Rendering.RenderGeometry.indexCount 7d1e849659663e7237165b110b3f5a4210e8d68c3bf827cc3a9b0309e0b7d25d -->

```csharp
public int InnoEngine.Rendering.RenderGeometry.indexCount { get; }
```

Gets the total index count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L59).

## `sections`

<a id="api-39593c5795c75252"></a>
<!-- api: P:InnoEngine.Rendering.RenderGeometry.sections 0bf63318382da0eae8bde3aad73d31685456907a1e35152f7a80070b2c2f4c4f -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderGeometrySection> InnoEngine.Rendering.RenderGeometry.sections { get; }
```

Gets independently drawable indexed ranges.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L64).

## `vertexBuffer`

<a id="api-82febecfbcd6aa74"></a>
<!-- api: P:InnoEngine.Rendering.RenderGeometry.vertexBuffer 46e8f1df9c065fe5b53ab0f63d2f3bbbfc5801e5a0a5586927b244d31186a8e4 -->

```csharp
public InnoEngine.Rendering.PersistentBufferHandle InnoEngine.Rendering.RenderGeometry.vertexBuffer { get; }
```

Gets the persistent vertex buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L39).

## `vertexCount`

<a id="api-c831e9448f203c2e"></a>
<!-- api: P:InnoEngine.Rendering.RenderGeometry.vertexCount 0d20aeb199ef6d8e814e6a4029ce44d6e8a78583af79af367f67bb6f41481b06 -->

```csharp
public int InnoEngine.Rendering.RenderGeometry.vertexCount { get; }
```

Gets the number of vertices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L54).

## `vertexLayout`

<a id="api-dd6069d36af30dd0"></a>
<!-- api: P:InnoEngine.Rendering.RenderGeometry.vertexLayout ac8e3532c645aafb369cacb4132b5319ccab69e9692cdf8e4f974f8237dcea7b -->

```csharp
public InnoEngine.Rendering.RenderVertexLayout InnoEngine.Rendering.RenderGeometry.vertexLayout { get; }
```

Gets the imported interleaved vertex layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderGeometry.cs#L49).
