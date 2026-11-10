---
title: "SDLContext.RawApi — Method: SetDefaultTextureScaleMode"
description: "Exact Method: SetDefaultTextureScaleMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.71275a83f4ac8685
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetDefaultTextureScaleMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetDefaultTextureScaleMode`

<a id="api-8a0f6164ebb8b6ab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetDefaultTextureScaleMode(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLScaleMode) ad0ef5c8438d51f9ad801820fbd201a81bb2a0a9b0668578b712f0641a48e2a0 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetDefaultTextureScaleMode(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLScaleMode scale_mode)
```

Set default scale mode for new textures for given renderer.
When a renderer is created, scale_mode defaults to SDL_SCALEMODE_LINEAR.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_GetDefaultTextureScaleMode

**Parameter `renderer`:** the renderer to update.

**Parameter `scale_mode`:** the scale mode to change to for new textures.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46748).
