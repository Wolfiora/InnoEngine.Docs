---
title: "SDLContext.RawApi — Method: SetRenderTextureAddressMode"
description: "Exact Method: SetRenderTextureAddressMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7ef6eaf007fd946c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderTextureAddressMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderTextureAddressMode`

<a id="api-53057e56c74e191a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderTextureAddressMode(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTextureAddressMode,Inno.Native.Sdl3.SDLTextureAddressMode) a27b527f77fd137d626c9276df85b03959aa78d48fcee4bc4e9d71f41239b546 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderTextureAddressMode(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTextureAddressMode u_mode, Inno.Native.Sdl3.SDLTextureAddressMode v_mode)
```

Set the texture addressing mode used in SDL_RenderGeometry().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_RenderGeometry

**See also:** SDL_RenderGeometryRaw

**See also:** SDL_GetRenderTextureAddressMode

**Parameter `renderer`:** the rendering context.

**Parameter `u_mode`:** the SDL_TextureAddressMode to use for horizontal texture
coordinates in SDL_RenderGeometry().

**Parameter `v_mode`:** the SDL_TextureAddressMode to use for vertical texture
coordinates in SDL_RenderGeometry().

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16956).
