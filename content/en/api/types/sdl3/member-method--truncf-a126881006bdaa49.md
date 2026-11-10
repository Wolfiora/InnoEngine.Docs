---
title: "SDL — Method: Truncf"
description: "Exact Method: Truncf contracts in SDL."
uid: api.inno.native.sdl3.a126881006bdaa49
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Truncf

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Truncf`

<a id="api-d9cf5320c39801e6"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Truncf(System.Single) 2ddaaf8f6b8f7943cf84d7d7ecf4b29cf4a84b4928daf252ea02211f802b3e97 -->

```csharp
public static float Inno.Native.Sdl3.SDL.Truncf(float x)
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
This function operates on single-precision floating point values, use
SDL_trunc for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_trunc

**See also:** SDL_fmodf

**See also:** SDL_ceilf

**See also:** SDL_floorf

**See also:** SDL_roundf

**See also:** SDL_lroundf

**Parameter `x`:** floating point value.

**Returns:** `x` truncated to an integer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1388).
