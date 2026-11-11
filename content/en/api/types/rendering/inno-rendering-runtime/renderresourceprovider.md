---
title: "RenderResourceProvider"
description: "Reference for RenderResourceProvider in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.28839771cfe53b84
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderResourceProvider`

This reference describes `RenderResourceProvider` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Nested types

- [`RenderResourceProvider.MaterialBinding`](renderresourceprovider.materialbinding.md)

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ab192a61a9e60965) | Method |
| [`CreateGeometry`](#api-61989c0a0ae7b8ab) | Method |
| [`CreateMaterialPass`](#api-0a3b44ba9b4334ec) | Method |
| [`CreateMaterialPass`](#api-dfe68a57abc0ec52) | Method |
| [`CreateTextureBinding`](#api-7ac995b5639464fd) | Method |
| [`CreateUniformBinding`](#api-e4a3b69c0d2e0d7d) | Method |

## Type declaration

<a id="api-28839771cfe53b84"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderResourceProvider 6a9d840283dadda1a4178583fb0a5626a39924fc376e5d0473aaab5e2acc5285 -->

```csharp
public abstract class Inno.Rendering.Runtime.RenderResourceProvider
```

Provides protected construction operations for replaceable render resource-service implementations.

**Constraints:** The boundary lets a runtime resource service create generation-scoped values while their mutable
representation remains private to the Rendering assembly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderResourceProvider.cs#L17).

## `#ctor`

<a id="api-ab192a61a9e60965"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceProvider.#ctor bbb46b9cdca02aed2afb1d02138058459ef3750490a62e340096eafe2b92e37c -->

```csharp
protected Inno.Rendering.Runtime.RenderResourceProvider.RenderResourceProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderResourceProvider.cs#L17).

## `CreateGeometry`

<a id="api-61989c0a0ae7b8ab"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceProvider.CreateGeometry(Inno.Rendering.PersistentBufferHandle,Inno.Rendering.PersistentBufferHandle,Inno.Rendering.RenderVertexLayout,System.Int32,System.Int32,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderGeometrySection}) e7cafb9aa2e4bf48f698a92746c60ee762a69677fb63c5c390a614a444f8f0ae -->

```csharp
protected static Inno.Rendering.Runtime.RenderGeometry Inno.Rendering.Runtime.RenderResourceProvider.CreateGeometry(Inno.Rendering.PersistentBufferHandle vertexBuffer, Inno.Rendering.PersistentBufferHandle indexBuffer, Inno.Rendering.RenderVertexLayout vertexLayout, int vertexCount, int indexCount, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.RenderGeometrySection> sections)
```

Creates generation-scoped resolved geometry from persistent buffers and immutable sections.

**Parameter `vertexBuffer`:** The persistent vertex buffer.

**Parameter `indexBuffer`:** The persistent index buffer.

**Parameter `vertexLayout`:** The interleaved vertex layout.

**Parameter `vertexCount`:** The number of vertices.

**Parameter `indexCount`:** The number of indices.

**Parameter `sections`:** The independently drawable indexed ranges.

**Returns:** Resolved geometry owned by the current device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderResourceProvider.cs#L163).

## `CreateMaterialPass`

<a id="api-0a3b44ba9b4334ec"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceProvider.CreateMaterialPass(Inno.Rendering.Assets.ShaderPassDefinition,Inno.Rendering.GraphicsPipelineHandle,Inno.Rendering.ComputePipelineHandle,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Assets.ShaderPropertyDefinition},Inno.Rendering.ShaderInterface,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding}) 406b662a15963d7a68dca2e6170ce18a852cebaef62d9ece7e8ed430691e677d -->

```csharp
protected static Inno.Rendering.Runtime.RenderMaterialPass Inno.Rendering.Runtime.RenderResourceProvider.CreateMaterialPass(Inno.Rendering.Assets.ShaderPassDefinition definition, Inno.Rendering.GraphicsPipelineHandle graphicsPipeline, Inno.Rendering.ComputePipelineHandle computePipeline, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.ShaderPropertyDefinition> declaredBindings, Inno.Rendering.ShaderInterface activeInterface, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding> bindings)
```

Creates a generation-scoped resolved material pass.

**Parameter `definition`:** The selected shader pass definition.

**Parameter `graphicsPipeline`:** The graphics pipeline handle, or an invalid handle for compute.

**Parameter `computePipeline`:** The compute pipeline handle, or an invalid handle for rasterization.

**Parameter `declaredBindings`:** Complete shader binding declarations before backend optimization.

**Parameter `activeInterface`:** Exact bindings reflected by the compiled pass after backend optimization.

**Parameter `bindings`:** The complete material-owned binding snapshot.

**Returns:** A resolved material pass ready for command binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderResourceProvider.cs#L123).

## `CreateMaterialPass`

<a id="api-dfe68a57abc0ec52"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceProvider.CreateMaterialPass(Inno.Rendering.Assets.ShaderPassDefinition,Inno.Rendering.GraphicsPipelineHandle,Inno.Rendering.ComputePipelineHandle,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding}) 4a397a030971db908c5fd5161c1e950f194c934cc38ffa0418b6bcee74d9e789 -->

```csharp
protected static Inno.Rendering.Runtime.RenderMaterialPass Inno.Rendering.Runtime.RenderResourceProvider.CreateMaterialPass(Inno.Rendering.Assets.ShaderPassDefinition definition, Inno.Rendering.GraphicsPipelineHandle graphicsPipeline, Inno.Rendering.ComputePipelineHandle computePipeline, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding> bindings)
```

Creates a generation-scoped resolved material pass when no compiled-interface query is required.

**Parameter `definition`:** The selected shader pass definition.

**Parameter `graphicsPipeline`:** The graphics pipeline handle, or an invalid handle for compute.

**Parameter `computePipeline`:** The compute pipeline handle, or an invalid handle for rasterization.

**Parameter `bindings`:** The complete material-owned binding snapshot.

**Returns:** A resolved material pass ready for automatic material binding. Calls to
`Inno.Rendering.Runtime.RenderMaterialPass.UsesBinding(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderShaderBindingKind)` require the overload carrying the compiled interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderResourceProvider.cs#L91).

## `CreateTextureBinding`

<a id="api-7ac995b5639464fd"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceProvider.CreateTextureBinding(Inno.Rendering.RenderBindingId,Inno.Rendering.PersistentTextureHandle,Inno.Rendering.RenderSamplerState) f1f5f338e740d37a51608a4f7c934d7825f54b56690b5d95e07694db4916b6e4 -->

```csharp
protected static Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding Inno.Rendering.Runtime.RenderResourceProvider.CreateTextureBinding(Inno.Rendering.RenderBindingId id, Inno.Rendering.PersistentTextureHandle texture, Inno.Rendering.RenderSamplerState sampler)
```

Creates a protected sampled-texture binding value.

**Parameter `id`:** The stable shader binding identifier.

**Parameter `texture`:** The persistent texture handle.

**Parameter `sampler`:** The backend-neutral sampler state.

**Returns:** A binding token accepted by the material-pass construction helpers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderResourceProvider.cs#L65).

## `CreateUniformBinding`

<a id="api-e4a3b69c0d2e0d7d"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderResourceProvider.CreateUniformBinding(Inno.Rendering.RenderBindingId,System.ReadOnlySpan{System.Byte}) 82f26b58392a2feaa9918deb07efde0a844cfe7a215ed5cde01eb8d6339f3903 -->

```csharp
protected static Inno.Rendering.Runtime.RenderResourceProvider.MaterialBinding Inno.Rendering.Runtime.RenderResourceProvider.CreateUniformBinding(Inno.Rendering.RenderBindingId id, System.ReadOnlySpan<byte> data)
```

Creates a protected uniform binding value.

**Parameter `id`:** The stable shader binding identifier.

**Parameter `data`:** The complete encoded uniform bytes.

**Returns:** A binding token accepted by the material-pass construction helpers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Resources/RenderResourceProvider.cs#L44).
