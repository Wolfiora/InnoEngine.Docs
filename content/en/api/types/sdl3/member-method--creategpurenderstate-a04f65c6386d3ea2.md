---
title: "SDLContext.RawApi — Method: CreateGpuRenderState"
description: "Exact Method: CreateGpuRenderState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a04f65c6386d3ea2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuRenderState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuRenderState`

<a id="api-96b80645eaee1cdc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuRenderState(Inno.Native.Sdl3.SDLRenderer*,Inno.Native.Sdl3.SDLGPURenderStateCreateInfo*) f6dc17452380dd55e9382a82793efd8d57195019325fed81bb5d5b56f4d56a43 -->

```csharp
public Inno.Native.Sdl3.SDLGPURenderState* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuRenderState(Inno.Native.Sdl3.SDLRenderer* renderer, Inno.Native.Sdl3.SDLGPURenderStateCreateInfo* createinfo)
```

Create custom GPU render state.

**Thread safety:** This function should be called on the thread that created the
renderer.

**Upstream availability:** This function is available since SDL 3.4.0.

**See also:** SDL_SetGPURenderStateFragmentUniforms

**See also:** SDL_SetGPURenderState

**See also:** SDL_DestroyGPURenderState

**Parameter `renderer`:** the renderer to use.

**Parameter `createinfo`:** a struct describing the GPU render state to create.

**Returns:** a custom GPU render state or NULL on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37775).
