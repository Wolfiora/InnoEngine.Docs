---
title: "SDLContext.RawApi — Method: CreatePopupWindow"
description: "Exact Method: CreatePopupWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.103801474635ab37
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreatePopupWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreatePopupWindow`

<a id="api-9d8c53623a8f9572"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreatePopupWindow(Inno.Native.Sdl3.SDLWindow*,System.Int32,System.Int32,System.Int32,System.Int32,System.UInt64) 29a9e7350d1cf9164efc781831e62e18901f0abb0c9350ce741e25c7a5ded977 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.CreatePopupWindow(Inno.Native.Sdl3.SDLWindow* parent, int offset_x, int offset_y, int w, int h, ulong flags)
```

Create a child popup window of the specified parent window.
The window size is a request and may be different than expected based on
the desktop layout and window manager policies. Your application should be
prepared to handle a window of any size.
The flags parameter **must** contain at least one of the following:
- `SDL_WINDOW_TOOLTIP`: The popup window is a tooltip and will not pass any
input events.
- `SDL_WINDOW_POPUP_MENU`: The popup window is a popup menu. The topmost
popup menu will implicitly gain the keyboard focus.
The following flags are not relevant to popup window creation and will be
ignored:
- `SDL_WINDOW_MINIMIZED`
- `SDL_WINDOW_MAXIMIZED`
- `SDL_WINDOW_FULLSCREEN`
- `SDL_WINDOW_BORDERLESS`
The following flags are incompatible with popup window creation and will
cause it to fail:
- `SDL_WINDOW_UTILITY`
- `SDL_WINDOW_MODAL`
The parent parameter **must** be non-null and a valid window. The parent of
a popup window can be either a regular, toplevel window, or another popup
window.
Popup windows cannot be minimized, maximized, made fullscreen, raised,
flash, be made a modal window, be the parent of a toplevel window, or grab
the mouse and/or keyboard. Attempts to do so will fail.
Popup windows implicitly do not have a border/decorations and do not appear
on the taskbar/dock or in lists of windows such as alt-tab menus.
By default, popup window positions will automatically be constrained to
keep the entire window within display bounds. This can be overridden with
the `SDL_PROP_WINDOW_CREATE_CONSTRAIN_POPUP_BOOLEAN` property.
By default, popup menus will automatically grab keyboard focus from the
parent when shown. This behavior can be overridden by setting the
`SDL_WINDOW_NOT_FOCUSABLE` flag, setting the
`SDL_PROP_WINDOW_CREATE_FOCUSABLE_BOOLEAN` property to false, or toggling
it after creation via the `SDL_SetWindowFocusable()` function.
If a parent window is hidden or destroyed, any child popup windows will be
recursively hidden or destroyed as well. Child popup windows not explicitly
hidden will be restored when the parent is shown.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateWindow

**See also:** SDL_CreateWindowWithProperties

**See also:** SDL_DestroyWindow

**See also:** SDL_GetWindowParent

**Parameter `parent`:** the parent of the window, must not be NULL.

**Parameter `offset_x`:** the x position of the popup window relative to the origin
of the parent.

**Parameter `offset_y`:** the y position of the popup window relative to the origin
of the parent window.

**Parameter `w`:** the width of the window.

**Parameter `h`:** the height of the window.

**Parameter `flags`:** SDL_WINDOW_TOOLTIP or SDL_WINDOW_POPUP_MENU, and zero or more
additional SDL_WindowFlags OR'd together.

**Returns:** the window that was created or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24147).
