---
title: "SDL — Method: Fmodf"
description: "Exact Method: Fmodf contracts in SDL."
uid: api.inno.native.sdl3.280bee3a69fed5c8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Fmodf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Fmodf`

<a id="api-804e2a771efcef9e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Fmodf(System.Single,System.Single) 2e5844774f49057163bfc6fcbf6226048d5ceb6ba3ce738bdff5f95acec4364b -->

```csharp
public static float Inno.Native.Sdl3.SDL.Fmodf(float x, float y)
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
This function operates on single-precision floating point values, use
SDL_fmod for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_fmod

**See also:** SDL_truncf

**See also:** SDL_modff

**See also:** SDL_ceilf

**See also:** SDL_floorf

**See also:** SDL_roundf

**See also:** SDL_lroundf

**Parameter `x`:** the numerator.

**Parameter `y`:** the denominator. Must not be 0.

**Returns:** the remainder of `x / y`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1244).
