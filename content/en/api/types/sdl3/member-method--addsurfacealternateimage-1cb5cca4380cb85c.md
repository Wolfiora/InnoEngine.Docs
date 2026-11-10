---
title: "SDLContext.RawApi — Method: AddSurfaceAlternateImage"
description: "Exact Method: AddSurfaceAlternateImage contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1cb5cca4380cb85c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AddSurfaceAlternateImage

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AddSurfaceAlternateImage`

<a id="api-ac8f44e3750c188e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AddSurfaceAlternateImage(Inno.Native.Sdl3.SDLSurface*,Inno.Native.Sdl3.SDLSurface*) e5758163284ec7db12b49a05feceecf7b2bdd3d6003ff00d646319e8a7860b4d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.AddSurfaceAlternateImage(Inno.Native.Sdl3.SDLSurface* surface, Inno.Native.Sdl3.SDLSurface* image)
```

Add an alternate version of a surface.
This function adds an alternate version of this surface, usually used for
content with high DPI representations like cursors or icons. The size,
format, and content do not need to match the original surface, and these
alternate versions will not be updated when the original surface changes.
This function adds a reference to the alternate version, so you should call
SDL_DestroySurface() on the image after this call.

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RemoveSurfaceAlternateImages

**See also:** SDL_GetSurfaceImages

**See also:** SDL_SurfaceHasAlternateImages

**Parameter `surface`:** the SDL_Surface structure to update.

**Parameter `image`:** a pointer to an alternate SDL_Surface to associate with this
surface.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49897).
