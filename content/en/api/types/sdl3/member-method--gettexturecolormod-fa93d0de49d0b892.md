---
title: "SDLContext.RawApi — Method: GetTextureColorMod"
description: "Exact Method: GetTextureColorMod contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fa93d0de49d0b892
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTextureColorMod

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTextureColorMod`

<a id="api-16abeed21efcc171"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTextureColorMod(Inno.Native.Sdl3.SDLTexture*,System.Byte*,System.Byte*,System.Byte*) 0149ea95eebd85dfb321c2a1e3787f15e83562800371cbbf0fe7f9f0ef71e2d3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetTextureColorMod(Inno.Native.Sdl3.SDLTexture* texture, byte* r, byte* g, byte* b)
```

Get the additional color value multiplied into render copy operations.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTextureAlphaMod

**See also:** SDL_GetTextureColorModFloat

**See also:** SDL_SetTextureColorMod

**Parameter `texture`:** the texture to query.

**Parameter `r`:** a pointer filled in with the current red color value.

**Parameter `g`:** a pointer filled in with the current green color value.

**Parameter `b`:** a pointer filled in with the current blue color value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49193).
