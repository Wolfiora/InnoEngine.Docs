---
title: "SDLContext.RawApi — Method: ReadSurfacePixel"
description: "Exact Method: ReadSurfacePixel contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cd8806a5789e72f8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReadSurfacePixel

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReadSurfacePixel`

<a id="api-9e3d24331c209b93"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReadSurfacePixel(Inno.Native.Sdl3.SDLSurface*,System.Int32,System.Int32,System.Byte*,System.Byte*,System.Byte*,System.Byte*) 78d5d241e21dfe7c378f36dc97a0f2d3f48f9f81b5cfba84e7c5326a5cef8bf6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ReadSurfacePixel(Inno.Native.Sdl3.SDLSurface* surface, int x, int y, byte* r, byte* g, byte* b, byte* a)
```

Retrieves a single pixel from a surface.
This function prioritizes correctness over speed: it is suitable for unit
tests, but is not intended for use in a game engine.
Like SDL_GetRGBA, this uses the entire 0..255 range when converting color
components from pixel formats with less than 8 bits per RGB component.

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

**Parameter `r`:** a pointer filled in with the red channel, 0-255, or NULL to ignore
this channel.

**Parameter `g`:** a pointer filled in with the green channel, 0-255, or NULL to
ignore this channel.

**Parameter `b`:** a pointer filled in with the blue channel, 0-255, or NULL to
ignore this channel.

**Parameter `a`:** a pointer filled in with the alpha channel, 0-255, or NULL to
ignore this channel.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37748).
