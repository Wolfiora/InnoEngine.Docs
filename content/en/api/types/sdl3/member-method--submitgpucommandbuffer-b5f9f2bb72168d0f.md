---
title: "SDLContext.RawApi — Method: SubmitGpuCommandBuffer"
description: "Exact Method: SubmitGpuCommandBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b5f9f2bb72168d0f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SubmitGpuCommandBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SubmitGpuCommandBuffer`

<a id="api-8fcf8aa7d6e013cb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SubmitGpuCommandBuffer(Inno.Native.Sdl3.SDLGPUCommandBuffer*) e1f399b24688e42106ffa175a65f87478459ef3cd97eee73693c7797d6799129 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SubmitGpuCommandBuffer(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer)
```

Submits a command buffer so its commands can be processed on the GPU.
It is invalid to use the command buffer after this is called.
This must be called from the thread the command buffer was acquired on.
All commands in the submission are guaranteed to begin executing before any
command in a subsequent submission begins executing.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AcquireGPUCommandBuffer

**See also:** SDL_WaitAndAcquireGPUSwapchainTexture

**See also:** SDL_AcquireGPUSwapchainTexture

**See also:** SDL_SubmitGPUCommandBufferAndAcquireFence

**Parameter `command_buffer`:** a command buffer.

**Returns:** true on success, false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25542).
