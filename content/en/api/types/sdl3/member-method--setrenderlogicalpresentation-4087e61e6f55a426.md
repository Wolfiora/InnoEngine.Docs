---
title: "SDLContext.RawApi — Method: SetRenderLogicalPresentation"
description: "Exact Method: SetRenderLogicalPresentation contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4087e61e6f55a426
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderLogicalPresentation

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderLogicalPresentation`

<a id="api-b65385ae27333ef3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderLogicalPresentation(Inno.Native.Sdl3.SDLRenderer*,System.Int32,System.Int32,Inno.Native.Sdl3.SDLRendererLogicalPresentation) 3ade0b1c2324843d0ee0ba3130d1d524d3ae3abbedaaebb4cfd11240fabb6fce -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderLogicalPresentation(Inno.Native.Sdl3.SDLRenderer* renderer, int w, int h, Inno.Native.Sdl3.SDLRendererLogicalPresentation mode)
```

Set a device-independent resolution and presentation mode for rendering.
This function sets the width and height of the logical rendering output.
The renderer will act as if the current render target is always the
requested dimensions, scaling to the actual resolution as necessary.
This can be useful for games that expect a fixed size, but would like to
scale the output to whatever is available, regardless of how a user resizes
a window, or if the display is high DPI.
Logical presentation can be used with both render target textures and the
renderer's window; the state is unique to each render target, and this
function sets the state for the current render target. It might be useful
to draw to a texture that matches the window dimensions with logical
presentation enabled, and then draw that texture across the entire window
with logical presentation disabled. Be careful not to render both with
logical presentation enabled, however, as this could produce
double-letterboxing, etc.
You can disable logical coordinates by setting the mode to
SDL_LOGICAL_PRESENTATION_DISABLED, and in that case you get the full pixel
resolution of the render target; it is safe to toggle logical presentation
during the rendering of a frame: perhaps most of the rendering is done to
specific dimensions but to make fonts look sharp, the app turns off logical
presentation while drawing text, for example.
You can convert coordinates in an event into rendering coordinates using
SDL_ConvertEventToRenderCoordinates().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ConvertEventToRenderCoordinates

**See also:** SDL_GetRenderLogicalPresentation

**See also:** SDL_GetRenderLogicalPresentationRect

**Parameter `renderer`:** the rendering context.

**Parameter `w`:** the width of the logical resolution.

**Parameter `h`:** the height of the logical resolution.

**Parameter `mode`:** the presentation mode used.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46012).
