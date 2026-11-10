---
title: "SDL — Method: Floorf"
description: "Exact Method: Floorf contracts in SDL."
uid: api.inno.native.sdl3.8e56e99fadcfa851
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Floorf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Floorf`

<a id="api-6236831d124430a0"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Floorf(System.Single) 66c0a281cd4abaa72a4aaad141f9fedb65ed57c1a8adb2a79d971f43c807e005 -->

```csharp
public static float Inno.Native.Sdl3.SDL.Floorf(float x)
```

Compute the floor of `x`.
The floor of `x` is the largest integer `y` such that `y
<
= x`, i.e `x`
rounded down to the nearest integer.
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
SDL_floor for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_floor

**See also:** SDL_ceilf

**See also:** SDL_truncf

**See also:** SDL_roundf

**See also:** SDL_lroundf

**Parameter `x`:** floating point value.

**Returns:** the floor of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3674).
