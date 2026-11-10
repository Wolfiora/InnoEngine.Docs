---
title: "SDLContext.RawApi — Method: MapRgb"
description: "Exact Method: MapRgb contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.440965361e65a9a7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MapRgb

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MapRgb`

<a id="api-bae59aa84ad96813"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MapRgb(Inno.Native.Sdl3.SDLPixelFormatDetails*,Inno.Native.Sdl3.SDLPalette*,System.Byte,System.Byte,System.Byte) 865c75984827a201367d5cb9cb2a0a46283f4dd7d0c162941b796802ad9fc053 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.MapRgb(Inno.Native.Sdl3.SDLPixelFormatDetails* format, Inno.Native.Sdl3.SDLPalette* palette, byte r, byte g, byte b)
```

Map an RGB triple to an opaque pixel value for a given pixel format.
This function maps the RGB color value to the specified pixel format and
returns the pixel value best approximating the given RGB color value for
the given pixel format.
If the format has a palette (8-bit) the index of the closest matching color
in the palette will be returned.
If the specified pixel format has an alpha component it will be returned as
all 1 bits (fully opaque).
If the pixel format bpp (color depth) is less than 32-bpp then the unused
upper bits of the return value can safely be ignored (e.g., with a 16-bpp
format the return value can be assigned to a Uint16, and similarly a Uint8
for an 8-bpp format).

**Thread safety:** It is safe to call this function from any thread, as long as
the palette is not modified.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPixelFormatDetails

**See also:** SDL_GetRGB

**See also:** SDL_MapRGBA

**See also:** SDL_MapSurfaceRGB

**Parameter `format`:** a pointer to SDL_PixelFormatDetails describing the pixel
format.

**Parameter `palette`:** an optional palette for indexed formats, may be NULL.

**Parameter `r`:** the red component of the pixel in the range 0-255.

**Parameter `g`:** the green component of the pixel in the range 0-255.

**Parameter `b`:** the blue component of the pixel in the range 0-255.

**Returns:** a pixel value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38274).
