---
title: "SDLContext.RawApi — Method: MapSurfaceRgba"
description: "Exact Method: MapSurfaceRgba contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.16df915c0838c43e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MapSurfaceRgba

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MapSurfaceRgba`

<a id="api-41321198a048ff7c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MapSurfaceRgba(Inno.Native.Sdl3.SDLSurface*,System.Byte,System.Byte,System.Byte,System.Byte) 017d656cb0c80143f7d36c8b8fc2a8b617954bb6827985e2e5b2cbf4af3e63d7 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.MapSurfaceRgba(Inno.Native.Sdl3.SDLSurface* surface, byte r, byte g, byte b, byte a)
```

Map an RGBA quadruple to a pixel value for a surface.
This function maps the RGBA color value to the specified pixel format and
returns the pixel value best approximating the given RGBA color value for
the given pixel format.
If the surface pixel format has no alpha component the alpha value will be
ignored (as it will be in formats with a palette).
If the surface has a palette, the index of the closest matching color in
the palette will be returned.
If the pixel format bpp (color depth) is less than 32-bpp then the unused
upper bits of the return value can safely be ignored (e.g., with a 16-bpp
format the return value can be assigned to a Uint16, and similarly a Uint8
for an 8-bpp format).

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_MapSurfaceRGB

**Parameter `surface`:** the surface to use for the pixel format and palette.

**Parameter `r`:** the red component of the pixel in the range 0-255.

**Parameter `g`:** the green component of the pixel in the range 0-255.

**Parameter `b`:** the blue component of the pixel in the range 0-255.

**Parameter `a`:** the alpha component of the pixel in the range 0-255.

**Returns:** a pixel value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17071).
