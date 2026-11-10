---
title: "SDLContext.RawApi — Method: RenderViewportSet"
description: "Exact Method: RenderViewportSet contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1ea6ab858ba23976
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderViewportSet

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderViewportSet`

<a id="api-23ef6ee9a944330d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderViewportSet(Inno.Native.Sdl3.SDLRenderer*) 52126d2f7e05ed346de9643b133f65350fd5199bd2271da91a6272b9161267a5 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderViewportSet(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Return whether an explicit rectangle was set as the viewport.
This is useful if you're saving and restoring the viewport and want to know
whether you should restore a specific rectangle or NULL.
Each render target has its own viewport. This function checks the viewport
for the current render target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderViewport

**See also:** SDL_SetRenderViewport

**Parameter `renderer`:** the rendering context.

**Returns:** true if the viewport was set to a specific rectangle, or false if
it was set to NULL (the entire target).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28198).
