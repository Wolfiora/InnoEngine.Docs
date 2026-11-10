---
title: "SDLContext.RawApi — Method: SetWindowAlwaysOnTop"
description: "Exact Method: SetWindowAlwaysOnTop contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7f44331849e4f600
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowAlwaysOnTop

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowAlwaysOnTop`

<a id="api-6039c96fbf1532f0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowAlwaysOnTop(Inno.Native.Sdl3.SDLWindow*,System.Byte) 6641e119d0bdbe3143510226c936c216759e0b97a2bcbb6bbc2f60ab603ae10a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowAlwaysOnTop(Inno.Native.Sdl3.SDLWindow* window, byte on_top)
```

Set the window to always be above the others.
This will add or remove the window's `SDL_WINDOW_ALWAYS_ON_TOP` flag. This
will bring the window to the front and keep the window above the rest.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowFlags

**Parameter `window`:** the window of which to change the always on top state.

**Parameter `on_top`:** true to set the window always on top, false to disable.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42606).
