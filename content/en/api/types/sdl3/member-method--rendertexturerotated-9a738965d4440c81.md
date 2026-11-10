---
title: "SDLContext.RawApi — Method: RenderTextureRotated"
description: "Exact Method: RenderTextureRotated contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9a738965d4440c81
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderTextureRotated

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderTextureRotated`

<a id="api-226372272208b605"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderTextureRotated(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLFRect*,Inno.Native.Sdl3.SDLFRect*,System.Double,Inno.Native.Sdl3.SDLFPoint*,Inno.Native.Sdl3.SDLFlipMode) 914604569542aa55e403ad5d5a6b80c0843ecdd22ed8de18fb295283cf641587 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderTextureRotated(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLFRect* srcrect, Inno.Native.Sdl3.SDLFRect* dstrect, double angle, Inno.Native.Sdl3.SDLFPoint* center, Inno.Native.Sdl3.SDLFlipMode flip)
```

Copy a portion of the source texture to the current rendering target, with
rotation and flipping, at subpixel precision.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderTexture

**Parameter `renderer`:** the renderer which should copy parts of a texture.

**Parameter `texture`:** the source texture.

**Parameter `srcrect`:** a pointer to the source rectangle, or NULL for the entire
texture.

**Parameter `dstrect`:** a pointer to the destination rectangle, or NULL for the
entire rendering target.

**Parameter `angle`:** an angle in degrees that indicates the rotation that will be
applied to dstrect, rotating it in a clockwise direction.

**Parameter `center`:** a pointer to a point indicating the point around which
dstrect will be rotated (if NULL, rotation will be done
around dstrect.w/2, dstrect.h/2).

**Parameter `flip`:** an SDL_FlipMode value stating which flipping actions should be
performed on the texture.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20428).
