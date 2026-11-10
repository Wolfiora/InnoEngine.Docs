---
title: "SDLContext.RawApi — Method: SetWindowMaximumSize"
description: "Exact Method: SetWindowMaximumSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1ae00b7ba8bf3395
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowMaximumSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowMaximumSize`

<a id="api-7a95ca754de3eb4b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowMaximumSize(Inno.Native.Sdl3.SDLWindow*,System.Int32,System.Int32) d8a885c05d621f8a31710f31b2c64fad71c83c95e45de769cb6a07cf6afe666d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowMaximumSize(Inno.Native.Sdl3.SDLWindow* window, int max_w, int max_h)
```

Set the maximum size of a window's client area.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowMaximumSize

**See also:** SDL_SetWindowMinimumSize

**Parameter `window`:** the window to change.

**Parameter `max_w`:** the maximum width of the window, or 0 for no limit.

**Parameter `max_h`:** the maximum height of the window, or 0 for no limit.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26454).
