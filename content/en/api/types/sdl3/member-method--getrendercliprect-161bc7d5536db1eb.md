---
title: "SDLContext.RawApi — Method: GetRenderClipRect"
description: "Exact Method: GetRenderClipRect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.161bc7d5536db1eb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderClipRect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderClipRect`

<a id="api-d636e01a64f1fd44"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderClipRect(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLRect*) b96e4acf42e2c92a552c976d9208e6fc6d7acfc5c8a8dc4c820893e0ca957515 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderClipRect(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLRect* rect)
```

Get the clip rectangle for the current target.
Each render target has its own clip rectangle. This function gets the
cliprect for the current render target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RenderClipEnabled

**See also:** SDL_SetRenderClipRect

**Parameter `renderer`:** the rendering context.

**Parameter `rect`:** an SDL_Rect structure filled in with the current clipping area
or an empty rectangle if clipping is disabled.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44014).
