---
title: "SDLContext.RawApi — Method: GetTextureSize"
description: "Exact Method: GetTextureSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.af24ce71afdfeb85
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTextureSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTextureSize`

<a id="api-b2484b5106b39e87"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTextureSize(Inno.Native.Sdl3.SDLTexture*,System.Single*,System.Single*) bfeeb8910187c64663df2b8f6364622eedcfa4726fe637d5ccbfbb2231b0e010 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetTextureSize(Inno.Native.Sdl3.SDLTexture* texture, float* w, float* h)
```

Get the size of a texture, as floating point values.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `texture`:** the texture to query.

**Parameter `w`:** a pointer filled in with the width of the texture in pixels. This
argument can be NULL if you don't need this information.

**Parameter `h`:** a pointer filled in with the height of the texture in pixels. This
argument can be NULL if you don't need this information.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48452).
