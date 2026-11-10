---
title: "SDLContext.RawApi — Method: RenderClipEnabled"
description: "Exact Method: RenderClipEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.460a2d77f6e5cfc7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RenderClipEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RenderClipEnabled`

<a id="api-49802d16070497a7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RenderClipEnabled(Inno.Native.Sdl3.SDLRenderer*) e9101ad0f945c94282ec3812bd96bacb8299bd7ecd33ba5e23073ae76f6baf85 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RenderClipEnabled(Inno.Native.Sdl3.SDLRenderer* renderer)
```

Get whether clipping is enabled on the given render target.
Each render target has its own clip rectangle. This function checks the
cliprect for the current render target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderClipRect

**See also:** SDL_SetRenderClipRect

**Parameter `renderer`:** the rendering context.

**Returns:** true if clipping is enabled or false if not; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23213).
