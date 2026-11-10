---
title: "SDLContext.RawApi — Method: CreateTexture"
description: "Exact Method: CreateTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f457cb7bffb44eef
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateTexture`

<a id="api-b58a32845c07365e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateTexture(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLPixelFormat,Inno.Native.Sdl3.SDLTextureAccess,System.Int32,System.Int32) e09adddd6c5eb128701460425004868bf368a18a5f50fb97ed9f4d7d985d6ab9 -->

```csharp
public Inno.Native.Sdl3.SDLTexture* Inno.Native.Sdl3.SDLContext.RawApi.CreateTexture(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLPixelFormat format, Inno.Native.Sdl3.SDLTextureAccess access, int w, int h)
```

Create a texture for a rendering context.
The contents of a texture when first created are not defined.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTextureFromSurface

**See also:** SDL_CreateTextureWithProperties

**See also:** SDL_DestroyTexture

**See also:** SDL_GetTextureSize

**See also:** SDL_UpdateTexture

**Parameter `renderer`:** the rendering context.

**Parameter `format`:** one of the enumerated values in SDL_PixelFormat.

**Parameter `access`:** one of the enumerated values in SDL_TextureAccess.

**Parameter `w`:** the width of the texture in pixels.

**Parameter `h`:** the height of the texture in pixels.

**Returns:** the created texture or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39140).
