---
title: "SDLContext.RawApi — Method: GetRgb"
description: "Exact Method: GetRgb contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2be992fb95840fc0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRgb

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRgb`

<a id="api-dfc8aaf38a70d506"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRgb(System.UInt32,Inno.Native.Sdl3.SDLPixelFormatDetails*,Inno.Native.Sdl3.SDLPalette*,System.Byte*,System.Byte*,System.Byte*) fee395580b6fd993597d972ab0452d813ac0f693840fc45d9b9a6a7d31f1cde6 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GetRgb(uint pixelvalue, Inno.Native.Sdl3.SDLPixelFormatDetails* format, Inno.Native.Sdl3.SDLPalette* palette, byte* r, byte* g, byte* b)
```

Get RGB values from a pixel in the specified format.
This function uses the entire 8-bit [0..255] range when converting color
components from pixel formats with less than 8-bits per RGB component
(e.g., a completely white pixel in 16-bit RGB565 format would return [0xff,
0xff, 0xff] not [0xf8, 0xfc, 0xf8]).

**Thread safety:** It is safe to call this function from any thread, as long as
the palette is not modified.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPixelFormatDetails

**See also:** SDL_GetRGBA

**See also:** SDL_MapRGB

**See also:** SDL_MapRGBA

**Parameter `pixelvalue`:** a pixel value.

**Parameter `format`:** a pointer to SDL_PixelFormatDetails describing the pixel
format.

**Parameter `palette`:** an optional palette for indexed formats, may be NULL.

**Parameter `r`:** a pointer filled in with the red component, may be NULL.

**Parameter `g`:** a pointer filled in with the green component, may be NULL.

**Parameter `b`:** a pointer filled in with the blue component, may be NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38560).
