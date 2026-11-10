---
title: "SDLContext.RawApi — Method: RenderCoordinatesFromWindow"
description: "Exact Method: RenderCoordinatesFromWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.63ae980c60168795
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderCoordinatesFromWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderCoordinatesFromWindow`

<a id="api-90a100d5e8459801"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderCoordinatesFromWindow(Inno.Native.Sdl3.SDLRenderer*,System.Single,System.Single,System.Single*,System.Single*) 22f4758107575809183e1787b34c916bbf79f764f7f2412a82d96ff6976917c8 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderCoordinatesFromWindow(Inno.Native.Sdl3.SDLRenderer* renderer, float window_x, float window_y, float* x, float* y)
```

Get a point in render coordinates when given a point in window coordinates.
This takes into account several states:
- The window dimensions.
- The logical presentation settings (SDL_SetRenderLogicalPresentation)
- The scale (SDL_SetRenderScale)
- The viewport (SDL_SetRenderViewport)

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderLogicalPresentation

**See also:** SDL_SetRenderScale

**Parameter `renderer`:** the rendering context.

**Parameter `window_x`:** the x coordinate in window coordinates.

**Parameter `window_y`:** the y coordinate in window coordinates.

**Parameter `x`:** a pointer filled with the x coordinate in render coordinates.

**Parameter `y`:** a pointer filled with the y coordinate in render coordinates.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38869).
