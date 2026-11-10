---
title: "SDLContext.RawApi — Method: GetRenderTextureAddressMode"
description: "Exact Method: GetRenderTextureAddressMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c2b7191773e45191
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderTextureAddressMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderTextureAddressMode`

<a id="api-43b0d9e944dc5431"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderTextureAddressMode(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTextureAddressMode*,Inno.Native.Sdl3.SDLTextureAddressMode*) 3f7e2aa90c7148083ce8ce8815c1d00faca24ef959d6faad6863f951acca1c33 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderTextureAddressMode(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTextureAddressMode* u_mode, Inno.Native.Sdl3.SDLTextureAddressMode* v_mode)
```

Get the texture addressing mode used in SDL_RenderGeometry().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_SetRenderTextureAddressMode

**Parameter `renderer`:** the rendering context.

**Parameter `u_mode`:** a pointer filled in with the SDL_TextureAddressMode to use
for horizontal texture coordinates in SDL_RenderGeometry(),
may be NULL.

**Parameter `v_mode`:** a pointer filled in with the SDL_TextureAddressMode to use
for vertical texture coordinates in SDL_RenderGeometry(), may
be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44098).
