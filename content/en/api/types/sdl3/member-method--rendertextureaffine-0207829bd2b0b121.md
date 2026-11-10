---
title: "SDLContext.RawApi — Method: RenderTextureAffine"
description: "Exact Method: RenderTextureAffine contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0207829bd2b0b121
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderTextureAffine

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderTextureAffine`

<a id="api-95b811b438e50d43"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderTextureAffine(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLFRect*,Inno.Native.Sdl3.SDLFPoint*,Inno.Native.Sdl3.SDLFPoint*,Inno.Native.Sdl3.SDLFPoint*) 8892e7cdd441cb5842ed60749b1337c8a30be75aab57d9073ae2081016e057f1 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderTextureAffine(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLFRect* srcrect, Inno.Native.Sdl3.SDLFPoint* origin, Inno.Native.Sdl3.SDLFPoint* right, Inno.Native.Sdl3.SDLFPoint* down)
```

Copy a portion of the source texture to the current rendering target, with
affine transform, at subpixel precision.

**Thread safety:** You may only call this function from the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderTexture

**Parameter `renderer`:** the renderer which should copy parts of a texture.

**Parameter `texture`:** the source texture.

**Parameter `srcrect`:** a pointer to the source rectangle, or NULL for the entire
texture.

**Parameter `origin`:** a pointer to a point indicating where the top-left corner of
srcrect should be mapped to, or NULL for the rendering
target's origin.

**Parameter `right`:** a pointer to a point indicating where the top-right corner of
srcrect should be mapped to, or NULL for the rendering
target's top-right corner.

**Parameter `down`:** a pointer to a point indicating where the bottom-left corner of
srcrect should be mapped to, or NULL for the rendering target's
bottom-left corner.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39283).
