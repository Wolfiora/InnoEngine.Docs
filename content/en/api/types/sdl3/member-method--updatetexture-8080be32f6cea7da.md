---
title: "SDLContext.RawApi — Method: UpdateTexture"
description: "Exact Method: UpdateTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8080be32f6cea7da
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UpdateTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateTexture`

<a id="api-0079a29898aff153"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UpdateTexture(Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLRect*,System.Void*,System.Int32) 3a4fba089aa0207d3d0a432026ad9ef83cd74e9ac8cbc7abb2b5ddf4921175d3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.UpdateTexture(Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLRect* rect, void* pixels, int pitch)
```

Update the given texture rectangle with new pixel data.
The pixel data must be in the pixel format of the texture, which can be
queried using the SDL_PROP_TEXTURE_FORMAT_NUMBER property.
This is a fairly slow function, intended for use with static textures that
do not change often.
If the texture is intended to be updated often, it is preferred to create
the texture as streaming and use the locking functions referenced below.
While this function will work with streaming textures, for optimization
reasons you may not get the pixels back if you lock the texture afterward.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockTexture

**See also:** SDL_UnlockTexture

**See also:** SDL_UpdateNVTexture

**See also:** SDL_UpdateYUVTexture

**Parameter `texture`:** the texture to update.

**Parameter `rect`:** an SDL_Rect structure representing the area to update, or NULL
to update the entire texture.

**Parameter `pixels`:** the raw pixel data in the format of the texture.

**Parameter `pitch`:** the number of bytes in a row of pixel data, including padding
between lines.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40126).
