---
title: "SDL — Method: Atan2f"
description: "Exact Method: Atan2f contracts in SDL."
uid: api.inno.native.sdl3.e303659f0244c88c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Atan2f

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Atan2f`

<a id="api-d34f4d0f60f0a5d4"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Atan2f(System.Single,System.Single) e4e4bedc104f2edd0478a0b91452f71ebca6920876cc34d59cd041ee30b42d71 -->

```csharp
public static float Inno.Native.Sdl3.SDL.Atan2f(float y, float x)
```

Compute the arc tangent of `y / x`, using the signs of x and y to adjust
the result's quadrant.
The definition of `z = atan2(x, y)` is `y = x tan(z)`, where the quadrant
of z is determined based on the signs of x and y.
Domain: `-INF
<
= x
<
= INF`, `-INF
<
= y
<
= INF`
Range: `-Pi
<
= y
<
= Pi`
This function operates on single-precision floating point values, use
SDL_atan2 for double-precision floats.
To calculate the arc tangent of a single value, use SDL_atanf.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atan2

**See also:** SDL_atan

**See also:** SDL_tan

**Parameter `y`:** floating point value of the numerator (y coordinate).

**Parameter `x`:** floating point value of the denominator (x coordinate).

**Returns:** arc tangent of of `y / x` in radians, or, if `x = 0`, either
`-Pi/2`, `0`, or `Pi/2`, depending on the value of `y`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2190).
