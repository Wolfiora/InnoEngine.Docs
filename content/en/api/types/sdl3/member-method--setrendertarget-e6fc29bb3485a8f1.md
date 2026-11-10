---
title: "SDLContext.RawApi — Method: SetRenderTarget"
description: "Exact Method: SetRenderTarget contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e6fc29bb3485a8f1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderTarget

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderTarget`

<a id="api-96ee5fc2e89ca77b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderTarget(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLTexture*) 570b759c3fd0a63b6cfbb70a8ceaea232c39556591c0e399f952620b085c3c5c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderTarget(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLTexture* texture)
```

Set a texture as the current rendering target.
The default render target is the window for which the renderer was created.
To stop rendering to a texture and render to the window again, call this
function with a NULL `texture`.
Viewport, cliprect, scale, and logical presentation are unique to each
render target. Get and set functions for these states apply to the current
render target set by this function, and those states persist on each target
when the current render target changes.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderTarget

**Parameter `renderer`:** the rendering context.

**Parameter `texture`:** the targeted texture, which must be created with the
`SDL_TEXTUREACCESS_TARGET` flag, or NULL to render to the
window instead of a texture.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19690).
