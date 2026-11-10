---
title: "SDLContext.RawApi — Method: GetWindowFullscreenMode"
description: "Exact Method: GetWindowFullscreenMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e511b439f4e8aad5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowFullscreenMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowFullscreenMode`

<a id="api-52e89e2e7c7e1556"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowFullscreenMode(Inno.Native.Sdl3.SDLWindow*) 60e9ac78eea418a3bca5f92642e3dfc88e8701b71492f3b1c4952f9ac0b8d0be -->

```csharp
public Inno.Native.Sdl3.SDLDisplayMode* Inno.Native.Sdl3.SDLContext.RawApi.GetWindowFullscreenMode(Inno.Native.Sdl3.SDLWindow* window)
```

Query the display mode to use when a window is visible at fullscreen.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowFullscreenMode

**See also:** SDL_SetWindowFullscreen

**Parameter `window`:** the window to query.

**Returns:** a pointer to the exclusive fullscreen mode to use or NULL for
borderless fullscreen desktop mode.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46637).
