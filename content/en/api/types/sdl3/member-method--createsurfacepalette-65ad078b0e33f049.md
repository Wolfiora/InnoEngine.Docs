---
title: "SDLContext.RawApi — Method: CreateSurfacePalette"
description: "Exact Method: CreateSurfacePalette contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.65ad078b0e33f049
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateSurfacePalette

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateSurfacePalette`

<a id="api-1533f4b6169adf80"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateSurfacePalette(Inno.Native.Sdl3.SDLSurface*) c65edf6bad689d01a7409ba6e4ec6776e99fbe3c42ad3db578413bdf2e737760 -->

```csharp
public Inno.Native.Sdl3.SDLPalette* Inno.Native.Sdl3.SDLContext.RawApi.CreateSurfacePalette(Inno.Native.Sdl3.SDLSurface* surface)
```

Create a palette and associate it with a surface.
This function creates a palette compatible with the provided surface. The
palette is then returned for you to modify, and the surface will
automatically use the new palette in future operations. You do not need to
destroy the returned palette, it will be freed when the reference count
reaches 0, usually when the surface is destroyed.
Bitmap surfaces (with format SDL_PIXELFORMAT_INDEX1LSB or
SDL_PIXELFORMAT_INDEX1MSB) will have the palette initialized with 0 as
white and 1 as black. Other surfaces will get a palette initialized with
white in every entry.
If this function is called for a surface that already has a palette, a new
palette will be created to replace it.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetPaletteColors

**Parameter `surface`:** the SDL_Surface structure to update.

**Returns:** a new SDL_Palette structure on success or NULL on failure (e.g. if
the surface didn't have an index format); call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18609).
