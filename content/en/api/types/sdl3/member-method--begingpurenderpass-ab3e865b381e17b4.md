---
title: "SDLContext.RawApi — Method: BeginGpuRenderPass"
description: "Exact Method: BeginGpuRenderPass contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ab3e865b381e17b4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BeginGpuRenderPass

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginGpuRenderPass`

<a id="api-ca8ffeddb9751fc3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BeginGpuRenderPass(Inno.Native.Sdl3.SDLGPUCommandBuffer*,Inno.Native.Sdl3.SDLGPUColorTargetInfo*,System.UInt32,Inno.Native.Sdl3.SDLGPUDepthStencilTargetInfo*) 9c21a336c71a67c1ecb92a452c8c40bb4434827a593c38efe404eaf0dffff383 -->

```csharp
public Inno.Native.Sdl3.SDLGPURenderPass* Inno.Native.Sdl3.SDLContext.RawApi.BeginGpuRenderPass(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer, Inno.Native.Sdl3.SDLGPUColorTargetInfo* color_target_infos, uint num_color_targets, Inno.Native.Sdl3.SDLGPUDepthStencilTargetInfo* depth_stencil_target_info)
```

Begins a render pass on a command buffer.
A render pass consists of a set of texture subresources (or depth slices in
the 3D texture case) which will be rendered to during the render pass,
along with corresponding clear values and load/store operations. All
operations related to graphics pipelines must take place inside of a render
pass. A default viewport and scissor state are automatically set when this
is called. You cannot begin another render pass, or begin a compute pass or
copy pass until you have ended the render pass.
Using SDL_GPU_LOADOP_LOAD before any contents have been written to the
texture subresource will result in undefined behavior. SDL_GPU_LOADOP_CLEAR
will set the contents of the texture subresource to a single value before
any rendering is performed. It's fine to do an empty render pass using
SDL_GPU_STOREOP_STORE to clear a texture, but in general it's better to
think of clearing not as an independent operation but as something that's
done as the beginning of a render pass.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_EndGPURenderPass

**Parameter `command_buffer`:** a command buffer.

**Parameter `color_target_infos`:** an array of texture subresources with
corresponding clear values and load/store ops.

**Parameter `num_color_targets`:** the number of color targets in the
color_target_infos array.

**Parameter `depth_stencil_target_info`:** a texture subresource with corresponding
clear value and load/store ops, may be
NULL.

**Returns:** a render pass handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37266).
