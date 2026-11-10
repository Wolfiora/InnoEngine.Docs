---
title: "SDL — Method: Tan"
description: "Exact Method: Tan contracts in SDL."
uid: api.inno.native.sdl3.963bcdac8bafb782
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Tan

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Tan`

<a id="api-1e044dd1eae469c1"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Tan(System.Double) c178ba1cc6e8ffeaa88ca0405910e68ae2785b671ae363fcb93d13b945ef7982 -->

```csharp
public static double Inno.Native.Sdl3.SDL.Tan(double x)
```

Compute the tangent of `x`.
Domain: `-INF
<
= x
<
= INF`
Range: `-INF
<
= y
<
= INF`
This function operates on double-precision floating point values, use
SDL_tanf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_tanf

**See also:** SDL_sin

**See also:** SDL_cos

**See also:** SDL_atan

**See also:** SDL_atan2

**Parameter `x`:** floating point value, in radians.

**Returns:** tangent of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L116).
