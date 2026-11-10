---
title: "SDLContext.RawApi — Method: SetTextureAlphaMod"
description: "Exact Method: SetTextureAlphaMod contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1547c77bd604a7a0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTextureAlphaMod

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTextureAlphaMod`

<a id="api-f8c119649b4b62e6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTextureAlphaMod(Inno.Native.Sdl3.SDLTexture*,System.Byte) 4e1e57f7b26d39a3bafa12ac542b757a6221890b397b5501e003c44f6068f08c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetTextureAlphaMod(Inno.Native.Sdl3.SDLTexture* texture, byte alpha)
```

Set an additional alpha value multiplied into render copy operations.
When this texture is rendered, during the copy operation the source alpha
value is modulated by this alpha value according to the following formula:
`srcA = srcA * (alpha / 255)`
Alpha modulation is not always supported by the renderer; it will return
false if alpha modulation is not supported.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTextureAlphaMod

**See also:** SDL_SetTextureAlphaModFloat

**See also:** SDL_SetTextureColorMod

**Parameter `texture`:** the texture to update.

**Parameter `alpha`:** the source alpha value multiplied into copy operations.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45182).
