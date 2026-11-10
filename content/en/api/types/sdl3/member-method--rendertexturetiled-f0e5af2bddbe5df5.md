---
title: "SDLContext.RawApi — Method: RenderTextureTiled"
description: "Exact Method: RenderTextureTiled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f0e5af2bddbe5df5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderTextureTiled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderTextureTiled`

<a id="api-b447fb0916a12eea"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderTextureTiled(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLFRect*,System.Single,Inno.Native.Sdl3.SDLFRect*) 18b20e88ec34cd9f2a0fd8c8ddf60180f66cfc2cbce8562b223a687602bfae6c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderTextureTiled(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLFRect* srcrect, float scale, Inno.Native.Sdl3.SDLFRect* dstrect)
```

Tile a portion of the texture to the current rendering target at subpixel
precision.
The pixels in `srcrect` will be repeated as many times as needed to
completely fill `dstrect`.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderTexture

**Parameter `renderer`:** the renderer which should copy parts of a texture.

**Parameter `texture`:** the source texture.

**Parameter `srcrect`:** a pointer to the source rectangle, or NULL for the entire
texture.

**Parameter `scale`:** the scale used to transform srcrect into the destination
rectangle, e.g. a 32x32 texture with a scale of 2 would fill
64x64 tiles.

**Parameter `dstrect`:** a pointer to the destination rectangle, or NULL for the
entire rendering target.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35458).
