---
title: "SDLContext.RawApi — Method: SetTextureScaleMode"
description: "Exact Method: SetTextureScaleMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fe1a5b182c3eab7b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTextureScaleMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTextureScaleMode`

<a id="api-0f684418589fb39c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTextureScaleMode(Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLScaleMode) 9a72e8aa04a4e35b1962514f64fb541823f2edb569b838c8c18b20555bab9d8d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetTextureScaleMode(Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLScaleMode scaleMode)
```

Set the scale mode used for texture scale operations.
The default texture scale mode is SDL_SCALEMODE_LINEAR.
If the scale mode is not supported, the closest supported mode is chosen.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTextureScaleMode

**Parameter `texture`:** the texture to update.

**Parameter `scaleMode`:** the SDL_ScaleMode to use for texture scaling.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50726).
