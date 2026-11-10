---
title: "SDLContext.RawApi — Method: SetWindowSize"
description: "Exact Method: SetWindowSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.97de685acf896320
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowSize`

<a id="api-968ad19399880425"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowSize(Inno.Native.Sdl3.SDLWindow*,System.Int32,System.Int32) 82b50fd88081badfd4f4383c8fc0a942b8ccfb5ac179ad1155a44c3003076534 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowSize(Inno.Native.Sdl3.SDLWindow* window, int w, int h)
```

Request that the size of a window's client area be set.
If the window is in a fullscreen or maximized state, this request has no
effect.
To change the exclusive fullscreen mode of a window, use
SDL_SetWindowFullscreenMode().
On some windowing systems, this request is asynchronous and the new window
size may not have have been applied immediately upon the return of this
function. If an immediate change is required, call SDL_SyncWindow() to
block until the changes have taken effect.
When the window size changes, an SDL_EVENT_WINDOW_RESIZED event will be
emitted with the new window dimensions. Note that the new dimensions may
not match the exact size requested, as some windowing systems can restrict
the window size in certain scenarios (e.g. constraining the size of the
content area to remain within the usable desktop bounds). Additionally, as
this is just a request, it can be denied by the windowing system.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowSize

**See also:** SDL_SetWindowFullscreenMode

**See also:** SDL_SyncWindow

**Parameter `window`:** the window to change.

**Parameter `w`:** the width of the window, must be > 0.

**Parameter `h`:** the height of the window, must be > 0.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47247).
