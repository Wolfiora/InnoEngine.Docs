---
title: "RenderStencilCompare"
description: "Reference for RenderStencilCompare in Inno.Rendering."
uid: api.inno.rendering.runtime-script.2c807dc78599b5b7
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderStencilCompare`

This reference describes `RenderStencilCompare` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Always`](#api-7da04f5ba3565536) | Field |
| [`Equal`](#api-98d776fbb49778b9) | Field |
| [`Greater`](#api-9449790578039b63) | Field |
| [`GreaterEqual`](#api-805031d205898070) | Field |
| [`Less`](#api-de638e75e82d947e) | Field |
| [`LessEqual`](#api-17e3977baf697099) | Field |
| [`Never`](#api-f594ea4d9c3708be) | Field |
| [`NotEqual`](#api-ad63a1983db2323a) | Field |

## Type declaration

<a id="api-2c807dc78599b5b7"></a>
<!-- api: T:InnoEngine.Rendering.RenderStencilCompare e9cfbbbeef0d7b5a40ce38f435bc12115ea24930288807995e4987ca65a9abe6 -->

```csharp
public enum InnoEngine.Rendering.RenderStencilCompare : int
```

Selects the comparison applied to stencil reference and stored values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L10).

## `Always`

<a id="api-7da04f5ba3565536"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilCompare.Always 5d1aba1db41326bdf6cd7edb68f2c076a00132288598544a2bfcb426270cd828 -->

```csharp
InnoEngine.Rendering.RenderStencilCompare.Always = 7
```

Always passes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L43).

## `Equal`

<a id="api-98d776fbb49778b9"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilCompare.Equal 164e0674998302ac571006770ae501ed6d09ac6943b6dea52d1800f4af8425f4 -->

```csharp
InnoEngine.Rendering.RenderStencilCompare.Equal = 2
```

Passes when values are equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L23).

## `Greater`

<a id="api-9449790578039b63"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilCompare.Greater c535b8a9b3b62db1800ee7da51475a397b4192d0c2dac3c2fc304e892ae1a7f5 -->

```csharp
InnoEngine.Rendering.RenderStencilCompare.Greater = 4
```

Passes when reference is greater.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L31).

## `GreaterEqual`

<a id="api-805031d205898070"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilCompare.GreaterEqual 0d0102075cf81fe72d8e896bea451e8f28d5256f4531cbb03c9aa43558ee3b8c -->

```csharp
InnoEngine.Rendering.RenderStencilCompare.GreaterEqual = 6
```

Passes when reference is greater or equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L39).

## `Less`

<a id="api-de638e75e82d947e"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilCompare.Less 3c8b2ff7984f72c046c1490e2c27d2246d4c6ce0ed7301d34f3ec70102186bca -->

```csharp
InnoEngine.Rendering.RenderStencilCompare.Less = 1
```

Passes when reference is smaller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L19).

## `LessEqual`

<a id="api-17e3977baf697099"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilCompare.LessEqual 1d68a44aa08849fadbba64185794bcf1d3929d11aec0dcdae40bc38ca2ec9e96 -->

```csharp
InnoEngine.Rendering.RenderStencilCompare.LessEqual = 3
```

Passes when reference is smaller or equal.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L27).

## `Never`

<a id="api-f594ea4d9c3708be"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilCompare.Never 43ba8e85b8dcef2a5b47ea24ca9db8f29b7b76fe68a14b9a7ebead49c81bce24 -->

```csharp
InnoEngine.Rendering.RenderStencilCompare.Never = 0
```

Never passes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L15).

## `NotEqual`

<a id="api-ad63a1983db2323a"></a>
<!-- api: F:InnoEngine.Rendering.RenderStencilCompare.NotEqual f7be28facbad120475771cc8e3d335be66111bb83e0f9c7d9107bce217582347 -->

```csharp
InnoEngine.Rendering.RenderStencilCompare.NotEqual = 5
```

Passes when values differ.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderStencilState.cs#L35).
