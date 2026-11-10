---
title: "SDLContext — Method: Lround"
description: "Exact Method: Lround contracts in SDLContext."
uid: api.inno.native.sdl3.b946e9730aa29223
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Lround

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Lround`

<a id="api-11f8fd131ef19665"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Lround(System.Double) f8ef7c7bf51b89a6edb132fdfd7cd3946b14016e34c80f1695dfdc16d7f7d3e7 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Lround(double x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12482).
