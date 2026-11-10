---
title: "SDLContext.RawApi — Method: GetSurfaceColorspace"
description: "Exact Method: GetSurfaceColorspace contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.227dc2f3fb6124cd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSurfaceColorspace

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSurfaceColorspace`

<a id="api-d213970600c85e6b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceColorspace(Inno.Native.Sdl3.SDLSurface*) aab43c1070f7ee66af7738cac30b0da0d38d696827af7e9e04e026cef4fe58aa -->

```csharp
public Inno.Native.Sdl3.SDLColorspace Inno.Native.Sdl3.SDLContext.RawApi.GetSurfaceColorspace(Inno.Native.Sdl3.SDLSurface* surface)
```

Get the colorspace used by a surface.
The colorspace defaults to SDL_COLORSPACE_SRGB_LINEAR for floating point
formats, SDL_COLORSPACE_HDR10 for 10-bit formats, SDL_COLORSPACE_SRGB for
other RGB surfaces and SDL_COLORSPACE_BT709_FULL for YUV textures.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetSurfaceColorspace

**Parameter `surface`:** the SDL_Surface structure to query.

**Returns:** the colorspace used by the surface, or SDL_COLORSPACE_UNKNOWN if
the surface is NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44747).
