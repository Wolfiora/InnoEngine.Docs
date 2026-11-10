---
title: "SDLContext.RawApi — Method: SurfaceHasAlternateImages"
description: "Exact Method: SurfaceHasAlternateImages contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9b8f4fef59f5e72b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SurfaceHasAlternateImages

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SurfaceHasAlternateImages`

<a id="api-9926a2b5c66422fc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SurfaceHasAlternateImages(Inno.Native.Sdl3.SDLSurface*) 94d072807db2379661dd4b45b1dc8ff3774838231da87a76d0971c81a812a53b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SurfaceHasAlternateImages(Inno.Native.Sdl3.SDLSurface* surface)
```

Return whether a surface has alternate versions available.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddSurfaceAlternateImage

**See also:** SDL_RemoveSurfaceAlternateImages

**See also:** SDL_GetSurfaceImages

**Parameter `surface`:** the SDL_Surface structure to query.

**Returns:** true if alternate versions are available or false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40083).
