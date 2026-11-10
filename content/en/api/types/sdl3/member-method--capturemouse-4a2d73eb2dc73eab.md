---
title: "SDLContext — Method: CaptureMouse"
description: "Exact Method: CaptureMouse contracts in SDLContext."
uid: api.inno.native.sdl3.4a2d73eb2dc73eab
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: CaptureMouse

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CaptureMouse`

<a id="api-e3b83a79d62d9727"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.CaptureMouse(System.Boolean) a10ad31c86ce0ab3321622c43a6e6db5b8ea0e01512a3b2f9102867b408d030c -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.CaptureMouse(bool enabled)
```

Capture the mouse and to track input outside an SDL window.
Capturing enables your app to obtain mouse events globally, instead of just
within your window. Not all video targets support this function. When
capturing is enabled, the current window will get all mouse events, but
unlike relative mode, no change is made to the cursor and it is not
restrained to your window.
This function may also deny mouse input to other windows--both those in
your application and others on the system--so you should use this function
sparingly, and in small bursts. For example, you might want to track the
mouse while the user is dragging something, until the user releases a mouse
button. It is not recommended that you capture the mouse for long periods
of time, such as the entire time your app is running. For that, you should
probably use SDL_SetWindowRelativeMouseMode() or SDL_SetWindowMouseGrab(),
depending on your goals.
While captured, mouse events still report coordinates relative to the
current (foreground) window, but those coordinates may be outside the
bounds of the window (including negative values). Capturing is only allowed
for the foreground window. If the window loses focus while capturing, the
capture will be disabled automatically.
While capturing is enabled, the current window will have the
`SDL_WINDOW_MOUSE_CAPTURE` flag set.
Please note that SDL will attempt to "auto capture" the mouse while the
user is pressing a button; this is to try and make mouse behavior more
consistent between platforms, and deal with the common case of a user
dragging the mouse outside of the window. This means that if you are
calling SDL_CaptureMouse() only to deal with this situation, you do not
have to (although it is safe to do so). If this causes problems for your
app, you can disable auto capture by setting the
`SDL_HINT_MOUSE_AUTO_CAPTURE` hint to zero.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGlobalMouseState

**Parameter `enabled`:** true to enable capturing, false to disable.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16423).
