---
title: "SDLContext.RawApi — Method: SetTextureBlendMode"
description: "Exact Method: SetTextureBlendMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bcbe0c5e5fc43584
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTextureBlendMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTextureBlendMode`

<a id="api-c7c8116fe39bb568"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTextureBlendMode(Inno.Native.Sdl3.SDLTexture*,System.UInt32) fe093e7cb3da6a331ba1f9d0c711d723ddcc9ae07bbc4e0482569bd546522972 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetTextureBlendMode(Inno.Native.Sdl3.SDLTexture* texture, uint blendMode)
```

Set the blend mode for a texture, used by SDL_RenderTexture().
If the blend mode is not supported, the closest supported mode is chosen
and this function returns false.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTextureBlendMode

**Parameter `texture`:** the texture to update.

**Parameter `blendMode`:** the SDL_BlendMode to use for texture blending.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23319).
