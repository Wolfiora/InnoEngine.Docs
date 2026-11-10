---
title: "SDLContext — Method: Lroundf"
description: "Exact Method: Lroundf contracts in SDLContext."
uid: api.inno.native.sdl3.aa1bae1592b82b4c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Lroundf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Lroundf`

<a id="api-08bf205aff1376a3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Lroundf(System.Single) a73c8633a5edb4a09114fb9a87751ad6534e46ef374aeedc715d92c8c5f6ed11 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Lroundf(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12535).
