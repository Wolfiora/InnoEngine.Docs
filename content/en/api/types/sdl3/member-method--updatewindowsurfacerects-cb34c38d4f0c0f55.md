---
title: "SDLContext.RawApi — Method: UpdateWindowSurfaceRects"
description: "Exact Method: UpdateWindowSurfaceRects contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cb34c38d4f0c0f55
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UpdateWindowSurfaceRects

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateWindowSurfaceRects`

<a id="api-0bb51488108febe8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UpdateWindowSurfaceRects(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLRect*,System.Int32) 6755f81290bac887092f3a590dcfef3b9e19cadc54335d9361b500f4ede0132a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.UpdateWindowSurfaceRects(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLRect* rects, int numrects)
```

Copy areas of the window surface to the screen.
This is the function you use to reflect changes to portions of the surface
on the screen.
This function is equivalent to the SDL 1.2 API SDL_UpdateRects().
Note that this function will update _at least_ the rectangles specified,
but this is only intended as an optimization; in practice, this might
update more of the screen (or all of the screen!), depending on what method
SDL uses to send pixels to the system.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowSurface

**See also:** SDL_UpdateWindowSurface

**Parameter `window`:** the window to update.

**Parameter `rects`:** an array of SDL_Rect structures representing areas of the
surface to copy, in pixels.

**Parameter `numrects`:** the number of rectangles.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20017).
