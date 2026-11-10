---
title: "SDLContext.RawApi — Method: RenderTexture"
description: "Exact Method: RenderTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ba12a549b67ff6a4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderTexture`

<a id="api-d71363e7bb2870a1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderTexture(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLFRect*,Inno.Native.Sdl3.SDLFRect*) 5b8df87178c38b9950b8b284ac7870216973aab471e6928d009b742d947ec281 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderTexture(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLFRect* srcrect, Inno.Native.Sdl3.SDLFRect* dstrect)
```

Copy a portion of the texture to the current rendering target at subpixel
precision.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderTextureRotated

**See also:** SDL_RenderTextureTiled

**Parameter `renderer`:** the renderer which should copy parts of a texture.

**Parameter `texture`:** the source texture.

**Parameter `srcrect`:** a pointer to the source rectangle, or NULL for the entire
texture.

**Parameter `dstrect`:** a pointer to the destination rectangle, or NULL for the
entire rendering target.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42385).
