---
title: "SDLContext.RawApi — Method: SetWindowBordered"
description: "Exact Method: SetWindowBordered contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.24fa2bf0053517a2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowBordered

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowBordered`

<a id="api-0849f4dcf0c592f0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowBordered(Inno.Native.Sdl3.SDLWindow*,System.Byte) 2d55ca72a79f1a404883aaab65843ce1c387745609a20d8d3e1a310e01b34d68 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowBordered(Inno.Native.Sdl3.SDLWindow* window, byte bordered)
```

Set the border state of a window.
This will add or remove the window's `SDL_WINDOW_BORDERLESS` flag and add
or remove the border from the actual window. This is a no-op if the
window's border already matches the requested state.
You can't change the border state of a fullscreen window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowFlags

**Parameter `window`:** the window of which to change the border state.

**Parameter `bordered`:** false to remove border, true to add border.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37960).
