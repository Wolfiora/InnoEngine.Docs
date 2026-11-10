---
title: "SDL — Method: Sin"
description: "Exact Method: Sin contracts in SDL."
uid: api.inno.native.sdl3.ef13ec0ea1e730f6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Sin

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Sin`

<a id="api-47fc776f38206a1f"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Sin(System.Double) 1c4ec805c9acbd5aef44cdf581ed3b47e362528081caedcc68119f1e72f3c87b -->

```csharp
public static double Inno.Native.Sdl3.SDL.Sin(double x)
```

Compute the sine of `x`.
Domain: `-INF
<
= x
<
= INF`
Range: `-1
<
= y
<
= 1`
This function operates on double-precision floating point values, use
SDL_sinf for single-precision floats.
This function may use a different approximation across different versions,
platforms and configurations. i.e, it can return a different value given
the same input on different machines or operating systems, or if SDL is
updated.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_sinf

**See also:** SDL_asin

**See also:** SDL_cos

**Parameter `x`:** floating point value, in radians.

**Returns:** sine of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4035).
