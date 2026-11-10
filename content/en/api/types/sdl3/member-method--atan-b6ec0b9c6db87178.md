---
title: "SDL — Method: Atan"
description: "Exact Method: Atan contracts in SDL."
uid: api.inno.native.sdl3.b6ec0b9c6db87178
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Atan

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Atan`

<a id="api-c0341e8defef042e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Atan(System.Double) d50b1b4720cce03070ae57bbe9c60a8fc407a878321340a1b989f22e26f810c1 -->

```csharp
public static double Inno.Native.Sdl3.SDL.Atan(double x)
```

Compute the arc tangent of `x`.
The definition of `y = atan(x)` is `x = tan(y)`.
Domain: `-INF
<
= x
<
= INF`
Range: `-Pi/2
<
= y
<
= Pi/2`
This function operates on double-precision floating point values, use
SDL_atanf for single-precision floats.
To calculate the arc tangent of y / x, use SDL_atan2.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_atanf

**See also:** SDL_atan2

**See also:** SDL_tan

**Parameter `x`:** floating point value.

**Returns:** arc tangent of of `x` in radians, or 0 if `x = 0`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2672).
