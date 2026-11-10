---
title: "SDLContext.RawApi — Method: RenderCoordinatesToWindow"
description: "Exact Method: RenderCoordinatesToWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.17d4eb769cebed58
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderCoordinatesToWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderCoordinatesToWindow`

<a id="api-4e0affe99f91c3b3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderCoordinatesToWindow(Inno.Native.Sdl3.SDLRenderer*,System.Single,System.Single,System.Single*,System.Single*) 88a1a6e86ef27ce5e65aba54c1e66baf231e0f0a8abe85b802d04dff97abe339 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderCoordinatesToWindow(Inno.Native.Sdl3.SDLRenderer* renderer, float x, float y, float* window_x, float* window_y)
```

Get a point in window coordinates when given a point in render coordinates.
This takes into account several states:
- The window dimensions.
- The logical presentation settings (SDL_SetRenderLogicalPresentation)
- The scale (SDL_SetRenderScale)
- The viewport (SDL_SetRenderViewport)

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderLogicalPresentation

**See also:** SDL_SetRenderScale

**See also:** SDL_SetRenderViewport

**Parameter `renderer`:** the rendering context.

**Parameter `x`:** the x coordinate in render coordinates.

**Parameter `y`:** the y coordinate in render coordinates.

**Parameter `window_x`:** a pointer filled with the x coordinate in window
coordinates.

**Parameter `window_y`:** a pointer filled with the y coordinate in window
coordinates.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40886).
