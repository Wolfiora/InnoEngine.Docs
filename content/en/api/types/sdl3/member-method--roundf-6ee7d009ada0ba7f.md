---
title: "SDLContext — Method: Roundf"
description: "Exact Method: Roundf contracts in SDLContext."
uid: api.inno.native.sdl3.6ee7d009ada0ba7f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Roundf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Roundf`

<a id="api-df65f10c105d1382"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Roundf(System.Single) 830520bcd7f5c736219ee2e46cc2c0dde2568b8e9504578a2870e364aed88ce4 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.Roundf(float x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11643).
