---
title: "SDL — Method: Trunc"
description: "Exact Method: Trunc contracts in SDL."
uid: api.inno.native.sdl3.5a23e5ce75173cb5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Trunc

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Trunc`

<a id="api-565805694952d09e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Trunc(System.Double) c081e30c8cf13747164e5381b9ce3ecc76c19cdab383fb054f702a29026f5aaa -->

```csharp
public static double Inno.Native.Sdl3.SDL.Trunc(double x)
```

Truncate `x` to an integer.
Rounds `x` to the next closest integer to 0. This is equivalent to removing
the fractional part of `x`, leaving only the integer part.
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
This function operates on double-precision floating point values, use
SDL_truncf for single-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_truncf

**See also:** SDL_fmod

**See also:** SDL_ceil

**See also:** SDL_floor

**See also:** SDL_round

**See also:** SDL_lround

**Parameter `x`:** floating point value.

**Returns:** `x` truncated to an integer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L533).
