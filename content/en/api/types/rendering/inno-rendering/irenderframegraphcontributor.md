---
title: "IRenderFrameGraphContributor"
description: "Reference for IRenderFrameGraphContributor in Inno.Rendering."
uid: api.inno.rendering.ff771b8a6a525c8b
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `IRenderFrameGraphContributor`

This reference describes `IRenderFrameGraphContributor` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`AddRenderPasses`](#api-7d0eb24f3b0b4377) | Method |
| [`PrepareFrame`](#api-468a089736087602) | Method |

## Type declaration

<a id="api-ff771b8a6a525c8b"></a>
<!-- api: T:Inno.Rendering.IRenderFrameGraphContributor 833844da2b6caffc8b0d7eacb47e83b622ce9ebce88dd09448d83cbc5d68a157 -->

```csharp
public interface Inno.Rendering.IRenderFrameGraphContributor
```

Adds transient frame-final work, such as UI composition, without owning or advancing the graphics frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/IRenderFrameGraphContributor.cs#L6).

## `AddRenderPasses`

<a id="api-7d0eb24f3b0b4377"></a>
<!-- api: M:Inno.Rendering.IRenderFrameGraphContributor.AddRenderPasses(Inno.Rendering.RenderGraphBuilder,System.UInt64) 49cc8b2f8e64fd57cecaff2272a2bd100183c1eec50a2e63a1da76f21864a7b1 -->

```csharp
void Inno.Rendering.IRenderFrameGraphContributor.AddRenderPasses(Inno.Rendering.RenderGraphBuilder graph, ulong frameIndex)
```

Adds frame-scoped passes after all user render-request graphs have executed.

**Parameter `graph`:** Shared final graph builder.

**Parameter `frameIndex`:** Monotonic engine render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/IRenderFrameGraphContributor.cs#L25).

## `PrepareFrame`

<a id="api-468a089736087602"></a>
<!-- api: M:Inno.Rendering.IRenderFrameGraphContributor.PrepareFrame(System.UInt64) 7c7df4f2e50eb9cf90980a7717973c91afe3579bcebb4b214895ede78d666fff -->

```csharp
void Inno.Rendering.IRenderFrameGraphContributor.PrepareFrame(ulong frameIndex)
```

Applies queued resource changes at the current frame safety point.

**Parameter `frameIndex`:** Monotonic engine render frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/IRenderFrameGraphContributor.cs#L14).
