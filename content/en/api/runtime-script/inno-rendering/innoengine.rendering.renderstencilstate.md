---
title: "RenderStencilState"
description: "Reference for RenderStencilState in Inno.Rendering."
uid: api.inno.rendering.runtime-script.a4162613f7605e31
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderStencilState`

This reference describes `RenderStencilState` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e91047ab2ef2d7b7) | Method |
| [`#ctor`](#api-4431bde9d3a6c661) | Method |
| [`back`](#api-120365d38086f6ed) | Property |
| [`disabled`](#api-8225af039651777a) | Property |
| [`enabled`](#api-faa89624760730e7) | Property |
| [`front`](#api-95cd121547db2a63) | Property |
| [`readMask`](#api-889239091d888b8b) | Property |
| [`reference`](#api-8d1671c13a8efab3) | Property |
| [`writeMask`](#api-6307ba6618759bea) | Property |

## Type declaration

<a id="api-a4162613f7605e31"></a>
<!-- api: T:InnoEngine.Rendering.RenderStencilState 5f9be07c64a6759a32b4b6c651112e6c8ced4677595943c6d93ff54e54ee4e90 -->

```csharp
public sealed class InnoEngine.Rendering.RenderStencilState
```

Describes complete two-sided stencil state for one draw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L141).

## `#ctor`

<a id="api-e91047ab2ef2d7b7"></a>
<!-- api: M:InnoEngine.Rendering.RenderStencilState.#ctor 6f25b2d6412b09831e40d7cd3b433d48c239ad7979727fc9ece8f6f732c7eb8b -->

```csharp
public InnoEngine.Rendering.RenderStencilState.RenderStencilState()
```

Creates the default disabled stencil state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L146).

## `#ctor`

<a id="api-4431bde9d3a6c661"></a>
<!-- api: M:InnoEngine.Rendering.RenderStencilState.#ctor(System.Boolean,System.Byte,System.Byte,System.Byte,InnoEngine.Rendering.RenderStencilFaceState,InnoEngine.Rendering.RenderStencilFaceState) 80e8cbc50e53a75e70a8279fb25bf73356c4940d5eca5db43302e6090ae9177a -->

```csharp
public InnoEngine.Rendering.RenderStencilState.RenderStencilState(bool enabled, byte reference, byte readMask, byte writeMask, InnoEngine.Rendering.RenderStencilFaceState front, InnoEngine.Rendering.RenderStencilFaceState back)
```

Creates a complete immutable stencil configuration without relying on init-only setters.

**Parameter `enabled`:** Whether stencil testing and updates are active.

**Parameter `reference`:** Eight-bit stencil reference value.

**Parameter `readMask`:** Mask applied while reading stored stencil.

**Parameter `writeMask`:** Mask applied while writing stencil.

**Parameter `front`:** Front-face stencil behavior.

**Parameter `back`:** Back-face stencil behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L171).

## `back`

<a id="api-120365d38086f6ed"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilState.back 5c1448d59087eedb001751cfeba46d288c67608f245afcd5f8220f659cd9ac53 -->

```csharp
public InnoEngine.Rendering.RenderStencilFaceState InnoEngine.Rendering.RenderStencilState.back { get; set; }
```

Gets back-face stencil behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L224).

## `disabled`

<a id="api-8225af039651777a"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilState.disabled a124a6746592f9cf0c2df0f54eba4f45e1ca687a0b2be57654084d631d2bee17 -->

```csharp
public static InnoEngine.Rendering.RenderStencilState InnoEngine.Rendering.RenderStencilState.disabled { get; }
```

Gets disabled stencil state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L190).

## `enabled`

<a id="api-faa89624760730e7"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilState.enabled 0d8223fc7e5f6bcc6cf40b8bba7b92db26dd70c46286b9ae643d21cf58c7c057 -->

```csharp
public bool InnoEngine.Rendering.RenderStencilState.enabled { get; set; }
```

Gets whether stencil testing and updates are active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L195).

## `front`

<a id="api-95cd121547db2a63"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilState.front 4d210df9af79dfec021c5fb1e127eee7668e3f61ab4c4d4a79ff29e5901e1cf9 -->

```csharp
public InnoEngine.Rendering.RenderStencilFaceState InnoEngine.Rendering.RenderStencilState.front { get; set; }
```

Gets front-face stencil behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L215).

## `readMask`

<a id="api-889239091d888b8b"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilState.readMask e66f84989b2de1878ed4902aaa755a3c7346f55a247121a375b56878504f64e7 -->

```csharp
public byte InnoEngine.Rendering.RenderStencilState.readMask { get; set; }
```

Gets the mask applied while reading stored stencil.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L205).

## `reference`

<a id="api-8d1671c13a8efab3"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilState.reference 2e65020a0d8ee8343dd988c5f7ccfaf9c422686eda0fd8300f2a2ebd5c24c2c2 -->

```csharp
public byte InnoEngine.Rendering.RenderStencilState.reference { get; set; }
```

Gets the eight-bit stencil reference value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L200).

## `writeMask`

<a id="api-6307ba6618759bea"></a>
<!-- api: P:InnoEngine.Rendering.RenderStencilState.writeMask 1aa296365b58eed4fcba43358157f6c4a79948ad3d33f7cc23326bdab05dca9b -->

```csharp
public byte InnoEngine.Rendering.RenderStencilState.writeMask { get; set; }
```

Gets the mask applied while writing stencil.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L210).
