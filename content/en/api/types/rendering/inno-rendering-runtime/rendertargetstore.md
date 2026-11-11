---
title: "RenderTargetStore"
description: "Reference for RenderTargetStore in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.b53387e4a9e38c9e
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderTargetStore`

This reference describes `RenderTargetStore` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c92b686c6e8772df) | Method |
| [`Dispose`](#api-083a1bf90329cf55) | Method |
| [`Import`](#api-84a2a58d05c5ef86) | Method |
| [`PrepareFrame`](#api-44a82307fe237591) | Method |
| [`Release`](#api-e267099c62bf8574) | Method |
| [`TryGetTexture`](#api-0c27716c6e85106c) | Method |
| [`count`](#api-c398e628954ea505) | Property |
| [`rejectedCount`](#api-638c2adb8c74819d) | Property |

## Type declaration

<a id="api-b53387e4a9e38c9e"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderTargetStore 317b0463dce893260c89f98ea8e20b094b71c85d1dff131a7f0dfbedc42ba18a -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderTargetStore : System.IDisposable
```

Owns persistent offscreen targets without exposing backend-native handles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderTargetStore.cs#L11).

## `#ctor`

<a id="api-c92b686c6e8772df"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderTargetStore.#ctor(Inno.Rendering.IRenderDevice,System.Int32) 2c8086c603fcbe4ced395d1a92a8b409c96aebcea81cf851c2b9757705c2161b -->

```csharp
public Inno.Rendering.Runtime.RenderTargetStore.RenderTargetStore(Inno.Rendering.IRenderDevice device, int capacity = 1024)
```

Creates a target registry for one device generation.

**Parameter `device`:** Device that owns persistent target resources.

**Parameter `capacity`:** Positive target and per-frame allocation capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderTargetStore.cs#L34).

## `Dispose`

<a id="api-083a1bf90329cf55"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderTargetStore.Dispose 6931cbda2dbc91d638c25dafa2182a2b3b0123e5721a48de82035c9b3816f88c -->

```csharp
public void Inno.Rendering.Runtime.RenderTargetStore.Dispose()
```

Queues all owned resources for device-safe destruction.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A backend resource is still active. Remaining resources stay owned until disposal is retried.

**Throws `System.AggregateException`:** Quiescent resources were all attempted, but one or more backend releases failed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderTargetStore.cs#L203).

## `Import`

<a id="api-84a2a58d05c5ef86"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderTargetStore.Import(Inno.Rendering.RenderGraphBuilder,Inno.Rendering.RenderTexture) f47008fce4f387b9bdc1f1992d6034faa91ea1ae0d27f6d67eec375aa70335a5 -->

```csharp
public Inno.Rendering.RenderTextureHandle Inno.Rendering.Runtime.RenderTargetStore.Import(Inno.Rendering.RenderGraphBuilder graph, Inno.Rendering.RenderTexture target)
```

Imports or creates one target in the current frame graph.

**Parameter `graph`:** Current frame graph builder.

**Parameter `target`:** Persistent target description.

**Returns:** A graph-scoped handle for the current target resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderTargetStore.cs#L65).

## `PrepareFrame`

<a id="api-44a82307fe237591"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderTargetStore.PrepareFrame ad0efa832762d55c2a49f0f0b07ca42e2eba216eb29eec3f3c7c3b2ece2e5a47 -->

```csharp
public void Inno.Rendering.Runtime.RenderTargetStore.PrepareFrame()
```

Advances queued target releases at a frame safety point.

**Constraints:** Retired textures remain active across one complete submitted frame so a
prepared UI or presentation packet cannot observe an invalidated handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderTargetStore.cs#L158).

## `Release`

<a id="api-e267099c62bf8574"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderTargetStore.Release(Inno.Rendering.RenderTexture) d04b28669de4aea989704e5e56915b83b7fc639db57e3b469dfc7f244c7112b5 -->

```csharp
public void Inno.Rendering.Runtime.RenderTargetStore.Release(Inno.Rendering.RenderTexture target)
```

Queues one target for frame-safe retirement.

**Parameter `target`:** Target no longer used by request producers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderTargetStore.cs#L143).

## `TryGetTexture`

<a id="api-0c27716c6e85106c"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderTargetStore.TryGetTexture(Inno.Rendering.RenderTexture,Inno.Rendering.PersistentTextureHandle@) 78869be08b353b8e9090d1535dfd7cc489f72261fd8835e01d90576b653b6893 -->

```csharp
public bool Inno.Rendering.Runtime.RenderTargetStore.TryGetTexture(Inno.Rendering.RenderTexture target, out Inno.Rendering.PersistentTextureHandle texture)
```

Tries to get the current opaque device texture for UI presentation.

**Parameter `target`:** Persistent target description.

**Parameter `texture`:** Receives a backend-neutral persistent handle.

**Returns:** `true` after a graph write to the current target revision has been recorded successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderTargetStore.cs#L106).

## `count`

<a id="api-c398e628954ea505"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderTargetStore.count 9ca49baf4b10a7daf598cb7d7e21adb757f981458a0c038b4998fd66bb7bb1b8 -->

```csharp
public int Inno.Rendering.Runtime.RenderTargetStore.count { get; }
```

Gets the number of retained offscreen targets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderTargetStore.cs#L46).

## `rejectedCount`

<a id="api-638c2adb8c74819d"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderTargetStore.rejectedCount f66414327958cba1e0bc73628ee9c7d623d228e633b3d49d5847d6200a7aa8f3 -->

```csharp
public long Inno.Rendering.Runtime.RenderTargetStore.rejectedCount { get; }
```

Gets target admissions rejected by finite capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/RenderTargetStore.cs#L51).
