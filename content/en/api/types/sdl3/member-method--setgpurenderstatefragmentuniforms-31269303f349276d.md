---
title: "SDLContext.RawApi — Method: SetGpuRenderStateFragmentUniforms"
description: "Exact Method: SetGpuRenderStateFragmentUniforms contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.31269303f349276d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuRenderStateFragmentUniforms

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuRenderStateFragmentUniforms`

<a id="api-ffdd4118eeaa5a53"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuRenderStateFragmentUniforms(Inno.Native.Sdl3.SDLGPURenderState*,System.UInt32,System.Void*,System.UInt32) 24e4bcbd0b6a4d1fae94702e09656efae9e77942565fcd92f24167251617f025 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGpuRenderStateFragmentUniforms(Inno.Native.Sdl3.SDLGPURenderState* state, uint slot_index, void* data, uint length)
```

Set fragment shader uniform variables in a custom GPU render state.
The data is copied and will be pushed using
SDL_PushGPUFragmentUniformData() during draw call execution.

**Thread safety:** This function should be called on the thread that created the
renderer.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `state`:** the state to modify.

**Parameter `slot_index`:** the fragment uniform slot to push data to.

**Parameter `data`:** client data to write.

**Parameter `length`:** the length of the data to write.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42022).
