---
title: "SDLContext.RawApi — Method: GetTextureBlendMode"
description: "Exact Method: GetTextureBlendMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.08149e9b7b052da1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTextureBlendMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTextureBlendMode`

<a id="api-84047023d472c370"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTextureBlendMode(Inno.Native.Sdl3.SDLTexture*,System.UInt32*) be3f0df6ff4d72d9dbd1d8d453b76999c1f8e2c5212f5351269ad636dc63035d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetTextureBlendMode(Inno.Native.Sdl3.SDLTexture* texture, uint* blendMode)
```

Get the blend mode used for texture copy operations.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetTextureBlendMode

**Parameter `texture`:** the texture to query.

**Parameter `blendMode`:** a pointer filled in with the current SDL_BlendMode.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20232).
