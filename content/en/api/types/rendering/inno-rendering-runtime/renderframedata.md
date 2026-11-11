---
title: "RenderFrameData"
description: "Reference for RenderFrameData in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.9879687249dc6b19
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderFrameData`

This reference describes `RenderFrameData` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e8e57884f62b6c47) | Method |
| [`Clear`](#api-0c91ca0c63a3af9e) | Method |
| [```Set``1```](#api-8ec70c9ed2ce4ee7) | Method |
| [```TryGet``1```](#api-7fa803dd9289994f) | Method |
| [`count`](#api-afe8e2fb1c27e36b) | Property |

## Type declaration

<a id="api-9879687249dc6b19"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderFrameData 847bb3f383f2ab639ffe76608df82dba80690e66c7d462a059457070e5a0e1bf -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderFrameData
```

Carries generation-scoped, frame-only payloads between a request producer and its pipeline.

**Constraints:** Values may use reloadable plugin types because a snapshot is retained only until the owning
render frame completes. Persistent configuration must use stable identifiers and serialized bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L16).

## `#ctor`

<a id="api-e8e57884f62b6c47"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderFrameData.#ctor d05f57188545c394a4d1f19aa00a579592305e0925fda20a8ae9955fddac2438 -->

```csharp
public Inno.Rendering.Runtime.RenderFrameData.RenderFrameData()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L16).

## `Clear`

<a id="api-0c91ca0c63a3af9e"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderFrameData.Clear 3bc2fc2323cbb3dfbda68f4f61025dbeb2610170bcd9c449600e9b3971bfbd1c -->

```csharp
public void Inno.Rendering.Runtime.RenderFrameData.Clear()
```

Removes all values before this object enters a submitted request.

**Throws `System.InvalidOperationException`:** Thrown after the data has entered a request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L92).

## ```Set``1```

<a id="api-8ec70c9ed2ce4ee7"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderFrameData.Set``1(Inno.Rendering.RenderDataChannelId,``0) 96605c9a000b07f88b1677bbfcf97a9fbe7f0421982c660f0816d12f910c52f9 -->

```csharp
public void Inno.Rendering.Runtime.RenderFrameData.Set<TValue>(Inno.Rendering.RenderDataChannelId channel, TValue value) where TValue : notnull
```

Adds or replaces one typed value in an open data channel.

**Type parameter `TValue`:** Frame-local payload type.

**Parameter `channel`:** Pipeline-defined stable data channel.

**Parameter `value`:** Value retained until the current frame completes.

**Throws `System.InvalidOperationException`:** Thrown after the data has entered a request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L41).

## ```TryGet``1```

<a id="api-7fa803dd9289994f"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderFrameData.TryGet``1(Inno.Rendering.RenderDataChannelId,``0@) 024e4367177ca0b0a0c8c13aa716b10c8b8af88c14a2766ee1bcc572d4660113 -->

```csharp
public bool Inno.Rendering.Runtime.RenderFrameData.TryGet<TValue>(Inno.Rendering.RenderDataChannelId channel, out TValue? value)
```

Tries to read one typed value from an open data channel.

**Type parameter `TValue`:** Expected frame-local payload type.

**Parameter `channel`:** Pipeline-defined stable data channel.

**Parameter `value`:** Receives the stored value when present.

**Returns:** `true` when the channel contains the exact requested type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L70).

## `count`

<a id="api-afe8e2fb1c27e36b"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderFrameData.count 97b7c29067e4bd821e68989e24b58dc9fbaeae9b1ae7563e3e5968fccc0c368d -->

```csharp
public int Inno.Rendering.Runtime.RenderFrameData.count { get; }
```

Gets the number of populated channel and value-type pairs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Requests/RenderFrameData.cs#L24).
