---
title: "SDLContext.RawApi — Method: GetTextureAlphaMod"
description: "Exact Method: GetTextureAlphaMod contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b1a95fa57fa9befd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTextureAlphaMod

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTextureAlphaMod`

<a id="api-93c9d32b060f5eff"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTextureAlphaMod(Inno.Native.Sdl3.SDLTexture*,System.Byte*) 21b9a5f604c4bf848544dad03e95c89adc78e2a2fe6f1269d4343e1b5af39041 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetTextureAlphaMod(Inno.Native.Sdl3.SDLTexture* texture, byte* alpha)
```

Get the additional alpha value multiplied into render copy operations.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTextureAlphaModFloat

**See also:** SDL_GetTextureColorMod

**See also:** SDL_SetTextureAlphaMod

**Parameter `texture`:** the texture to query.

**Parameter `alpha`:** a pointer filled in with the current alpha value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36247).
