---
title: "ViewContentContext"
description: "Reference for ViewContentContext in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.d3eddb864881dd6a
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `ViewContentContext`

This reference describes `ViewContentContext` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d53b0d755f926310) | Method |
| [`content`](#api-321d762d901461a6) | Property |
| [`deltaTime`](#api-711fb4bd14fb1c0c) | Property |
| [`frameIndex`](#api-f6ff797e355e455c) | Property |
| [`input`](#api-2913795b810a3bf3) | Property |
| [`sessionId`](#api-4d44bb2e101e26dd) | Property |
| [`sourceIds`](#api-085140893e14c4ce) | Property |
| [`view`](#api-1c4d152ce6b783ae) | Property |
| [`views`](#api-92529d33836638ca) | Property |

## Type declaration

<a id="api-d3eddb864881dd6a"></a>
<!-- api: T:InnoEngine.Rendering.ViewContentContext 39f0904846eeb80c6a46ae0f00672f4199d49867da28a201a4509cdae7ff3a2a -->

```csharp
public sealed class InnoEngine.Rendering.ViewContentContext
```

Supplies one content source with the host-selected scene roots and an exact view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L79).

## `#ctor`

<a id="api-d53b0d755f926310"></a>
<!-- api: M:InnoEngine.Rendering.ViewContentContext.#ctor(InnoEngine.References.ContentReadScope,System.String,InnoEngine.Rendering.RenderView,System.UInt64,System.Single,InnoEngine.Rendering.RenderOutputInput,System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderView},System.Collections.Generic.IReadOnlyList{System.String}) 64dd3fb8d8b4b496f87ce553950f366fb798ccedc2677784ddaf9a9f1cda6a54 -->

```csharp
public InnoEngine.Rendering.ViewContentContext.ViewContentContext(InnoEngine.References.ContentReadScope content, string sessionId, InnoEngine.Rendering.RenderView view, ulong frameIndex, float deltaTime, InnoEngine.Rendering.RenderOutputInput? input = null, System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderView>? views = null, System.Collections.Generic.IReadOnlyList<string>? sourceIds = null)
```

Creates a frame-scoped content collection context.

**Parameter `content`:** Ordered roots selected by the host.

**Parameter `sessionId`:** Stable identity of the host output session.

**Parameter `view`:** Exact view that will consume the content.

**Parameter `frameIndex`:** Monotonic output frame number.

**Parameter `deltaTime`:** Elapsed frame time in seconds.

**Parameter `input`:** Pointer and keyboard input in output pixel coordinates.

**Parameter `views`:** All views in the same model output, used to choose shared content resolution.

**Parameter `sourceIds`:** Optional explicit source allowlist for a routed model layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L108).

## `content`

<a id="api-321d762d901461a6"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentContext.content 6b5163a4c5c064b22f3c867ab62b86349d4ee3d7372cdf222117a226d93be153 -->

```csharp
public InnoEngine.References.ContentReadScope InnoEngine.Rendering.ViewContentContext.content { get; }
```

Gets the ordered host-selected content roots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L132).

## `deltaTime`

<a id="api-711fb4bd14fb1c0c"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentContext.deltaTime 7a0ee3fcfd339be7520c79300460fb8e7d541a50f27fa1be1f2358e3a2a1a6a6 -->

```csharp
public float InnoEngine.Rendering.ViewContentContext.deltaTime { get; }
```

Gets elapsed time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L152).

## `frameIndex`

<a id="api-f6ff797e355e455c"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentContext.frameIndex f376b5e960bb1a4001dc169e8f0923be6a88854e36ef58458e75755156ad3019 -->

```csharp
public ulong InnoEngine.Rendering.ViewContentContext.frameIndex { get; }
```

Gets the monotonic output frame number.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L147).

## `input`

<a id="api-2913795b810a3bf3"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentContext.input d825865955349a1b6247aa3f17cf91bfe778381a911470b30baaf0a1545130e5 -->

```csharp
public InnoEngine.Rendering.RenderOutputInput InnoEngine.Rendering.ViewContentContext.input { get; }
```

Gets frame-local input for this output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L156).

## `sessionId`

<a id="api-4d44bb2e101e26dd"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentContext.sessionId 4c5ad93906266cc09c10f33b38b2974f454ed615073705f096a80387f84f80f5 -->

```csharp
public string InnoEngine.Rendering.ViewContentContext.sessionId { get; }
```

Gets the stable host output session identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L137).

## `sourceIds`

<a id="api-085140893e14c4ce"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentContext.sourceIds e32cdcf9f490f5e5223b6f070de3b0684d26004b4333301899d8448de2635049 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string>? InnoEngine.Rendering.ViewContentContext.sourceIds { get; }
```

Gets the exclusive source allowlist; null collects every active source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L164).

## `view`

<a id="api-1c4d152ce6b783ae"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentContext.view 0abbf28fc83603f9bbe2e7fd4b2cc6102405c6433251567ee1d115a616203c02 -->

```csharp
public InnoEngine.Rendering.RenderView InnoEngine.Rendering.ViewContentContext.view { get; }
```

Gets the exact destination view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L142).

## `views`

<a id="api-92529d33836638ca"></a>
<!-- api: P:InnoEngine.Rendering.ViewContentContext.views b5b5bf602d3c2e53ab77c3150764e5f454c2588bcff6e642c43d4cb6e36e6c8d -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderView> InnoEngine.Rendering.ViewContentContext.views { get; }
```

Gets every view in the same model output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L160).
