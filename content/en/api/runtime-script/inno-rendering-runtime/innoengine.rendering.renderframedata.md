---
title: "RenderFrameData"
description: "Reference for RenderFrameData in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.1dd6844f250196da
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `RenderFrameData`

This reference describes `RenderFrameData` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1d5df93bd3776fed) | Method |
| [`Clear`](#api-287f29dfb383ad78) | Method |
| [```Set``1```](#api-628086902262a304) | Method |
| [```TryGet``1```](#api-2e8162f6f0a06ba3) | Method |
| [`count`](#api-875392ff101ec6e3) | Property |

## Type declaration

<a id="api-1dd6844f250196da"></a>
<!-- api: T:InnoEngine.Rendering.RenderFrameData 028d92944d90808d0fe643784da777aafdd7acb35623b0c673854780fc7067db -->

```csharp
public sealed class InnoEngine.Rendering.RenderFrameData
```

Carries generation-scoped, frame-only payloads between a request producer and its pipeline.

**Constraints:** Values may use reloadable plugin types because a snapshot is retained only until the owning
render frame completes. Persistent configuration must use stable identifiers and serialized bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L16).

## `#ctor`

<a id="api-1d5df93bd3776fed"></a>
<!-- api: M:InnoEngine.Rendering.RenderFrameData.#ctor d1e68bba17cf6c4c99af4cde803461ff03212a1d90a3a968d8468f8899dae70d -->

```csharp
public InnoEngine.Rendering.RenderFrameData.RenderFrameData()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L16).

## `Clear`

<a id="api-287f29dfb383ad78"></a>
<!-- api: M:InnoEngine.Rendering.RenderFrameData.Clear 0d673b48f976b865d211b625eba970b45ac3fac33604f9e8bc06daf5eab2c2e0 -->

```csharp
public void InnoEngine.Rendering.RenderFrameData.Clear()
```

Removes all values before this object enters a submitted request.

**Throws `System.InvalidOperationException`:** Thrown after the data has entered a request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L92).

## ```Set``1```

<a id="api-628086902262a304"></a>
<!-- api: M:InnoEngine.Rendering.RenderFrameData.Set``1(InnoEngine.Rendering.RenderDataChannelId,``0) c4646be37329ce9039148dd69f2a9c58d9d030b6a417eb5c748ea4128ca94a09 -->

```csharp
public void InnoEngine.Rendering.RenderFrameData.Set<TValue>(InnoEngine.Rendering.RenderDataChannelId channel, TValue value)
```

Adds or replaces one typed value in an open data channel.

**Type parameter `TValue`:** Frame-local payload type.

**Parameter `channel`:** Pipeline-defined stable data channel.

**Parameter `value`:** Value retained until the current frame completes.

**Throws `System.InvalidOperationException`:** Thrown after the data has entered a request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L41).

## ```TryGet``1```

<a id="api-2e8162f6f0a06ba3"></a>
<!-- api: M:InnoEngine.Rendering.RenderFrameData.TryGet``1(InnoEngine.Rendering.RenderDataChannelId,``0@) a0202d9d20f011f7cdef31a18a160495ca7a08ab1a87a0f1149cd3da4e1462d1 -->

```csharp
public bool InnoEngine.Rendering.RenderFrameData.TryGet<TValue>(InnoEngine.Rendering.RenderDataChannelId channel, out TValue? value)
```

Tries to read one typed value from an open data channel.

**Type parameter `TValue`:** Expected frame-local payload type.

**Parameter `channel`:** Pipeline-defined stable data channel.

**Parameter `value`:** Receives the stored value when present.

**Returns:** `true` when the channel contains the exact requested type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L70).

## `count`

<a id="api-875392ff101ec6e3"></a>
<!-- api: P:InnoEngine.Rendering.RenderFrameData.count c00e9b205f3d794bb697c46fd1011ca100b7012af3679a747dfc7487039071ce -->

```csharp
public int InnoEngine.Rendering.RenderFrameData.count { get; }
```

Gets the number of populated channel and value-type pairs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L24).
