---
title: "SDLContext.RawApi — Method: ConvertSurfaceAndColorspace"
description: "Exact Method: ConvertSurfaceAndColorspace contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.dc757a73cefb430d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ConvertSurfaceAndColorspace

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ConvertSurfaceAndColorspace`

<a id="api-45dddcb8f5165221"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ConvertSurfaceAndColorspace(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLPixelFormat,Inno.Native.Sdl3.SDLPalette*,Inno.Native.Sdl3.SDLColorspace,System.UInt32) 6aa9f2c4fb02b566334e7738c399052c55d072021784613b82c0ba9b6f53f7d8 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.ConvertSurfaceAndColorspace(Inno.Native.Sdl3.SDLSurface* surface, Inno.Native.Sdl3.SDLPixelFormat format, Inno.Native.Sdl3.SDLPalette* palette, Inno.Native.Sdl3.SDLColorspace colorspace, uint props)
```

Copy an existing surface to a new surface of the specified format and
colorspace.
This function converts an existing surface to a new format and colorspace
and returns the new surface. This will perform any pixel format and
colorspace conversion needed.
If the original surface has alternate images, the new surface will have a
reference to them as well.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ConvertSurface

**See also:** SDL_DestroySurface

**Parameter `surface`:** the existing SDL_Surface structure to convert.

**Parameter `format`:** the new pixel format.

**Parameter `palette`:** an optional palette to use for indexed formats, may be NULL.

**Parameter `colorspace`:** the new colorspace.

**Parameter `props`:** an SDL_PropertiesID with additional color properties, or 0.

**Returns:** the new SDL_Surface structure that is created or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43314).
