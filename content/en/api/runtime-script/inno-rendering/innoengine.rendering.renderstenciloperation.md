---
title: "RenderStencilOperation"
description: "Reference for RenderStencilOperation in Inno.Rendering."
uid: api.inno.rendering.runtime-script.e667b8268dd96310
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderStencilOperation`

This reference describes `RenderStencilOperation` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`DecrementClamp`](#api-b0f6bbb98671c72e) | Field |
| [`DecrementWrap`](#api-abec9e427ba6b202) | Field |
| [`IncrementClamp`](#api-5573a82a1b9f257b) | Field |
| [`IncrementWrap`](#api-1c5b0daf3e0d4125) | Field |
| [`Invert`](#api-569e00be40f7deab) | Field |
| [`Keep`](#api-16766f9bb606b630) | Field |
| [`Replace`](#api-7beb3ed18cab7305) | Field |
| [`Zero`](#api-b43752b3560f020b) | Field |

## Type declaration

<a id="api-e667b8268dd96310"></a>
<!-- api: T:InnoEngine.Rendering.RenderStencilOperation 4fcc2affd4b4cd88a0116aa9c75e26c1ac165355da30551a6faf50eb2f48bcd2 -->

```csharp
public enum InnoEngine.Rendering.RenderStencilOperation : int
```

Selects the update applied to a stencil value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L49).

## `DecrementClamp`

<a id="api-b0f6bbb98671c72e"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilOperation.DecrementClamp abb43736f7bf28049f53a6fe44395ba6b69c6d16abfeca7c96c4d101e5b57d2c -->

```csharp
InnoEngine.Rendering.RenderStencilOperation.DecrementClamp = 5
```

Decrements and clamps the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L74).

## `DecrementWrap`

<a id="api-abec9e427ba6b202"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilOperation.DecrementWrap abad95f79677c2aa5f7b4b259733aa20014d54a365225e04bd27644c91f6973f -->

```csharp
InnoEngine.Rendering.RenderStencilOperation.DecrementWrap = 6
```

Decrements and wraps the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L78).

## `IncrementClamp`

<a id="api-5573a82a1b9f257b"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilOperation.IncrementClamp 1bc54158b8296c55ef532cdb9bb37a0aa3b0b76d83b01d68fd4967c4a9fed209 -->

```csharp
InnoEngine.Rendering.RenderStencilOperation.IncrementClamp = 3
```

Increments and clamps the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L66).

## `IncrementWrap`

<a id="api-1c5b0daf3e0d4125"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilOperation.IncrementWrap 16fdb0422ec8123276fad791f865f8faf029be274d0f28db009229164595eb9d -->

```csharp
InnoEngine.Rendering.RenderStencilOperation.IncrementWrap = 4
```

Increments and wraps the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L70).

## `Invert`

<a id="api-569e00be40f7deab"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilOperation.Invert 15f5597cbcf47a2cc83134f378e47fce0a6efe17f9856bd28abb02bcb8653357 -->

```csharp
InnoEngine.Rendering.RenderStencilOperation.Invert = 7
```

Bitwise-inverts the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L82).

## `Keep`

<a id="api-16766f9bb606b630"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilOperation.Keep 8d177ec60f59ef5c40fc7b54cece4b51b7f506fdd44d1efe8e60dc3e31855191 -->

```csharp
InnoEngine.Rendering.RenderStencilOperation.Keep = 0
```

Keeps the stored value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L54).

## `Replace`

<a id="api-7beb3ed18cab7305"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilOperation.Replace f27b57da670561cd7054b776d689737796f0a05414c5ec885abcb8da796a7f73 -->

```csharp
InnoEngine.Rendering.RenderStencilOperation.Replace = 2
```

Replaces the stored value with the reference.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L62).

## `Zero`

<a id="api-b43752b3560f020b"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilOperation.Zero ff6623bbe0f230ef01f489e8f3640a70c70bbcfb6881b0cc0dd2352a73e54fb6 -->

```csharp
InnoEngine.Rendering.RenderStencilOperation.Zero = 1
```

Clears the stored value to zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L58).
