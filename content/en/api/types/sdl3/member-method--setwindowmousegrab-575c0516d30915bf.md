---
title: "SDLContext.RawApi — Method: SetWindowMouseGrab"
description: "Exact Method: SetWindowMouseGrab contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.575c0516d30915bf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowMouseGrab

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowMouseGrab`

<a id="api-dc22cec467195b29"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowMouseGrab(Inno.Native.Sdl3.SDLWindow*,System.Byte) 89cf578de21cab148e02f4f1354ca83d2ded20688004fc61f0801d7fac525fdf -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowMouseGrab(Inno.Native.Sdl3.SDLWindow* window, byte grabbed)
```

Set a window's mouse grab mode.
Mouse grab confines the mouse cursor to the window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowMouseRect

**See also:** SDL_SetWindowMouseRect

**See also:** SDL_SetWindowKeyboardGrab

**Parameter `window`:** the window for which the mouse grab mode should be set.

**Parameter `grabbed`:** this is true to grab mouse, and false to release.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41009).
