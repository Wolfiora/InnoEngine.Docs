---
title: "SDLContext.RawApi — Method: SetWindowPosition"
description: "Exact Method: SetWindowPosition contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3e82f0a11f07b040
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowPosition

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowPosition`

<a id="api-8aad299c9ad23fdf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowPosition(Inno.Native.Sdl3.SDLWindow*,System.Int32,System.Int32) 03d7eac959693bcd0952b86587bcfc6f760fcb51b46acc660ede58cd1a242ea8 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowPosition(Inno.Native.Sdl3.SDLWindow* window, int x, int y)
```

Request that the window's position be set.
If the window is in an exclusive fullscreen or maximized state, this
request has no effect.
This can be used to reposition fullscreen-desktop windows onto a different
display, however, as exclusive fullscreen windows are locked to a specific
display, they can only be repositioned programmatically via
SDL_SetWindowFullscreenMode().
On some windowing systems this request is asynchronous and the new
coordinates may not have have been applied immediately upon the return of
this function. If an immediate change is required, call SDL_SyncWindow() to
block until the changes have taken effect.
When the window position changes, an SDL_EVENT_WINDOW_MOVED event will be
emitted with the window's new coordinates. Note that the new coordinates
may not match the exact coordinates requested, as some windowing systems
can restrict the position of the window in certain scenarios (e.g.
constraining the position so the window is always within desktop bounds).
Additionally, as this is just a request, it can be denied by the windowing
system.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowPosition

**See also:** SDL_SyncWindow

**Parameter `window`:** the window to reposition.

**Parameter `x`:** the x coordinate of the window, or `SDL_WINDOWPOS_CENTERED` or
`SDL_WINDOWPOS_UNDEFINED`.

**Parameter `y`:** the y coordinate of the window, or `SDL_WINDOWPOS_CENTERED` or
`SDL_WINDOWPOS_UNDEFINED`.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41932).
