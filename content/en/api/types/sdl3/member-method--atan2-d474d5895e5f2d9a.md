---
title: "SDL — Method: Atan2"
description: "Exact Method: Atan2 contracts in SDL."
uid: api.inno.native.sdl3.d474d5895e5f2d9a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Atan2

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Atan2`

<a id="api-1f8bbae43365bf17"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Atan2(System.Double,System.Double) dd3720595102e011b600fdaaed475733be77221143dd3f2c49a9b71ec5eb1a58 -->

```csharp
public static double Inno.Native.Sdl3.SDL.Atan2(double y, double x)
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
= z
<
= Pi`
This function operates on double-precision floating point values, use
SDL_atan2f for single-precision floats.
To calculate the arc tangent of a single value, use SDL_atan.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atan2f

**See also:** SDL_atan

**See also:** SDL_tan

**Parameter `y`:** floating point value of the numerator (y coordinate).

**Parameter `x`:** floating point value of the denominator (x coordinate).

**Returns:** arc tangent of `y / x` in radians, or, if `x = 0`, either `-Pi/2`,
`0`, or `Pi/2`, depending on the value of `y`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3015).
