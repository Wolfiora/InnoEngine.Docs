---
title: "SDLContext.RawApi — Method: GetMouseState"
description: "Exact Method: GetMouseState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.78d665bb4e6f2de0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetMouseState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetMouseState`

<a id="api-7fd2278ea9dcfcb1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetMouseState(System.Single*,System.Single*) 627a7adb84258c348795eb948d91df02fa5713b054dd5cd53350b12d448c4c47 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetMouseState(float* x, float* y)
```

Query SDL's cache for the synchronous mouse button state and the
window-relative SDL-cursor position.
This function returns the cached synchronous state as SDL understands it
from the last pump of the event queue.
To query the platform for immediate asynchronous state, use
SDL_GetGlobalMouseState.
Passing non-NULL pointers to `x` or `y` will write the destination with
respective x or y coordinates relative to the focused window.
In Relative Mode, the SDL-cursor's position usually contradicts the
platform-cursor's position as manually calculated from
SDL_GetGlobalMouseState() and SDL_GetWindowPosition.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGlobalMouseState

**See also:** SDL_GetRelativeMouseState

**Parameter `x`:** a pointer to receive the SDL-cursor's x-position from the focused
window's top left corner, can be NULL if unused.

**Parameter `y`:** a pointer to receive the SDL-cursor's y-position from the focused
window's top left corner, can be NULL if unused.

**Returns:** a 32-bit bitmask of the button state that can be bitwise-compared
against the SDL_BUTTON_MASK(X) macro.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45710).
