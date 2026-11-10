---
title: "SDLContext.RawApi — Method: GetRenderScale"
description: "Exact Method: GetRenderScale contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e0086ade01221602
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetRenderScale

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRenderScale`

<a id="api-86d13cea95e90870"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetRenderScale(Inno.Native.Sdl3.SDLRenderer*,System.Single*,System.Single*) 05bb5349e881d5757b66025e97ca9a625f6861bd1bfe37411a98b53f2ab45a8a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetRenderScale(Inno.Native.Sdl3.SDLRenderer* renderer, float* scaleX, float* scaleY)
```

Get the drawing scale for the current target.
Each render target has its own scale. This function gets the scale for the
current render target.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetRenderScale

**Parameter `renderer`:** the rendering context.

**Parameter `scaleX`:** a pointer filled in with the horizontal scaling factor.

**Parameter `scaleY`:** a pointer filled in with the vertical scaling factor.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26657).
