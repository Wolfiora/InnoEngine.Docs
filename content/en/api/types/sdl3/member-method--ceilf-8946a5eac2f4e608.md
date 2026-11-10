---
title: "SDL — Method: Ceilf"
description: "Exact Method: Ceilf contracts in SDL."
uid: api.inno.native.sdl3.8946a5eac2f4e608
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Ceilf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Ceilf`

<a id="api-963eb74d0f44d92e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Ceilf(System.Single) c34d7f615e401ba301c508e2b642717d77e39d8be3414eb6b65aea598438e067 -->

```csharp
public static float Inno.Native.Sdl3.SDL.Ceilf(float x)
```

Compute the ceiling of `x`.
The ceiling of `x` is the smallest integer `y` such that `y >= x`, i.e `x`
rounded up to the nearest integer.
Domain: `-INF
<
= x
<
= INF`
Range: `-INF
<
= y
<
= INF`, y integer
This function operates on single-precision floating point values, use
SDL_ceil for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ceil

**See also:** SDL_floorf

**See also:** SDL_truncf

**See also:** SDL_roundf

**See also:** SDL_lroundf

**Parameter `x`:** floating point value.

**Returns:** the ceiling of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3413).
