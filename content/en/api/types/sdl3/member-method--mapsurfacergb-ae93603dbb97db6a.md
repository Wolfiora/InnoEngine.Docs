---
title: "SDLContext.RawApi — Method: MapSurfaceRgb"
description: "Exact Method: MapSurfaceRgb contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ae93603dbb97db6a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MapSurfaceRgb

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MapSurfaceRgb`

<a id="api-3b846d65658b86ec"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MapSurfaceRgb(Inno.Native.Sdl3.SDLSurface*,System.Byte,System.Byte,System.Byte) fafdf4c1f4e24c4679b411291e08e2c6dc727b1db5f048d523c02e340b298f3e -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.MapSurfaceRgb(Inno.Native.Sdl3.SDLSurface* surface, byte r, byte g, byte b)
```

Map an RGB triple to an opaque pixel value for a surface.
This function maps the RGB color value to the specified pixel format and
returns the pixel value best approximating the given RGB color value for
the given pixel format.
If the surface has a palette, the index of the closest matching color in
the palette will be returned.
If the surface pixel format has an alpha component it will be returned as
all 1 bits (fully opaque).
If the pixel format bpp (color depth) is less than 32-bpp then the unused
upper bits of the return value can safely be ignored (e.g., with a 16-bpp
format the return value can be assigned to a Uint16, and similarly a Uint8
for an 8-bpp format).

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_MapSurfaceRGBA

**Parameter `surface`:** the surface to use for the pixel format and palette.

**Parameter `r`:** the red component of the pixel in the range 0-255.

**Parameter `g`:** the green component of the pixel in the range 0-255.

**Parameter `b`:** the blue component of the pixel in the range 0-255.

**Returns:** a pixel value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47204).
