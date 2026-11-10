---
title: "SDLContext.RawApi — Method: SetWindowResizable"
description: "Exact Method: SetWindowResizable contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7614052abcbba61a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowResizable

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowResizable`

<a id="api-32509f7e52c62520"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowResizable(Inno.Native.Sdl3.SDLWindow*,System.Byte) 971a4c9fa47a49534a24dffa6657cbe716a2d1b9190ce884116ec870fe752dfa -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowResizable(Inno.Native.Sdl3.SDLWindow* window, byte resizable)
```

Set the user-resizable state of a window.
This will add or remove the window's `SDL_WINDOW_RESIZABLE` flag and
allow/disallow user resizing of the window. This is a no-op if the window's
resizable state already matches the requested state.
You can't change the resizable state of a fullscreen window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowFlags

**Parameter `window`:** the window of which to change the resizable state.

**Parameter `resizable`:** true to allow resizing, false to disallow.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30039).
