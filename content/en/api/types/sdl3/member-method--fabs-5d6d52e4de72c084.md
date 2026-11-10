---
title: "SDL — Method: Fabs"
description: "Exact Method: Fabs contracts in SDL."
uid: api.inno.native.sdl3.5d6d52e4de72c084
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Fabs

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Fabs`

<a id="api-0b57a83c27dfb578"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Fabs(System.Double) 7fcb99b388f6e1741ddda27ba2f361db8e3504f6d77d072c1bc5dc3e11f33090 -->

```csharp
public static double Inno.Native.Sdl3.SDL.Fabs(double x)
```

Compute the absolute value of `x`
Domain: `-INF
<
= x
<
= INF`
Range: `0
<
= y
<
= INF`
This function operates on double-precision floating point values, use
SDL_fabsf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_fabsf

**Parameter `x`:** floating point value to use as the magnitude.

**Returns:** the absolute value of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L618).
