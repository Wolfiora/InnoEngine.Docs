---
title: "SDL — Method: Roundf"
description: "Exact Method: Roundf contracts in SDL."
uid: api.inno.native.sdl3.79906d7ee2d08d3a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Roundf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Roundf`

<a id="api-245ae8c3e61391a9"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Roundf(System.Single) f9405d2fce77133550cbcbe5128d5c09af553d8dc352e0f5b202487c92c01ae2 -->

```csharp
public static float Inno.Native.Sdl3.SDL.Roundf(float x)
```

Round `x` to the nearest integer.
Rounds `x` to the nearest integer. Values halfway between integers will be
rounded away from zero.
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
SDL_round for double-precision floats. To get the result as an integer
type, use SDL_lroundf.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_round

**See also:** SDL_lroundf

**See also:** SDL_floorf

**See also:** SDL_ceilf

**See also:** SDL_truncf

**Parameter `x`:** floating point value.

**Returns:** the nearest integer to `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L255).
