---
title: "SDLContext.RawApi — Method: WaitAndAcquireGpuSwapchainTexture"
description: "Exact Method: WaitAndAcquireGpuSwapchainTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.11b103fc949c96ad
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitAndAcquireGpuSwapchainTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitAndAcquireGpuSwapchainTexture`

<a id="api-325e7031384d67bc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitAndAcquireGpuSwapchainTexture(Inno.Native.Sdl3.SDLGPUCommandBuffer*,Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLGPUTexture**,System.UInt32*,System.UInt32*) adcd71a8e310218e18b5e9b1989c3a37968c704ed47c68e68a7ac57a598600e4 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WaitAndAcquireGpuSwapchainTexture(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer, Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLGPUTexture** swapchain_texture, uint* swapchain_texture_width, uint* swapchain_texture_height)
```

Blocks the thread until a swapchain texture is available to be acquired,
and then acquires it.
When a swapchain texture is acquired on a command buffer, it will
automatically be submitted for presentation when the command buffer is
submitted. The swapchain texture should only be referenced by the command
buffer used to acquire it. It is an error to call
SDL_CancelGPUCommandBuffer() after a swapchain texture is acquired.
This function can fill the swapchain texture handle with NULL in certain
cases, for example if the window is minimized. This is not an error. You
should always make sure to check whether the pointer is NULL before
actually using it.
The swapchain texture is managed by the implementation and must not be
freed by the user. You MUST NOT call this function from any thread other
than the one that created the window.
The swapchain texture is write-only and cannot be used as a sampler or for
another reading operation.

**Thread safety:** This function should only be called from the thread that
created the window.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SubmitGPUCommandBuffer

**See also:** SDL_SubmitGPUCommandBufferAndAcquireFence

**See also:** SDL_AcquireGPUSwapchainTexture

**Parameter `command_buffer`:** a command buffer.

**Parameter `window`:** a window that has been claimed.

**Parameter `swapchain_texture`:** a pointer filled in with a swapchain texture
handle.

**Parameter `swapchain_texture_width`:** a pointer filled in with the swapchain
texture width, may be NULL.

**Parameter `swapchain_texture_height`:** a pointer filled in with the swapchain
texture height, may be NULL.

**Returns:** true on success, false on error; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32736).
