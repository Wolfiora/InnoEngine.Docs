---
title: "RenderPassExecute`1"
description: "Reference for RenderPassExecute`1 in Inno.Rendering."
uid: api.inno.rendering.runtime-script.ac270e5f24174a67
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# ``RenderPassExecute`1``

This reference describes ``RenderPassExecute`1`` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d16b25ef0625bfd1) | Method |
| [`BeginInvoke`](#api-791a1b27e27a1c3c) | Method |
| [`EndInvoke`](#api-049b575462d372aa) | Method |
| [`Invoke`](#api-a2291435b0141a9b) | Method |

## Type declaration

<a id="api-ac270e5f24174a67"></a>
<!-- api: T:InnoEngine.Rendering.RenderPassExecute`1 25519d552111e0fadbe076cf108f3f4dba612b6850ef730ab938b425b788ff7f -->

```csharp
public delegate void InnoEngine.Rendering.RenderPassExecute<TPassData>(TPassData passData, InnoEngine.Rendering.RenderPassContext context)
```

Executes one frame-scoped pass payload.

**Type parameter `TPassData`:** Neutral pass payload type.

**Parameter `passData`:** Pass payload captured for this frame only.

**Parameter `context`:** Current pass execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L799).

## `#ctor`

<a id="api-d16b25ef0625bfd1"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassExecute`1.#ctor(System.Object,System.IntPtr) aa56fdb08361cb5bbbc6f8772760aea9eeb19a1b543d7303e5fe642306b69b9a -->

```csharp
public InnoEngine.Rendering.RenderPassExecute<TPassData>.RenderPassExecute(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L799).

## `BeginInvoke`

<a id="api-791a1b27e27a1c3c"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassExecute`1.BeginInvoke(`0,InnoEngine.Rendering.RenderPassContext,System.AsyncCallback,System.Object) cd45e302914bd0cf6fc5c23edf82aa0de149c818552b9029c9129a24e5d0b84e -->

```csharp
public virtual System.IAsyncResult InnoEngine.Rendering.RenderPassExecute<TPassData>.BeginInvoke(TPassData passData, InnoEngine.Rendering.RenderPassContext context, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L799).

## `EndInvoke`

<a id="api-049b575462d372aa"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassExecute`1.EndInvoke(System.IAsyncResult) 3340e644708b3b7abf0e579c336898d34ba0e56f440aa000df8bef4886ab530d -->

```csharp
public virtual void InnoEngine.Rendering.RenderPassExecute<TPassData>.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L799).

## `Invoke`

<a id="api-a2291435b0141a9b"></a>
<!-- api: M:InnoEngine.Rendering.RenderPassExecute`1.Invoke(`0,InnoEngine.Rendering.RenderPassContext) 85f190c59ff88eb5a21c91ec2a18cc71740571085d0df040458441fdbb00995b -->

```csharp
public virtual void InnoEngine.Rendering.RenderPassExecute<TPassData>.Invoke(TPassData passData, InnoEngine.Rendering.RenderPassContext context)
```

Executes one frame-scoped pass payload.

**Type parameter `TPassData`:** Neutral pass payload type.

**Parameter `passData`:** Pass payload captured for this frame only.

**Parameter `context`:** Current pass execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L799).
