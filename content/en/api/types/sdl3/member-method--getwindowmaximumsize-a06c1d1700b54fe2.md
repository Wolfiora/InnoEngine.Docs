---
title: "SDLContext.RawApi — Method: GetWindowMaximumSize"
description: "Exact Method: GetWindowMaximumSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a06c1d1700b54fe2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowMaximumSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowMaximumSize`

<a id="api-fbcfb16e8c382540"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowMaximumSize(Inno.Native.Sdl3.SDLWindow*,System.Int32*,System.Int32*) f226b9e154cb187a2c75c6d2ce1b8f0cb27a7dedeb2bc04d6f12bdf7a16067a3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowMaximumSize(Inno.Native.Sdl3.SDLWindow* window, int* w, int* h)
```

Get the maximum size of a window's client area.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowMinimumSize

**See also:** SDL_SetWindowMaximumSize

**Parameter `window`:** the window to query.

**Parameter `w`:** a pointer filled in with the maximum width of the window, may be
NULL.

**Parameter `h`:** a pointer filled in with the maximum height of the window, may be
NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27852).
