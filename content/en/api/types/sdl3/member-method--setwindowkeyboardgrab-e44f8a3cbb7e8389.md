---
title: "SDLContext.RawApi — Method: SetWindowKeyboardGrab"
description: "Exact Method: SetWindowKeyboardGrab contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e44f8a3cbb7e8389
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowKeyboardGrab

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowKeyboardGrab`

<a id="api-56051b71d2d3e45e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowKeyboardGrab(Inno.Native.Sdl3.SDLWindow*,System.Byte) f0cf1130803a13d978b8eb172d956dc3b9d75e430a8f4670b69d324fd43b598e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowKeyboardGrab(Inno.Native.Sdl3.SDLWindow* window, byte grabbed)
```

Set a window's keyboard grab mode.
Keyboard grab enables capture of system keyboard shortcuts like Alt+Tab or
the Meta/Super key. Note that not all system keyboard shortcuts can be
captured by applications (one example is Ctrl+Alt+Del on Windows).
This is primarily intended for specialized applications such as VNC clients
or VM frontends. Normal games should not use keyboard grab.
When keyboard grab is enabled, SDL will continue to handle Alt+Tab when the
window is full-screen to ensure the user is not trapped in your
application. If you have a custom keyboard shortcut to exit fullscreen
mode, you may suppress this behavior with
`SDL_HINT_ALLOW_ALT_TAB_WHILE_GRABBED`.
If the caller enables a grab while another window is currently grabbed, the
other window loses its grab in favor of the caller's window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowKeyboardGrab

**See also:** SDL_SetWindowMouseGrab

**Parameter `window`:** the window for which the keyboard grab mode should be set.

**Parameter `grabbed`:** this is true to grab keyboard, and false to release.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23796).
