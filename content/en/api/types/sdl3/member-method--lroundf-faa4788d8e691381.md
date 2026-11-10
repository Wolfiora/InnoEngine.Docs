---
title: "SDLContext.RawApi — Method: Lroundf"
description: "Exact Method: Lroundf contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.faa4788d8e691381
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Lroundf

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Lroundf`

<a id="api-320a47d7b2aefa98"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Lroundf(System.Single) b4a84a9117716495ec51fb59d5ed349af1b1740b8401563ee4b79ae2bc6eefa6 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Lroundf(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23582).
