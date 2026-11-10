---
title: "SDLContext.RawApi — Method: GetWindowSurface"
description: "Exact Method: GetWindowSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fa635167da3fc226
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowSurface`

<a id="api-0b875fd58f79cc76"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowSurface(Inno.Native.Sdl3.SDLWindow*) 3deebf326b3cb963b8e3fe96ef4b1d42ef0330e15f5a6d3505ed086c45a8961c -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.GetWindowSurface(Inno.Native.Sdl3.SDLWindow* window)
```

Get the SDL surface associated with the window.
A new surface will be created with the optimal format for the window, if
necessary. This surface will be freed when the window is destroyed. Do not
free this surface.
This surface will be invalidated if the window is resized. After resizing a
window this function must be called again to return a valid surface.
You may not combine this with 3D or the rendering API on this window.
This function is affected by `SDL_HINT_FRAMEBUFFER_ACCELERATION`.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyWindowSurface

**See also:** SDL_WindowHasSurface

**See also:** SDL_UpdateWindowSurface

**See also:** SDL_UpdateWindowSurfaceRects

**Parameter `window`:** the window to query.

**Returns:** the surface associated with the window, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18385).
