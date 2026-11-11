---
title: "RenderPassExecute`1"
description: "Reference for RenderPassExecute`1 in Inno.Rendering."
uid: api.inno.rendering.78ccd21f916e12c0
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# ``RenderPassExecute`1``

This reference describes ``RenderPassExecute`1`` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.MulticastDelegate`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a1488e71533e2694) | Method |
| [`BeginInvoke`](#api-8cd0df2dd6182c9c) | Method |
| [`EndInvoke`](#api-305cc041aaadd862) | Method |
| [`Invoke`](#api-3e74abbd2882c734) | Method |

## Type declaration

<a id="api-78ccd21f916e12c0"></a>
<!-- api: T:Inno.Rendering.RenderPassExecute`1 85d075ba2cc8011c6432795b434cf657d699e73565b0b8f9eb65663c427231c1 -->

```csharp
public delegate void Inno.Rendering.RenderPassExecute<TPassData>(TPassData passData, Inno.Rendering.RenderPassContext context)
```

Executes one frame-scoped pass payload.

**Type parameter `TPassData`:** Neutral pass payload type.

**Parameter `passData`:** Pass payload captured for this frame only.

**Parameter `context`:** Current pass execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L799).

## `#ctor`

<a id="api-a1488e71533e2694"></a>
<!-- api: M:Inno.Rendering.RenderPassExecute`1.#ctor(System.Object,System.IntPtr) a92060b26e3c191a4b1f279dc07aabbebdb4c5cbf646fc63393cf043bf6581ca -->

```csharp
public Inno.Rendering.RenderPassExecute<TPassData>.RenderPassExecute(object @object, nint method)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L799).

## `BeginInvoke`

<a id="api-8cd0df2dd6182c9c"></a>
<!-- api: M:Inno.Rendering.RenderPassExecute`1.BeginInvoke(`0,Inno.Rendering.RenderPassContext,System.AsyncCallback,System.Object) 2236e15f4087b9f080751339e594b1ddffb4106eaed2a308f436803f20590b6d -->

```csharp
public virtual System.IAsyncResult Inno.Rendering.RenderPassExecute<TPassData>.BeginInvoke(TPassData passData, Inno.Rendering.RenderPassContext context, System.AsyncCallback callback, object @object)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L799).

## `EndInvoke`

<a id="api-305cc041aaadd862"></a>
<!-- api: M:Inno.Rendering.RenderPassExecute`1.EndInvoke(System.IAsyncResult) d8d37f7ef25024c6b32673915e847d070c5bb7f5990b37f50a8c5a18921d2179 -->

```csharp
public virtual void Inno.Rendering.RenderPassExecute<TPassData>.EndInvoke(System.IAsyncResult result)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L799).

## `Invoke`

<a id="api-3e74abbd2882c734"></a>
<!-- api: M:Inno.Rendering.RenderPassExecute`1.Invoke(`0,Inno.Rendering.RenderPassContext) 2b2616b662d80d5dea9130b1d6eb6e2f2be69499be6441457ba93e2524c91529 -->

```csharp
public virtual void Inno.Rendering.RenderPassExecute<TPassData>.Invoke(TPassData passData, Inno.Rendering.RenderPassContext context)
```

Executes one frame-scoped pass payload.

**Type parameter `TPassData`:** Neutral pass payload type.

**Parameter `passData`:** Pass payload captured for this frame only.

**Parameter `context`:** Current pass execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderCommands.cs#L799).
