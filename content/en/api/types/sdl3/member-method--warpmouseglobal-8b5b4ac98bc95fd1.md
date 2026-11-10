---
title: "SDLContext.RawApi — Method: WarpMouseGlobal"
description: "Exact Method: WarpMouseGlobal contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8b5b4ac98bc95fd1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WarpMouseGlobal

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WarpMouseGlobal`

<a id="api-555a6227f7f22e55"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WarpMouseGlobal(System.Single,System.Single) a21a015ce41f2c15d820b304302599a1195e9af90ff33f1b3dc3807ee9f05400 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WarpMouseGlobal(float x, float y)
```

Move the mouse to the given position in global screen space.
This function generates a mouse motion event.
A failure of this function usually means that it is unsupported by a
platform.
Note that this function will appear to succeed, but not actually move the
mouse when used over Microsoft Remote Desktop.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WarpMouseInWindow

**Parameter `x`:** the x coordinate.

**Parameter `y`:** the y coordinate.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19893).
