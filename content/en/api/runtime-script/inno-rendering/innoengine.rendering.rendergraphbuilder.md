---
title: "RenderGraphBuilder"
description: "Reference for RenderGraphBuilder in Inno.Rendering."
uid: api.inno.rendering.runtime-script.765065280c3e786a
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderGraphBuilder`

This reference describes `RenderGraphBuilder` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a67ca7e22a9cc8d3) | Method |
| [```AddComputePass``1```](#api-67abefc7d7ade01a) | Method |
| [```AddCopyPass``1```](#api-47ee2983c735d74e) | Method |
| [```AddRasterPass``1```](#api-1760e7ae8415cf09) | Method |
| [`BeginMutationScope`](#api-744df581161bc023) | Method |
| [`BeginNameScope`](#api-55fd5fda8060ed2c) | Method |
| [`CreateBuffer`](#api-94986d26f42954cd) | Method |
| [`CreateTexture`](#api-713bf944ba149f59) | Method |
| [`ImportBuffer`](#api-972a2820aa2d1cbc) | Method |
| [`ImportTexture`](#api-107885c5e3c9dfcc) | Method |
| [`MarkOutput`](#api-3c9441abeb183acf) | Method |
| [`MarkOutput`](#api-2aa34829431c89b9) | Method |

## Type declaration

<a id="api-765065280c3e786a"></a>
<!-- api: T:InnoEngine.Rendering.RenderGraphBuilder c587f6bbfa04411badc134371158a63f8a011e875d456dad4251d47a3276554d -->

```csharp
public sealed class InnoEngine.Rendering.RenderGraphBuilder
```

Builds one generation-scoped render graph from explicit passes and resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L11).

## `#ctor`

<a id="api-a67ca7e22a9cc8d3"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.#ctor(System.UInt32,InnoEngine.Rendering.GraphicsCapabilities) 06786f8ec15e29160ea50cef4fdeb60c8d44ca532e6651d8ea9e8f371dcb7332 -->

```csharp
public InnoEngine.Rendering.RenderGraphBuilder.RenderGraphBuilder(uint generation, InnoEngine.Rendering.GraphicsCapabilities capabilities)
```

Creates a render graph builder for one frame generation.

**Parameter `generation`:** Non-zero frame-scoped generation.

**Parameter `capabilities`:** Device capabilities used during validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L40).

## ```AddComputePass``1```

<a id="api-67abefc7d7ade01a"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.AddComputePass``1(System.String,InnoEngine.Rendering.RenderPhaseId,``0,InnoEngine.Rendering.RenderPassExecute{``0}) 48d5240379724b82f376a04761e2b0ffc2a775a58c7cede75ff4e9a44c9145f8 -->

```csharp
public InnoEngine.Rendering.ComputePassBuilder InnoEngine.Rendering.RenderGraphBuilder.AddComputePass<TPassData>(string name, InnoEngine.Rendering.RenderPhaseId phase, TPassData passData, InnoEngine.Rendering.RenderPassExecute<TPassData> execute)
```

Adds a frame-scoped compute pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for compute resources and ordering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L278).

## ```AddCopyPass``1```

<a id="api-47ee2983c735d74e"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.AddCopyPass``1(System.String,InnoEngine.Rendering.RenderPhaseId,``0,InnoEngine.Rendering.RenderPassExecute{``0}) a5f4da611997eecca390ec268322905bbbb4ad79332e1a44a9049ea3fff79202 -->

```csharp
public InnoEngine.Rendering.CopyPassBuilder InnoEngine.Rendering.RenderGraphBuilder.AddCopyPass<TPassData>(string name, InnoEngine.Rendering.RenderPhaseId phase, TPassData passData, InnoEngine.Rendering.RenderPassExecute<TPassData> execute)
```

Adds a frame-scoped resource copy pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for copy resources and ordering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L308).

## ```AddRasterPass``1```

<a id="api-1760e7ae8415cf09"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.AddRasterPass``1(System.String,InnoEngine.Rendering.RenderPhaseId,``0,InnoEngine.Rendering.RenderPassExecute{``0}) b735b87bbe03767690fc0f82fd041d657c030c152f90ba81c95ee7f08cae0f82 -->

```csharp
public InnoEngine.Rendering.RasterPassBuilder InnoEngine.Rendering.RenderGraphBuilder.AddRasterPass<TPassData>(string name, InnoEngine.Rendering.RenderPhaseId phase, TPassData passData, InnoEngine.Rendering.RenderPassExecute<TPassData> execute)
```

Adds a frame-scoped raster pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for raster resources, attachments and ordering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L248).

## `BeginMutationScope`

<a id="api-744df581161bc023"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.BeginMutationScope cd12c7c73fc7a28558a933ba8cf91ae7f0a68ef16df66d0ffcc058a5b771e51f -->

```csharp
public InnoEngine.Rendering.RenderGraphMutationScope InnoEngine.Rendering.RenderGraphBuilder.BeginMutationScope()
```

Begins an isolated graph mutation that rolls back every added pass and resource unless committed.

**Returns:** A mutation scope used by reloadable features and other failure-isolated producers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L198).

## `BeginNameScope`

<a id="api-55fd5fda8060ed2c"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.BeginNameScope(System.String) cab0e43bfe99701db90cbba09e7b826138ec982d2b9b3fbe58a1dc67026b06ec -->

```csharp
public InnoEngine.Rendering.RenderGraphNameScope InnoEngine.Rendering.RenderGraphBuilder.BeginNameScope(string name)
```

Prefixes pass and resource diagnostic names until the returned scope is disposed.

**Parameter `name`:** Non-empty scope segment.

**Returns:** A disposable name scope that must be closed in nesting order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L218).

## `CreateBuffer`

<a id="api-94986d26f42954cd"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.CreateBuffer(System.String,InnoEngine.Rendering.RenderBufferDescriptor) cba7b0f02d368fc25186d28a3db79488eda23ab8b376074ffe3f6cf0c6abdfbc -->

```csharp
public InnoEngine.Rendering.RenderBufferHandle InnoEngine.Rendering.RenderGraphBuilder.CreateBuffer(string name, InnoEngine.Rendering.RenderBufferDescriptor descriptor)
```

Creates a transient buffer eligible for lifetime aliasing.

**Parameter `name`:** Debug and diagnostic name.

**Parameter `descriptor`:** Buffer requirements.

**Returns:** A handle valid only for this graph generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L123).

## `CreateTexture`

<a id="api-713bf944ba149f59"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.CreateTexture(System.String,InnoEngine.Rendering.RenderTextureDescriptor) 25e72b064b432b86eaf1d3fd5b07cb80a324077b30ea3e85b17f89f75797c953 -->

```csharp
public InnoEngine.Rendering.RenderTextureHandle InnoEngine.Rendering.RenderGraphBuilder.CreateTexture(string name, InnoEngine.Rendering.RenderTextureDescriptor descriptor)
```

Creates a transient texture eligible for lifetime aliasing.

**Parameter `name`:** Debug and diagnostic name.

**Parameter `descriptor`:** Texture requirements.

**Returns:** A handle valid only for this graph generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L66).

## `ImportBuffer`

<a id="api-972a2820aa2d1cbc"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.ImportBuffer(System.String,InnoEngine.Rendering.PersistentBufferHandle,InnoEngine.Rendering.RenderBufferDescriptor) a3e2e1e347f1fbe4e0f8f5b08f7737ed427ea234ca30ae22a16916ceeb703764 -->

```csharp
public InnoEngine.Rendering.RenderBufferHandle InnoEngine.Rendering.RenderGraphBuilder.ImportBuffer(string name, InnoEngine.Rendering.PersistentBufferHandle buffer, InnoEngine.Rendering.RenderBufferDescriptor descriptor)
```

Imports a persistent device buffer into the current graph.

**Parameter `name`:** Debug and diagnostic name.

**Parameter `buffer`:** Persistent buffer owned by the active device generation.

**Parameter `descriptor`:** Buffer requirements and usage.

**Returns:** A frame-scoped handle for graph declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L150).

## `ImportTexture`

<a id="api-107885c5e3c9dfcc"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.ImportTexture(System.String,InnoEngine.Rendering.PersistentTextureHandle,InnoEngine.Rendering.RenderTextureDescriptor) c9e27ac5119a67bb771002fa6fd6203e6050777581d24bbaf851b0855ca0e1d9 -->

```csharp
public InnoEngine.Rendering.RenderTextureHandle InnoEngine.Rendering.RenderGraphBuilder.ImportTexture(string name, InnoEngine.Rendering.PersistentTextureHandle texture, InnoEngine.Rendering.RenderTextureDescriptor descriptor)
```

Imports a persistent device texture into the current graph.

**Parameter `name`:** Debug and diagnostic name.

**Parameter `texture`:** Persistent texture owned by the active device generation.

**Parameter `descriptor`:** Texture requirements and usage.

**Returns:** A frame-scoped handle for graph declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L93).

## `MarkOutput`

<a id="api-3c9441abeb183acf"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.MarkOutput(InnoEngine.Rendering.RenderBufferHandle) da4006d6347e5640958a3050c49f83eb8ca75b0b9192457d936de759ed45cbb0 -->

```csharp
public void InnoEngine.Rendering.RenderGraphBuilder.MarkOutput(InnoEngine.Rendering.RenderBufferHandle buffer)
```

Marks a buffer as a graph output that keeps its producers alive.

**Parameter `buffer`:** Output buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L186).

## `MarkOutput`

<a id="api-2aa34829431c89b9"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphBuilder.MarkOutput(InnoEngine.Rendering.RenderTextureHandle) 22dc791731ea6e3106dded0884f4b6158e93fb01399b069dbd5a19788a6d2d4a -->

```csharp
public void InnoEngine.Rendering.RenderGraphBuilder.MarkOutput(InnoEngine.Rendering.RenderTextureHandle texture)
```

Marks a texture as a graph output that keeps its producers alive.

**Parameter `texture`:** Output texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L174).
