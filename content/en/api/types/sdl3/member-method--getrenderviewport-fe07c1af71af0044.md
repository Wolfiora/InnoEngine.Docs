---
title: "SDLContext.RawApi — Method: GetRenderViewport"
description: "Exact Method: GetRenderViewport contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fe07c1af71af0044
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderViewport

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderViewport`

<a id="api-87d95808e6b7fea3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderViewport(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLRect*) dbfe215a5ef98d9e86ab6787afdc8ff8c95742e53fe58cc6b5377947c44d266a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderViewport(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLRect* rect)
```

Get the drawing area for the current target.
Each render target has its own viewport. This function gets the viewport
for the current render target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderViewportSet

**See also:** SDL_SetRenderViewport

**Parameter `renderer`:** the rendering context.

**Parameter `rect`:** an SDL_Rect structure filled in with the current drawing area.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34756).
