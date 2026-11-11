---
title: "ViewContentContext"
description: "Reference for ViewContentContext in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.2b0cd5668333190a
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `ViewContentContext`

This reference describes `ViewContentContext` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-865a93a3386ec9db) | Method |
| [`content`](#api-4d755eba9e22a916) | Property |
| [`deltaTime`](#api-b2fc297d2b06c350) | Property |
| [`frameIndex`](#api-949f614f8b32758d) | Property |
| [`input`](#api-ad3e3ac5464e6741) | Property |
| [`sessionId`](#api-052ff0311605b8d2) | Property |
| [`sourceIds`](#api-1aa84809d6f504e0) | Property |
| [`view`](#api-c37d4f18b658bd22) | Property |
| [`views`](#api-c55b1ae1d53515cb) | Property |

## Type declaration

<a id="api-2b0cd5668333190a"></a>
<!-- api: T:Inno.Rendering.Runtime.ViewContentContext 55eaf05596344346da2c76387283487831b765e18ab745e2504feb0df4eb95eb -->

```csharp
public sealed class Inno.Rendering.Runtime.ViewContentContext
```

Supplies one content source with the host-selected scene roots and an exact view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L79).

## `#ctor`

<a id="api-865a93a3386ec9db"></a>
<!-- api: M:Inno.Rendering.Runtime.ViewContentContext.#ctor(Inno.References.ContentReadScope,System.String,Inno.Rendering.Runtime.RenderView,System.UInt64,System.Single,Inno.Rendering.Runtime.RenderOutputInput,System.Collections.Generic.IReadOnlyList{Inno.Rendering.Runtime.RenderView},System.Collections.Generic.IReadOnlyList{System.String}) 8cf5f1294955519dac9752c1cad410cfb87726b8f2d12e55f01c19244bb93542 -->

```csharp
public Inno.Rendering.Runtime.ViewContentContext.ViewContentContext(Inno.References.ContentReadScope content, string sessionId, Inno.Rendering.Runtime.RenderView view, ulong frameIndex, float deltaTime, Inno.Rendering.Runtime.RenderOutputInput? input = null, System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.RenderView>? views = null, System.Collections.Generic.IReadOnlyList<string>? sourceIds = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L108).

## `content`

<a id="api-4d755eba9e22a916"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentContext.content 601d31315abbe5951a9c8641facd488b24aabdc22d6afb302e93b0c3d861e647 -->

```csharp
public Inno.References.ContentReadScope Inno.Rendering.Runtime.ViewContentContext.content { get; }
```

Gets the ordered host-selected content roots.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L132).

## `deltaTime`

<a id="api-b2fc297d2b06c350"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentContext.deltaTime c52f441746ead71e79fd065cf38442d2cfbd22c1aa4621de62750d76163b1af7 -->

```csharp
public float Inno.Rendering.Runtime.ViewContentContext.deltaTime { get; }
```

Gets elapsed time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L152).

## `frameIndex`

<a id="api-949f614f8b32758d"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentContext.frameIndex 6a359ed29f921313d12fa6b449dac1f821ea8a6eab7db461ef3bfad5c050f696 -->

```csharp
public ulong Inno.Rendering.Runtime.ViewContentContext.frameIndex { get; }
```

Gets the monotonic output frame number.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L147).

## `input`

<a id="api-ad3e3ac5464e6741"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentContext.input 1223a9340d3a11d32e22430f7e0b9855e6be5dce4502a4c3eb90e3f53604bf8c -->

```csharp
public Inno.Rendering.Runtime.RenderOutputInput Inno.Rendering.Runtime.ViewContentContext.input { get; }
```

Gets frame-local input for this output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L156).

## `sessionId`

<a id="api-052ff0311605b8d2"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentContext.sessionId 32a8fe2199ae7c38a63cc0cfb75528a5ebaf78ba6a963bb8355df1599d4745cb -->

```csharp
public string Inno.Rendering.Runtime.ViewContentContext.sessionId { get; }
```

Gets the stable host output session identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L137).

## `sourceIds`

<a id="api-1aa84809d6f504e0"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentContext.sourceIds 7b3caaaec54f0289941fe67167beaaab2c0773bee36985d87561d6082148cb32 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string>? Inno.Rendering.Runtime.ViewContentContext.sourceIds { get; }
```

Gets the exclusive source allowlist; null collects every active source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L164).

## `view`

<a id="api-c37d4f18b658bd22"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentContext.view 454dd72d5e72feb0f27b31a4a0c902e8c5f3ccdbf1ccfbcf0be192eede6b31ab -->

```csharp
public Inno.Rendering.Runtime.RenderView Inno.Rendering.Runtime.ViewContentContext.view { get; }
```

Gets the exact destination view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L142).

## `views`

<a id="api-c55b1ae1d53515cb"></a>
<!-- api: P:Inno.Rendering.Runtime.ViewContentContext.views 58a55d4136d7ede2290f098d30d9b112b6fc32ede116c4fd4cc61a27391a708a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Runtime.RenderView> Inno.Rendering.Runtime.ViewContentContext.views { get; }
```

Gets every view in the same model output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L160).
