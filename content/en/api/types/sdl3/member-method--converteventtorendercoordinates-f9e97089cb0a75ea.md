---
title: "SDLContext.RawApi — Method: ConvertEventToRenderCoordinates"
description: "Exact Method: ConvertEventToRenderCoordinates contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f9e97089cb0a75ea
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ConvertEventToRenderCoordinates

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ConvertEventToRenderCoordinates`

<a id="api-f931dc77bf91b673"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ConvertEventToRenderCoordinates(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLEvent*) 364204be72907fef22952c1dc3caede15c3c38acaad47be2c5fa92e7b41dc50f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ConvertEventToRenderCoordinates(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLEvent* @event)
```

Convert the coordinates in an event to render coordinates.
This takes into account several states:
- The window dimensions.
- The logical presentation settings (SDL_SetRenderLogicalPresentation)
- The scale (SDL_SetRenderScale)
- The viewport (SDL_SetRenderViewport)
Various event types are converted with this function: mouse, touch, pen,
etc.
Touch coordinates are converted from normalized coordinates in the window
to non-normalized rendering coordinates.
Relative mouse coordinates (xrel and yrel event fields) are _also_
converted. Applications that do not want these fields converted should use
SDL_RenderCoordinatesFromWindow() on the specific event fields instead of
converting the entire event structure.
Once converted, coordinates may be outside the rendering area.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderCoordinatesFromWindow

**Parameter `renderer`:** the rendering context.

**Parameter `event`:** the event to modify.

**Returns:** true if the event is converted or doesn't need conversion, or
false on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43273).
