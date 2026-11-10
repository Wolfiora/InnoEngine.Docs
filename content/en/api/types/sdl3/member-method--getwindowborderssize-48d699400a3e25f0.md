---
title: "SDLContext.RawApi — Method: GetWindowBordersSize"
description: "Exact Method: GetWindowBordersSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.48d699400a3e25f0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowBordersSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowBordersSize`

<a id="api-2f78b99b0dd731b0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowBordersSize(Inno.Native.Sdl3.SDLWindow*,System.Int32*,System.Int32*,System.Int32*,System.Int32*) 1330c82d18170d3c6e217a021b637c048939d24b51b9db6588fe9c08799df391 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowBordersSize(Inno.Native.Sdl3.SDLWindow* window, int* top, int* left, int* bottom, int* right)
```

Get the size of a window's borders (decorations) around the client area.
Note: If this function fails (returns false), the size values will be
initialized to 0, 0, 0, 0 (if a non-NULL pointer is provided), as if the
window in question was borderless.
Note: This function may fail on systems where the window has not yet been
decorated by the display server (for example, immediately after calling
SDL_CreateWindow). It is recommended that you wait at least until the
window has been presented and composited, so that the window system has a
chance to decorate the window and provide the border dimensions to SDL.
This function also returns false if getting the information is not
supported.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowSize

**Parameter `window`:** the window to query the size values of the border
(decorations) from.

**Parameter `top`:** pointer to variable for storing the size of the top border; NULL
is permitted.

**Parameter `left`:** pointer to variable for storing the size of the left border;
NULL is permitted.

**Parameter `bottom`:** pointer to variable for storing the size of the bottom
border; NULL is permitted.

**Parameter `right`:** pointer to variable for storing the size of the right border;
NULL is permitted.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38608).
