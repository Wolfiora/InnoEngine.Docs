---
title: "SDLContext — Method: Truncf"
description: "Exact Method: Truncf contracts in SDLContext."
uid: api.inno.native.sdl3.b9e5bea0907afd52
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Truncf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Truncf`

<a id="api-361360823456f0b5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Truncf(System.Single) 30127bb200eaef67b0ed9a282e34a6ddfc4694a54b285c9a13ab1eda223c8cee -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Truncf(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13041).
