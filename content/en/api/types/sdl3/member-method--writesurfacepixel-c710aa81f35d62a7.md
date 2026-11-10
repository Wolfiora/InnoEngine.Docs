---
title: "SDLContext.RawApi — Method: WriteSurfacePixel"
description: "Exact Method: WriteSurfacePixel contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c710aa81f35d62a7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WriteSurfacePixel

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WriteSurfacePixel`

<a id="api-22c824ed7c7244e2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WriteSurfacePixel(Inno.Native.Sdl3.SDLSurface*,System.Int32,System.Int32,System.Byte,System.Byte,System.Byte,System.Byte) 4b102953198152e4f100538f6a2eb174566f8af32fcac03f9f074aa1a99bf24f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WriteSurfacePixel(Inno.Native.Sdl3.SDLSurface* surface, int x, int y, byte r, byte g, byte b, byte a)
```

Writes a single pixel to a surface.
This function prioritizes correctness over speed: it is suitable for unit
tests, but is not intended for use in a game engine.
Like SDL_MapRGBA, this uses the entire 0..255 range when converting color
components from pixel formats with less than 8 bits per RGB component.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `surface`:** the surface to write.

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

**Parameter `r`:** the red channel value, 0-255.

**Parameter `g`:** the green channel value, 0-255.

**Parameter `b`:** the blue channel value, 0-255.

**Parameter `a`:** the alpha channel value, 0-255.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20846).
