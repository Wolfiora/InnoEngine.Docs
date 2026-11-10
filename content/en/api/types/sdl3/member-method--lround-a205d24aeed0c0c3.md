---
title: "SDL — Method: Lround"
description: "Exact Method: Lround contracts in SDL."
uid: api.inno.native.sdl3.a205d24aeed0c0c3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Lround

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Lround`

<a id="api-572d445120297631"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Lround(System.Double) b4b9266a105c0dea8e38f7b3b1ea28f824dc662c188b8abd96fac7304c306916 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Lround(double x)
```

Round `x` to the nearest integer representable as a long
Rounds `x` to the nearest integer. Values halfway between integers will be
rounded away from zero.
Domain: `-INF
<
= x
<
= INF`
Range: `MIN_LONG
<
= y
<
= MAX_LONG`
This function operates on double-precision floating point values, use
SDL_lroundf for single-precision floats. To get the result as a
floating-point type, use SDL_round.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_lroundf

**See also:** SDL_round

**See also:** SDL_floor

**See also:** SDL_ceil

**See also:** SDL_trunc

**Parameter `x`:** floating point value.

**Returns:** the nearest integer to `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L933).
