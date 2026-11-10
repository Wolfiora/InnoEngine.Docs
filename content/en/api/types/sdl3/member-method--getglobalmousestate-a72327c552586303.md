---
title: "SDLContext.RawApi — Method: GetGlobalMouseState"
description: "Exact Method: GetGlobalMouseState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a72327c552586303
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGlobalMouseState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGlobalMouseState`

<a id="api-092ddc8c60886004"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGlobalMouseState(System.Single*,System.Single*) 60fd889b51e0f76b7696ea9332691d3140eaa64928472e10a1c656570d4146dd -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetGlobalMouseState(float* x, float* y)
```

Query the platform for the asynchronous mouse button state and the
desktop-relative platform-cursor position.
This function immediately queries the platform for the most recent
asynchronous state, more costly than retrieving SDL's cached state in
SDL_GetMouseState().
Passing non-NULL pointers to `x` or `y` will write the destination with
respective x or y coordinates relative to the desktop.
In Relative Mode, the platform-cursor's position usually contradicts the
SDL-cursor's position as manually calculated from SDL_GetMouseState() and
SDL_GetWindowPosition.
This function can be useful if you need to track the mouse outside of a
specific window and SDL_CaptureMouse() doesn't fit your needs. For example,
it could be useful if you need to track the mouse while dragging a window,
where coordinates relative to a window might not be in sync at all times.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CaptureMouse

**See also:** SDL_GetMouseState

**See also:** SDL_GetGlobalMouseState

**Parameter `x`:** a pointer to receive the platform-cursor's x-position from the
desktop's top left corner, can be NULL if unused.

**Parameter `y`:** a pointer to receive the platform-cursor's y-position from the
desktop's top left corner, can be NULL if unused.

**Returns:** a 32-bit bitmask of the button state that can be bitwise-compared
against the SDL_BUTTON_MASK(X) macro.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23979).
