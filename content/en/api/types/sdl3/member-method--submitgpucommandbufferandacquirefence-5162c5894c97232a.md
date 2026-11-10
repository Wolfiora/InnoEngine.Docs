---
title: "SDLContext.RawApi — Method: SubmitGpuCommandBufferAndAcquireFence"
description: "Exact Method: SubmitGpuCommandBufferAndAcquireFence contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5162c5894c97232a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SubmitGpuCommandBufferAndAcquireFence

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SubmitGpuCommandBufferAndAcquireFence`

<a id="api-0c3625d747414710"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SubmitGpuCommandBufferAndAcquireFence(Inno.Native.Sdl3.SDLGPUCommandBuffer*) 3dbec0bd4575426c5d68da40b1f4c2f4699d2ccce06b41185b20b1f97ea3e243 -->

```csharp
public Inno.Native.Sdl3.SDLGPUFence* Inno.Native.Sdl3.SDLContext.RawApi.SubmitGpuCommandBufferAndAcquireFence(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer)
```

Submits a command buffer so its commands can be processed on the GPU, and
acquires a fence associated with the command buffer.
You must release this fence when it is no longer needed or it will cause a
leak. It is invalid to use the command buffer after this is called.
This must be called from the thread the command buffer was acquired on.
All commands in the submission are guaranteed to begin executing before any
command in a subsequent submission begins executing.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AcquireGPUCommandBuffer

**See also:** SDL_WaitAndAcquireGPUSwapchainTexture

**See also:** SDL_AcquireGPUSwapchainTexture

**See also:** SDL_SubmitGPUCommandBuffer

**See also:** SDL_ReleaseGPUFence

**Parameter `command_buffer`:** a command buffer.

**Returns:** a fence associated with the command buffer, or NULL on failure;
call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33755).
