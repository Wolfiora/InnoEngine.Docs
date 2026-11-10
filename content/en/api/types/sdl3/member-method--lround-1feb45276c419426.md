---
title: "SDLContext.RawApi — Method: Lround"
description: "Exact Method: Lround contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1feb45276c419426
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Lround

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Lround`

<a id="api-c87cb991719772e6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Lround(System.Double) dfb7706cf578e6d85e6703bb52e3b080c05741126590738bcafad7925f781775 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Lround(double x)
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
This function operates on double-precision floating point values, use
SDL_lroundf for single-precision floats. To get the result as a
floating-point type, use SDL_round.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_lroundf

**See also:** SDL_round

**See also:** SDL_floor

**See also:** SDL_ceil

**See also:** SDL_trunc

**Parameter `x`:** floating point value.

**Returns:** the nearest integer to `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23390).
