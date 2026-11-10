---
title: "SDLContext.RawApi — Method: CreateTextureFromSurface"
description: "Exact Method: CreateTextureFromSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9df6b5b5b0f0169f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateTextureFromSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateTextureFromSurface`

<a id="api-89504710ac92ed51"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateTextureFromSurface(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLSurface*) 037897b8a08e68c614d6e1661e01d8c40ccd9ddec22aa7391d36d8c52a124c13 -->

```csharp
public Inno.Native.Sdl3.SDLTexture* Inno.Native.Sdl3.SDLContext.RawApi.CreateTextureFromSurface(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLSurface* surface)
```

Create a texture from an existing surface.
The surface is not modified or freed by this function.
The SDL_TextureAccess hint for the created texture is
`SDL_TEXTUREACCESS_STATIC`.
The pixel format of the created texture may be different from the pixel
format of the surface, and can be queried using the
SDL_PROP_TEXTURE_FORMAT_NUMBER property.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTexture

**See also:** SDL_CreateTextureWithProperties

**See also:** SDL_DestroyTexture

**Parameter `renderer`:** the rendering context.

**Parameter `surface`:** the SDL_Surface structure containing pixel data used to fill
the texture.

**Returns:** the created texture or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41454).
