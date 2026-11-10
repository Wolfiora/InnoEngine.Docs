---
title: "SDLContext.RawApi — Method: SetGpuRenderStateSamplerBindings"
description: "Exact Method: SetGpuRenderStateSamplerBindings contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.df9a8d7027a011cd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuRenderStateSamplerBindings

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuRenderStateSamplerBindings`

<a id="api-9fd0f0b2cd491737"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuRenderStateSamplerBindings(Inno.Native.Sdl3.SDLGPURenderState*,System.Int32,Inno.Native.Sdl3.SDLGPUTextureSamplerBinding*) 52bccf9bf369e386ff7bf6d19d1b23260eb32802d70a0d5ce01605cef3694de6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGpuRenderStateSamplerBindings(Inno.Native.Sdl3.SDLGPURenderState* state, int num_sampler_bindings, Inno.Native.Sdl3.SDLGPUTextureSamplerBinding* sampler_bindings)
```

Set sampler bindings variables in a custom GPU render state.
The data is copied and will be binded using SDL_BindGPUFragmentSamplers()
during draw call execution.

**Thread safety:** This function should be called on the thread that created the
renderer.

**Upstream availability:** This function is available since SDL 3.6.0.

**Parameter `state`:** the state to modify.

**Parameter `num_sampler_bindings`:** The number of additional fragment samplers to
bind.

**Parameter `sampler_bindings`:** Additional fragment samplers to bind.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17320).
