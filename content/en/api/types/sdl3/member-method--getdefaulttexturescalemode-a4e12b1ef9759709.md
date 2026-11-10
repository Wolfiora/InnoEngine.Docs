---
title: "SDLContext.RawApi — Method: GetDefaultTextureScaleMode"
description: "Exact Method: GetDefaultTextureScaleMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a4e12b1ef9759709
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDefaultTextureScaleMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDefaultTextureScaleMode`

<a id="api-b84d1e4c514db00d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDefaultTextureScaleMode(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLScaleMode*) 4c28677388d63756cd820d217d17b0ff804561aa15f24e541c3d7938f3c46ff7 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetDefaultTextureScaleMode(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLScaleMode* scale_mode)
```

Get default texture scale mode of the given renderer.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_SetDefaultTextureScaleMode

**Parameter `renderer`:** the renderer to get data from.

**Parameter `scale_mode`:** a SDL_ScaleMode filled with current default scale mode.
See SDL_SetDefaultTextureScaleMode() for the meaning of
the value.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31892).
