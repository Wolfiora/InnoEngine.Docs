---
title: "SDLContext.RawApi — Method: GetTextureColorModFloat"
description: "Exact Method: GetTextureColorModFloat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f1d773a88e85da8d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTextureColorModFloat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTextureColorModFloat`

<a id="api-7a628345dfeab08f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTextureColorModFloat(Inno.Native.Sdl3.SDLTexture*,System.Single*,System.Single*,System.Single*) ed0077ea19f1e806b458791640a151f483eef17c82cadfc2db3693eece6f4bd5 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetTextureColorModFloat(Inno.Native.Sdl3.SDLTexture* texture, float* r, float* g, float* b)
```

Get the additional color value multiplied into render copy operations.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTextureAlphaModFloat

**See also:** SDL_GetTextureColorMod

**See also:** SDL_SetTextureColorModFloat

**Parameter `texture`:** the texture to query.

**Parameter `r`:** a pointer filled in with the current red color value.

**Parameter `g`:** a pointer filled in with the current green color value.

**Parameter `b`:** a pointer filled in with the current blue color value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48101).
