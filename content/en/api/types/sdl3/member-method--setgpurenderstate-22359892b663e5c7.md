---
title: "SDLContext.RawApi — Method: SetGpuRenderState"
description: "Exact Method: SetGpuRenderState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.22359892b663e5c7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuRenderState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuRenderState`

<a id="api-74517d3d2ffc3318"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuRenderState(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLGPURenderState*) 2ee4c269b6cf598305656c51fdadde60975f87d99d012c2d09819c5808ba4821 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGpuRenderState(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLGPURenderState* state)
```

Set custom GPU render state.
This function sets custom GPU render state for subsequent draw calls. This
allows using custom shaders with the GPU renderer.

**Thread safety:** This function should be called on the thread that created the
renderer.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `renderer`:** the renderer to use.

**Parameter `state`:** the state to to use, or NULL to clear custom GPU render state.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44869).
