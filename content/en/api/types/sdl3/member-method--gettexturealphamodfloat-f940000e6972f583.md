---
title: "SDLContext.RawApi — Method: GetTextureAlphaModFloat"
description: "Exact Method: GetTextureAlphaModFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f940000e6972f583
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTextureAlphaModFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTextureAlphaModFloat`

<a id="api-588ea5fc7e0ef217"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTextureAlphaModFloat(Inno.Native.Sdl3.SDLTexture*,System.Single*) e463629a26524b337246058c2f49bce6a0b09495caeb4b535c4b86430ff6524d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetTextureAlphaModFloat(Inno.Native.Sdl3.SDLTexture* texture, float* alpha)
```

Get the additional alpha value multiplied into render copy operations.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTextureAlphaMod

**See also:** SDL_GetTextureColorModFloat

**See also:** SDL_SetTextureAlphaModFloat

**Parameter `texture`:** the texture to query.

**Parameter `alpha`:** a pointer filled in with the current alpha value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42186).
