---
title: "SDLContext.RawApi — Method: SetSurfacePalette"
description: "Exact Method: SetSurfacePalette contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8455b35d409661ec
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetSurfacePalette

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetSurfacePalette`

<a id="api-bdc650c0234ab679"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetSurfacePalette(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLPalette*) 4e57aeb833282d2fad21023dcb4482ca287bb8930ba806e6e7b0932c1f6d2b02 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetSurfacePalette(Inno.Native.Sdl3.SDLSurface* surface, Inno.Native.Sdl3.SDLPalette* palette)
```

Set the palette used by a surface.
Setting the palette keeps an internal reference to the palette, which can
be safely destroyed afterwards.
A single palette can be shared with many surfaces.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreatePalette

**See also:** SDL_GetSurfacePalette

**Parameter `surface`:** the SDL_Surface structure to update.

**Parameter `palette`:** the SDL_Palette structure to use.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29670).
