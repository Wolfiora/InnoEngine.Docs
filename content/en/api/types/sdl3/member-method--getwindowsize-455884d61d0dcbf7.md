---
title: "SDLContext.RawApi — Method: GetWindowSize"
description: "Exact Method: GetWindowSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.455884d61d0dcbf7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowSize`

<a id="api-0e2c1c5da0bba729"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowSize(Inno.Native.Sdl3.SDLWindow*,System.Int32*,System.Int32*) 26c930366b3a9734c8e3f37020a10de1a967a0344a22f3027501f2d9853e9f7f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowSize(Inno.Native.Sdl3.SDLWindow* window, int* w, int* h)
```

Get the size of a window's client area.
The window pixel size may differ from its window coordinate size if the
window is on a high pixel density display. Use SDL_GetWindowSizeInPixels()
or SDL_GetRenderOutputSize() to get the real client area size in pixels.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderOutputSize

**See also:** SDL_GetWindowSizeInPixels

**See also:** SDL_SetWindowSize

**See also:** SDL_EVENT_WINDOW_RESIZED

**Parameter `window`:** the window to query the width and height from.

**Parameter `w`:** a pointer filled in with the width of the window, may be NULL.

**Parameter `h`:** a pointer filled in with the height of the window, may be NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26712).
