---
title: "SDLContext.RawApi — Method: RemoveSurfaceAlternateImages"
description: "Exact Method: RemoveSurfaceAlternateImages contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.eb0cb06d453f4862
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RemoveSurfaceAlternateImages

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RemoveSurfaceAlternateImages`

<a id="api-fb71efce3c7eb8e5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RemoveSurfaceAlternateImages(Inno.Native.Sdl3.SDLSurface*) b1c882476a10456915ee95498a6c333c893344a0631be3c64136a23408ce261d -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.RemoveSurfaceAlternateImages(Inno.Native.Sdl3.SDLSurface* surface)
```

Remove all alternate versions of a surface.
This function removes a reference from all the alternative versions,
destroying them if this is the last reference to them.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddSurfaceAlternateImage

**See also:** SDL_GetSurfaceImages

**See also:** SDL_SurfaceHasAlternateImages

**Parameter `surface`:** the SDL_Surface structure to update.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35122).
