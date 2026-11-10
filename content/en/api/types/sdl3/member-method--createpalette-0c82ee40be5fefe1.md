---
title: "SDLContext.RawApi — Method: CreatePalette"
description: "Exact Method: CreatePalette contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0c82ee40be5fefe1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreatePalette

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreatePalette`

<a id="api-ed7fadb5bf415beb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreatePalette(System.Int32) b882c11ccd6f212da701345b8d79d28ef55115e59595d6591cf1367334d945c0 -->

```csharp
public Inno.Native.Sdl3.SDLPalette* Inno.Native.Sdl3.SDLContext.RawApi.CreatePalette(int ncolors)
```

Create a palette structure with the specified number of color entries.
The palette entries are initialized to white.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyPalette

**See also:** SDL_SetPaletteColors

**See also:** SDL_SetSurfacePalette

**Parameter `ncolors`:** represents the number of color entries in the color palette.

**Returns:** a new SDL_Palette structure on success or NULL on failure (e.g. if
there wasn't enough memory); call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40334).
