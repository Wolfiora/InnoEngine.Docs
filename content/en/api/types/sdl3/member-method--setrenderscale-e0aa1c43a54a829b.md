---
title: "SDLContext.RawApi — Method: SetRenderScale"
description: "Exact Method: SetRenderScale contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e0aa1c43a54a829b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetRenderScale

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetRenderScale`

<a id="api-6acea9ed7b9e34af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetRenderScale(Inno.Native.Sdl3.SDLRenderer*,System.Single,System.Single) 5074067a42faabe412733e058d5e87a700a0e7c484bdd1378b02fae361dc9584 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetRenderScale(Inno.Native.Sdl3.SDLRenderer* renderer, float scaleX, float scaleY)
```

Set the drawing scale for rendering on the current target.
The drawing coordinates are scaled by the x/y scaling factors before they
are used by the renderer. This allows resolution independent drawing with a
single coordinate system.
If this results in scaling or subpixel drawing by the rendering backend, it
will be handled using the appropriate quality hints. For best results use
integer scaling factors.
Each render target has its own scale. This function sets the scale for the
current render target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRenderScale

**Parameter `renderer`:** the rendering context.

**Parameter `scaleX`:** the horizontal scaling factor.

**Parameter `scaleY`:** the vertical scaling factor.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19017).
