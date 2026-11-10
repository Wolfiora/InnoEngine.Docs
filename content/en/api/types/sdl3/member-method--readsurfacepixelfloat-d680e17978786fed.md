---
title: "SDLContext.RawApi — Method: ReadSurfacePixelFloat"
description: "Exact Method: ReadSurfacePixelFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d680e17978786fed
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadSurfacePixelFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadSurfacePixelFloat`

<a id="api-9dd7417e01b5d0d7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadSurfacePixelFloat(Inno.Native.Sdl3.SDLSurface*,System.Int32,System.Int32,System.Single*,System.Single*,System.Single*,System.Single*) 08da507dafd395153947b11624e43df54e4ce4aac6f5ddd8f2ecd659e09495bd -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadSurfacePixelFloat(Inno.Native.Sdl3.SDLSurface* surface, int x, int y, float* r, float* g, float* b, float* a)
```

Retrieves a single pixel from a surface.
This function prioritizes correctness over speed: it is suitable for unit
tests, but is not intended for use in a game engine.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `surface`:** the surface to read.

**Parameter `x`:** the horizontal coordinate, 0
<
= x
<
width.

**Parameter `y`:** the vertical coordinate, 0
<
= y
<
height.

**Parameter `r`:** a pointer filled in with the red channel, normally in the range
0-1, or NULL to ignore this channel.

**Parameter `g`:** a pointer filled in with the green channel, normally in the range
0-1, or NULL to ignore this channel.

**Parameter `b`:** a pointer filled in with the blue channel, normally in the range
0-1, or NULL to ignore this channel.

**Parameter `a`:** a pointer filled in with the alpha channel, normally in the range
0-1, or NULL to ignore this channel.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31658).
