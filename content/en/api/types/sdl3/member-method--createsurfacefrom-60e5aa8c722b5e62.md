---
title: "SDLContext.RawApi — Method: CreateSurfaceFrom"
description: "Exact Method: CreateSurfaceFrom contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.60e5aa8c722b5e62
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateSurfaceFrom

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateSurfaceFrom`

<a id="api-1413335ff5cef730"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateSurfaceFrom(System.Int32,System.Int32,Inno.Native.Sdl3.SDLPixelFormat,System.Void*,System.Int32) 5b633a5459b297ccd6697b90908f2b02c7c8171edcdfb0b9750176d27216b401 -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.CreateSurfaceFrom(int width, int height, Inno.Native.Sdl3.SDLPixelFormat format, void* pixels, int pitch)
```

Allocate a new surface with a specific pixel format and existing pixel
data.
No copy is made of the pixel data. Pixel data is not managed automatically;
you must free the surface before you free the pixel data.
Pitch is the offset in bytes from one row of pixels to the next, e.g.
`width*4` for `SDL_PIXELFORMAT_RGBA8888`.
You may pass NULL for pixels and 0 for pitch to create a surface that you
will fill in with valid values later.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateSurface

**See also:** SDL_DestroySurface

**Parameter `width`:** the width of the surface.

**Parameter `height`:** the height of the surface.

**Parameter `format`:** the SDL_PixelFormat for the new surface's pixel format.

**Parameter `pixels`:** a pointer to existing pixel data.

**Parameter `pitch`:** the number of bytes between each row, including padding.

**Returns:** the new SDL_Surface structure that is created or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20309).
