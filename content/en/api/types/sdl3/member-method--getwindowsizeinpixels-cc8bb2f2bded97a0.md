---
title: "SDLContext.RawApi — Method: GetWindowSizeInPixels"
description: "Exact Method: GetWindowSizeInPixels contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cc8bb2f2bded97a0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowSizeInPixels

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowSizeInPixels`

<a id="api-319626e93452c21c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowSizeInPixels(Inno.Native.Sdl3.SDLWindow*,System.Int32*,System.Int32*) df6eb29ee03cae63d6ae8c66d75d36692796fc88513af38b05544eedec30f118 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowSizeInPixels(Inno.Native.Sdl3.SDLWindow* window, int* w, int* h)
```

Get the size of a window's client area, in pixels.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateWindow

**See also:** SDL_GetWindowSize

**Parameter `window`:** the window from which the drawable size should be queried.

**Parameter `w`:** a pointer to variable for storing the width in pixels, may be
NULL.

**Parameter `h`:** a pointer to variable for storing the height in pixels, may be
NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45127).
