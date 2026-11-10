---
title: "SDLContext.RawApi — Method: WarpMouseInWindow"
description: "Exact Method: WarpMouseInWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ae5edd9d0bd9e5c9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WarpMouseInWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WarpMouseInWindow`

<a id="api-651121128f576b8a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WarpMouseInWindow(Inno.Native.Sdl3.SDLWindow*,System.Single,System.Single) 628b37dfe34b37d2108e451260066e465cb7cb9db5ac4c73870e3de1bedece43 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.WarpMouseInWindow(Inno.Native.Sdl3.SDLWindow* window, float x, float y)
```

Move the mouse cursor to the given position within the window.
This function generates a mouse motion event if relative mode is not
enabled. If relative mode is enabled, you can force mouse events for the
warp by setting the SDL_HINT_MOUSE_RELATIVE_WARP_MOTION hint.
Note that this function will appear to succeed, but not actually move the
mouse when used over Microsoft Remote Desktop.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WarpMouseGlobal

**Parameter `window`:** the window to move the mouse into, or NULL for the current
mouse focus.

**Parameter `x`:** the x coordinate within the window.

**Parameter `y`:** the y coordinate within the window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19981).
