---
title: "SDLContext.RawApi — Method: SetWindowFocusable"
description: "Exact Method: SetWindowFocusable contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.26cf3fc653f530ae
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowFocusable

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowFocusable`

<a id="api-0bfcd2a506ecdbc8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowFocusable(Inno.Native.Sdl3.SDLWindow*,System.Byte) a658ccdc9b68c699eb34bb7b8b97af23814da526180137155e3d0b57fe2a57f7 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowFocusable(Inno.Native.Sdl3.SDLWindow* window, byte focusable)
```

Set whether the window may have input focus.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `window`:** the window to set focusable state.

**Parameter `focusable`:** true to allow input focus, false to not allow input focus.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49823).
