---
title: "SDLContext.RawApi — Method: SetTextureAlphaModFloat"
description: "Exact Method: SetTextureAlphaModFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cd953480a5e9523c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTextureAlphaModFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTextureAlphaModFloat`

<a id="api-6cdca1237d4a6315"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTextureAlphaModFloat(Inno.Native.Sdl3.SDLTexture*,System.Single) 3c75fba4eae1aefa5f44852fc110dde823bd5f5379318166d6e382cad88183c3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetTextureAlphaModFloat(Inno.Native.Sdl3.SDLTexture* texture, float alpha)
```

Set an additional alpha value multiplied into render copy operations.
When this texture is rendered, during the copy operation the source alpha
value is modulated by this alpha value according to the following formula:
`srcA = srcA * alpha`
Alpha modulation is not always supported by the renderer; it will return
false if alpha modulation is not supported.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTextureAlphaModFloat

**See also:** SDL_SetTextureAlphaMod

**See also:** SDL_SetTextureColorModFloat

**Parameter `texture`:** the texture to update.

**Parameter `alpha`:** the source alpha value multiplied into copy operations.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36885).
