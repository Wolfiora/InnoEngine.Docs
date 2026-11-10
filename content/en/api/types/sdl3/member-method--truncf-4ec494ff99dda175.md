---
title: "SDLContext.RawApi — Method: Truncf"
description: "Exact Method: Truncf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4ec494ff99dda175
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Truncf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Truncf`

<a id="api-be8ec2d8efe47f79"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Truncf(System.Single) 93c13248577ad7ea1fe8f2911d467d18d5b774b1feeea7a7f1a92bed5fa3d525 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Truncf(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27623).
