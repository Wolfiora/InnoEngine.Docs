---
title: "RenderStencilState"
description: "Reference for RenderStencilState in Inno.Rendering."
uid: api.inno.rendering.22b863f1d90f449e
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderStencilState`

This reference describes `RenderStencilState` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-06e4e2679dea647d) | Method |
| [`#ctor`](#api-386a69aea1650a90) | Method |
| [`back`](#api-735b183371d193eb) | Property |
| [`disabled`](#api-650c98aeb2b21fed) | Property |
| [`enabled`](#api-ec87f5a4b38b9dc3) | Property |
| [`front`](#api-74e29448a1c7095c) | Property |
| [`readMask`](#api-4e7073fd32a31be4) | Property |
| [`reference`](#api-cffda2a63e36bbb4) | Property |
| [`writeMask`](#api-171a6d144cf9bf0f) | Property |

## Type declaration

<a id="api-22b863f1d90f449e"></a>
<!-- api: T:Inno.Rendering.RenderStencilState 19cf5c61912f17f085bf6ef808e5f7a89ed2f9f663d9cfe260cfafd3a8548a50 -->

```csharp
public sealed class Inno.Rendering.RenderStencilState
```

Describes complete two-sided stencil state for one draw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L141).

## `#ctor`

<a id="api-06e4e2679dea647d"></a>
<!-- api: M:Inno.Rendering.RenderStencilState.#ctor 9e6f42c8d1a5b8fa8e63075e6f9e2b935d27eaabacc7f2c110da501d71803ffd -->

```csharp
public Inno.Rendering.RenderStencilState.RenderStencilState()
```

Creates the default disabled stencil state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L146).

## `#ctor`

<a id="api-386a69aea1650a90"></a>
<!-- api: M:Inno.Rendering.RenderStencilState.#ctor(System.Boolean,System.Byte,System.Byte,System.Byte,Inno.Rendering.RenderStencilFaceState,Inno.Rendering.RenderStencilFaceState) 586a348babdd26e3280833ffc88e5c7f084032c3de61515274752f16b5fcbade -->

```csharp
public Inno.Rendering.RenderStencilState.RenderStencilState(bool enabled, byte reference, byte readMask, byte writeMask, Inno.Rendering.RenderStencilFaceState front, Inno.Rendering.RenderStencilFaceState back)
```

Creates a complete immutable stencil configuration without relying on init-only setters.

**Parameter `enabled`:** Whether stencil testing and updates are active.

**Parameter `reference`:** Eight-bit stencil reference value.

**Parameter `readMask`:** Mask applied while reading stored stencil.

**Parameter `writeMask`:** Mask applied while writing stencil.

**Parameter `front`:** Front-face stencil behavior.

**Parameter `back`:** Back-face stencil behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L171).

## `back`

<a id="api-735b183371d193eb"></a>
<!-- api: P:Inno.Rendering.RenderStencilState.back e201b3ee4bf8355fdea7ef14d3567a2f88055d00a8d8cc46677c462c92549106 -->

```csharp
public Inno.Rendering.RenderStencilFaceState Inno.Rendering.RenderStencilState.back { get; init; }
```

Gets back-face stencil behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L224).

## `disabled`

<a id="api-650c98aeb2b21fed"></a>
<!-- api: P:Inno.Rendering.RenderStencilState.disabled edf6dd5da8d3fd1115e1ba5b41898ff64e7f9d3fd657738e722f34e4fdff18bd -->

```csharp
public static Inno.Rendering.RenderStencilState Inno.Rendering.RenderStencilState.disabled { get; }
```

Gets disabled stencil state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L190).

## `enabled`

<a id="api-ec87f5a4b38b9dc3"></a>
<!-- api: P:Inno.Rendering.RenderStencilState.enabled 88734e7d2eb30dea6e1d1dc62fd9f13d4f35c10291e89b780f98684f7b3388bc -->

```csharp
public bool Inno.Rendering.RenderStencilState.enabled { get; init; }
```

Gets whether stencil testing and updates are active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L195).

## `front`

<a id="api-74e29448a1c7095c"></a>
<!-- api: P:Inno.Rendering.RenderStencilState.front 230b958780409474ebeb9a1c99b329f502bf07c52f8bf93fc6cc5cf2ef41aa23 -->

```csharp
public Inno.Rendering.RenderStencilFaceState Inno.Rendering.RenderStencilState.front { get; init; }
```

Gets front-face stencil behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L215).

## `readMask`

<a id="api-4e7073fd32a31be4"></a>
<!-- api: P:Inno.Rendering.RenderStencilState.readMask f9fc359949bb8a5f1a1becd037cacbe5f5ac1319d80888b0d694feac513d5799 -->

```csharp
public byte Inno.Rendering.RenderStencilState.readMask { get; init; }
```

Gets the mask applied while reading stored stencil.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L205).

## `reference`

<a id="api-cffda2a63e36bbb4"></a>
<!-- api: P:Inno.Rendering.RenderStencilState.reference 22f2e7e5f7f5ff06bd4f60f0db5dbab54ff24f341c70815ec10e673212e2eee8 -->

```csharp
public byte Inno.Rendering.RenderStencilState.reference { get; init; }
```

Gets the eight-bit stencil reference value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L200).

## `writeMask`

<a id="api-171a6d144cf9bf0f"></a>
<!-- api: P:Inno.Rendering.RenderStencilState.writeMask 64bee10bf0cd27cb0c700a0f016315a894969b1b4de696823868ad01a709b736 -->

```csharp
public byte Inno.Rendering.RenderStencilState.writeMask { get; init; }
```

Gets the mask applied while writing stencil.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L210).
