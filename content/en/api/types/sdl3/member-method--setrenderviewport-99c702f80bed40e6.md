---
title: "SDLContext.RawApi — Method: SetRenderViewport"
description: "Exact Method: SetRenderViewport contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.99c702f80bed40e6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderViewport

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderViewport`

<a id="api-93843c1a8022773e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderViewport(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLRect*) 7bc138c42d1db203ba3b18e7927bf8188fb67cd890242246a75d995521f37b97 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderViewport(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLRect* rect)
```

Set the drawing area for rendering on the current target.
Drawing will clip to this area (separately from any clipping done with
SDL_SetRenderClipRect), and the top left of the area will become coordinate
(0, 0) for future drawing commands.
The area's width and height must be >= 0.
Each render target has its own viewport. This function sets the viewport
for the current render target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderViewport

**See also:** SDL_RenderViewportSet

**Parameter `renderer`:** the rendering context.

**Parameter `rect`:** the SDL_Rect structure representing the drawing area, or NULL
to set the viewport to the entire target.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40961).
