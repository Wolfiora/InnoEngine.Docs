---
title: "SDLContext.RawApi — Method: SetWindowFullscreenMode"
description: "Exact Method: SetWindowFullscreenMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b958fe269d348b12
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowFullscreenMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowFullscreenMode`

<a id="api-52b2170eb3b9a6a5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowFullscreenMode(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLDisplayMode*) 31bca164d56b478c8a95d7e40a8a1686aae75cfbf8f5bf5b2775d146ec8125e5 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowFullscreenMode(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLDisplayMode* mode)
```

Set the display mode to use when a window is visible and fullscreen.
This only affects the display mode used when the window is fullscreen. To
change the window size when the window is not fullscreen, use
SDL_SetWindowSize().
If the window is currently in the fullscreen state, this request is
asynchronous on some windowing systems and the new mode dimensions may not
be applied immediately upon the return of this function. If an immediate
change is required, call SDL_SyncWindow() to block until the changes have
taken effect.
When the new mode takes effect, an SDL_EVENT_WINDOW_RESIZED and/or an
SDL_EVENT_WINDOW_PIXEL_SIZE_CHANGED event will be emitted with the new mode
dimensions.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowFullscreenMode

**See also:** SDL_SetWindowFullscreen

**See also:** SDL_SyncWindow

**Parameter `window`:** the window to affect.

**Parameter `mode`:** a pointer to the display mode to use, which can be NULL for
borderless fullscreen desktop mode, or one of the fullscreen
modes returned by SDL_GetFullscreenDisplayModes() to set an
exclusive fullscreen mode.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50942).
