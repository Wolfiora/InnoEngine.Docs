---
title: "SDLContext.RawApi — Method: SetWindowSurfaceVSync"
description: "Exact Method: SetWindowSurfaceVSync contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.92ff6af305f88792
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowSurfaceVSync

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowSurfaceVSync`

<a id="api-dce46c229bbd658e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowSurfaceVSync(Inno.Native.Sdl3.SDLWindow*,System.Int32) 4813d8818ca1b6a3fb4c68243f78a75bc5903c708688423eaf30ff0313c33758 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowSurfaceVSync(Inno.Native.Sdl3.SDLWindow* window, int vsync)
```

Toggle VSync for the window surface.
When a window surface is created, vsync defaults to
SDL_WINDOW_SURFACE_VSYNC_DISABLED.
The `vsync` parameter can be 1 to synchronize present with every vertical
refresh, 2 to synchronize present with every second vertical refresh, etc.,
SDL_WINDOW_SURFACE_VSYNC_ADAPTIVE for late swap tearing (adaptive vsync),
or SDL_WINDOW_SURFACE_VSYNC_DISABLED to disable. Not every value is
supported by every driver, so you should check the return value to see
whether the requested setting is supported.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowSurfaceVSync

**Parameter `window`:** the window.

**Parameter `vsync`:** the vertical refresh sync interval.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25574).
