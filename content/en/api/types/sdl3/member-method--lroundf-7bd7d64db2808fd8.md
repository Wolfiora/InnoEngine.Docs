---
title: "SDL — Method: Lroundf"
description: "Exact Method: Lroundf contracts in SDL."
uid: api.inno.native.sdl3.7bd7d64db2808fd8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Lroundf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Lroundf`

<a id="api-5105993d4d005264"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Lroundf(System.Single) fe866312af275d3c8f7f745f71d5aa0c9bc2df00855071b124febeb3bc707e38 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Lroundf(float x)
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
This function operates on single-precision floating point values, use
SDL_lround for double-precision floats. To get the result as a
floating-point type, use SDL_roundf.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_lround

**See also:** SDL_roundf

**See also:** SDL_floorf

**See also:** SDL_ceilf

**See also:** SDL_truncf

**Parameter `x`:** floating point value.

**Returns:** the nearest integer to `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L978).
