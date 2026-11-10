---
title: "SDLContext.RawApi — Method: ShowWindowSystemMenu"
description: "Exact Method: ShowWindowSystemMenu contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2c03ae211282aa2f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ShowWindowSystemMenu

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ShowWindowSystemMenu`

<a id="api-51d87b12d005ed1a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ShowWindowSystemMenu(Inno.Native.Sdl3.SDLWindow*,System.Int32,System.Int32) 395c6e326ae91a0a2051c9311bddff8bc05df2141ff9dc93c2ea501e331aed17 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ShowWindowSystemMenu(Inno.Native.Sdl3.SDLWindow* window, int x, int y)
```

Display the system-level window menu.
This default window menu is provided by the system and on some platforms
provides functionality for setting or changing privileged state on the
window, such as moving it between workspaces or displays, or toggling the
always-on-top property.
On platforms or desktops where this is unsupported, this function does
nothing.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window for which the menu will be displayed.

**Parameter `x`:** the x coordinate of the menu, relative to the origin (top-left) of
the client area.

**Parameter `y`:** the y coordinate of the menu, relative to the origin (top-left) of
the client area.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40394).
