---
title: "SDLContext.RawApi — Method: SetWindowFullscreen"
description: "Exact Method: SetWindowFullscreen contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.62b2fd9a932185a8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowFullscreen

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowFullscreen`

<a id="api-ff38d6fb916d8b27"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowFullscreen(Inno.Native.Sdl3.SDLWindow*,System.Byte) 5bbf86fc79a634433802dde61bb173e87c68ea8a41f3a30f575fb43e87907695 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowFullscreen(Inno.Native.Sdl3.SDLWindow* window, byte fullscreen)
```

Request that the window's fullscreen state be changed.
By default a window in fullscreen state uses borderless fullscreen desktop
mode, but a specific exclusive display mode can be set using
SDL_SetWindowFullscreenMode().
On some windowing systems this request is asynchronous and the new
fullscreen state may not have have been applied immediately upon the return
of this function. If an immediate change is required, call SDL_SyncWindow()
to block until the changes have taken effect.
When the window state changes, an SDL_EVENT_WINDOW_ENTER_FULLSCREEN or
SDL_EVENT_WINDOW_LEAVE_FULLSCREEN event will be emitted. Note that, as this
is just a request, it can be denied by the windowing system.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowFullscreenMode

**See also:** SDL_SetWindowFullscreenMode

**See also:** SDL_SyncWindow

**See also:** SDL_WINDOW_FULLSCREEN

**Parameter `window`:** the window to change.

**Parameter `fullscreen`:** true for fullscreen mode, false for windowed mode.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30400).
