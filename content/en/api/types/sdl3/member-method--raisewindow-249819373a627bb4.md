---
title: "SDLContext.RawApi — Method: RaiseWindow"
description: "Exact Method: RaiseWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.249819373a627bb4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RaiseWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RaiseWindow`

<a id="api-c445bafb584183f6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RaiseWindow(Inno.Native.Sdl3.SDLWindow*) 890f65945c163827de6b0daec84e9aea38f338cf78193e0933e51a2731b57cd2 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RaiseWindow(Inno.Native.Sdl3.SDLWindow* window)
```

Request that a window be raised above other windows and gain the input
focus.
The result of this request is subject to desktop window manager policy,
particularly if raising the requested window would result in stealing focus
from another application. If the window is successfully raised and gains
input focus, an SDL_EVENT_WINDOW_FOCUS_GAINED event will be emitted, and
the window will have the SDL_WINDOW_INPUT_FOCUS flag set.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to raise.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24597).
