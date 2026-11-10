---
title: "SDL — Method: Fmod"
description: "Exact Method: Fmod contracts in SDL."
uid: api.inno.native.sdl3.770bf7126a20a23b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Fmod

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Fmod`

<a id="api-63c922dd60d46477"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Fmod(System.Double,System.Double) ba0465741195fe551efc55e9a41385ab14bdee83321dd976fc66d80972c97f84 -->

```csharp
public static double Inno.Native.Sdl3.SDL.Fmod(double x, double y)
```

Return the floating-point remainder of `x / y`
Divides `x` by `y`, and returns the remainder.
Domain: `-INF
<
= x
<
= INF`, `-INF
<
= y
<
= INF`, `y != 0`
Range: `-y
<
= z
<
= y`
This function operates on double-precision floating point values, use
SDL_fmodf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_fmodf

**See also:** SDL_modf

**See also:** SDL_trunc

**See also:** SDL_ceil

**See also:** SDL_floor

**See also:** SDL_round

**See also:** SDL_lround

**Parameter `x`:** the numerator.

**Parameter `y`:** the denominator. Must not be 0.

**Returns:** the remainder of `x / y`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2383).
