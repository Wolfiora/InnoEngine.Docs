---
title: "SDLContext.RawApi — Method: SetRenderClipRect"
description: "Exact Method: SetRenderClipRect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.512dba3b5530bac8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderClipRect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderClipRect`

<a id="api-f64be9e4c830a2f0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderClipRect(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLRect*) 46ab6f673a8c003856915b9926c9d1a38ad60a3ea6c7a8b0cc3e1ebb80546fe3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderClipRect(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLRect* rect)
```

Set the clip rectangle for rendering on the specified target.
Each render target has its own clip rectangle. This function sets the
cliprect for the current render target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderClipRect

**See also:** SDL_RenderClipEnabled

**Parameter `renderer`:** the rendering context.

**Parameter `rect`:** an SDL_Rect structure representing the clip area, relative to
the viewport, or NULL to disable clipping.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52391).
