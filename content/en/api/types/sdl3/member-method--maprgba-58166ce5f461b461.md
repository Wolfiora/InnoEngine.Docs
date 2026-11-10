---
title: "SDLContext.RawApi — Method: MapRgba"
description: "Exact Method: MapRgba contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.58166ce5f461b461
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MapRgba

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MapRgba`

<a id="api-fd19175667bd46b8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MapRgba(Inno.Native.Sdl3.SDLPixelFormatDetails*,Inno.Native.Sdl3.SDLPalette*,System.Byte,System.Byte,System.Byte,System.Byte) e0d7f8a7189f363589cd4382af7017f6630e1c2b3b03a8472be5953e27fe7ad8 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.MapRgba(Inno.Native.Sdl3.SDLPixelFormatDetails* format, Inno.Native.Sdl3.SDLPalette* palette, byte r, byte g, byte b, byte a)
```

Map an RGBA quadruple to a pixel value for a given pixel format.
This function maps the RGBA color value to the specified pixel format and
returns the pixel value best approximating the given RGBA color value for
the given pixel format.
If the specified pixel format has no alpha component the alpha value will
be ignored (as it will be in formats with a palette).
If the format has a palette (8-bit) the index of the closest matching color
in the palette will be returned.
If the pixel format bpp (color depth) is less than 32-bpp then the unused
upper bits of the return value can safely be ignored (e.g., with a 16-bpp
format the return value can be assigned to a Uint16, and similarly a Uint8
for an 8-bpp format).

**Thread safety:** It is safe to call this function from any thread, as long as
the palette is not modified.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPixelFormatDetails

**See also:** SDL_GetRGBA

**See also:** SDL_MapRGB

**See also:** SDL_MapSurfaceRGBA

**Parameter `format`:** a pointer to SDL_PixelFormatDetails describing the pixel
format.

**Parameter `palette`:** an optional palette for indexed formats, may be NULL.

**Parameter `r`:** the red component of the pixel in the range 0-255.

**Parameter `g`:** the green component of the pixel in the range 0-255.

**Parameter `b`:** the blue component of the pixel in the range 0-255.

**Parameter `a`:** the alpha component of the pixel in the range 0-255.

**Returns:** a pixel value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50074).
