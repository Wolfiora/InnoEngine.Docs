---
title: "SDLContext.RawApi — Method: MaximizeWindow"
description: "Exact Method: MaximizeWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.eda7e4bce53fd7d8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MaximizeWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MaximizeWindow`

<a id="api-d8700b83767c8b26"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MaximizeWindow(Inno.Native.Sdl3.SDLWindow*) c901b0a852046d7e0cb4d67c8ff233694415ae74c05d0589e5c13e7a120f2259 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.MaximizeWindow(Inno.Native.Sdl3.SDLWindow* window)
```

Request that the window be made as large as possible.
Non-resizable windows can't be maximized. The window must have the
SDL_WINDOW_RESIZABLE flag set, or this will have no effect.
On some windowing systems this request is asynchronous and the new window
state may not have have been applied immediately upon the return of this
function. If an immediate change is required, call SDL_SyncWindow() to
block until the changes have taken effect.
When the window state changes, an SDL_EVENT_WINDOW_MAXIMIZED event will be
emitted. Note that, as this is just a request, the windowing system can
deny the state change.
When maximizing a window, whether the constraints set via
SDL_SetWindowMaximumSize() are honored depends on the policy of the window
manager. Win32 and macOS enforce the constraints when maximizing, while X11
and Wayland window managers may vary.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_MinimizeWindow

**See also:** SDL_RestoreWindow

**See also:** SDL_SyncWindow

**Parameter `window`:** the window to maximize.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26793).
