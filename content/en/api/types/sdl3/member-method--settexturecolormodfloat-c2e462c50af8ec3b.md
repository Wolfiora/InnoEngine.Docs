---
title: "SDLContext.RawApi — Method: SetTextureColorModFloat"
description: "Exact Method: SetTextureColorModFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c2e462c50af8ec3b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTextureColorModFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTextureColorModFloat`

<a id="api-e3bd8d24ad0aa691"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTextureColorModFloat(Inno.Native.Sdl3.SDLTexture*,System.Single,System.Single,System.Single) f4c0c22e42a4ef22ddc96746c1a02b9845bd9d55fce395ceaa140a91d9577372 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetTextureColorModFloat(Inno.Native.Sdl3.SDLTexture* texture, float r, float g, float b)
```

Set an additional color value multiplied into render copy operations.
When this texture is rendered, during the copy operation each source color
channel is modulated by the appropriate color value according to the
following formula:
`srcC = srcC * color`
Color modulation is not always supported by the renderer; it will return
false if color modulation is not supported.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTextureColorModFloat

**See also:** SDL_SetTextureAlphaModFloat

**See also:** SDL_SetTextureColorMod

**Parameter `texture`:** the texture to update.

**Parameter `r`:** the red color value multiplied into copy operations.

**Parameter `g`:** the green color value multiplied into copy operations.

**Parameter `b`:** the blue color value multiplied into copy operations.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39642).
