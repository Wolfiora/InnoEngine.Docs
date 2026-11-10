---
title: "SDLContext.RawApi — Method: SetRenderVSync"
description: "Exact Method: SetRenderVSync contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.21719322298faa8f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderVSync

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderVSync`

<a id="api-2258b42fcabe2d06"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderVSync(Inno.Native.Sdl3.SDLRenderer*,System.Int32) afd9178044609de47a90e5c1153c4bb675200247e2ca6f5b220c97566d3e5ef2 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderVSync(Inno.Native.Sdl3.SDLRenderer* renderer, int vsync)
```

Toggle VSync of the given renderer.
When a renderer is created, vsync defaults to SDL_RENDERER_VSYNC_DISABLED.
The `vsync` parameter can be 1 to synchronize present with every vertical
refresh, 2 to synchronize present with every second vertical refresh, etc.,
SDL_RENDERER_VSYNC_ADAPTIVE for late swap tearing (adaptive vsync), or
SDL_RENDERER_VSYNC_DISABLED to disable. Not every value is supported by
every driver, so you should check the return value to see whether the
requested setting is supported.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderVSync

**Parameter `renderer`:** the renderer to toggle.

**Parameter `vsync`:** the vertical refresh sync interval.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23156).
