---
title: "SDLContext.RawApi — Method: SetWindowRelativeMouseMode"
description: "Exact Method: SetWindowRelativeMouseMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7c9b4671b9d059b0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowRelativeMouseMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowRelativeMouseMode`

<a id="api-978ec5774a6cfcbc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowRelativeMouseMode(Inno.Native.Sdl3.SDLWindow*,System.Byte) f80b29702a28e0047212ac7e2748d5ea3d8d284139ea49a824414c4bad55ed2b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowRelativeMouseMode(Inno.Native.Sdl3.SDLWindow* window, byte enabled)
```

Set relative mouse mode for a window.
While the window has focus and relative mouse mode is enabled, the cursor
is hidden, the mouse position is constrained to the window, and SDL will
report continuous relative mouse motion even if the mouse is at the edge of
the window.
If you'd like to keep the mouse position fixed while in relative mode you
can use SDL_SetWindowMouseRect(). If you'd like the cursor to be at a
specific location when relative mode ends, you should use
SDL_WarpMouseInWindow() before disabling relative mode.
This function will flush any pending mouse motion for this window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowRelativeMouseMode

**Parameter `window`:** the window to change.

**Parameter `enabled`:** true to enable relative mode, false to disable.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23728).
