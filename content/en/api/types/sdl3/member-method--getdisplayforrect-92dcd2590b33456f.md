---
title: "SDLContext.RawApi — Method: GetDisplayForRect"
description: "Exact Method: GetDisplayForRect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.92dcd2590b33456f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDisplayForRect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDisplayForRect`

<a id="api-8509e960a7bd7a6e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayForRect(Inno.Native.Sdl3.SDLRect*) d92d13ca28a3bd4fc623912e1b9c65061a94324d888a1d2f19cbac40ce361f78 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayForRect(Inno.Native.Sdl3.SDLRect* rect)
```

Get the display primarily containing a rect.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplayBounds

**See also:** SDL_GetDisplays

**Parameter `rect`:** the rect to query.

**Returns:** the instance ID of the display entirely containing the rect or
closest to the center of the rect on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39397).
