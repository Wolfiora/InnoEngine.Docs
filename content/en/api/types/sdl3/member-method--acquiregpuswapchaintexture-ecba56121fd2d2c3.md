---
title: "SDLContext.RawApi — Method: AcquireGpuSwapchainTexture"
description: "Exact Method: AcquireGpuSwapchainTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ecba56121fd2d2c3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: AcquireGpuSwapchainTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `AcquireGpuSwapchainTexture`

<a id="api-38848217d5fc82f4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.AcquireGpuSwapchainTexture(Inno.Native.Sdl3.SDLGPUCommandBuffer*,Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLGPUTexture**,System.UInt32*,System.UInt32*) 2bf47a9fb853a26a5b0db3c8bc70560d094c75b7d08b621f0448d92ca49bbe69 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.AcquireGpuSwapchainTexture(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer, Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLGPUTexture** swapchain_texture, uint* swapchain_texture_width, uint* swapchain_texture_height)
```

Acquire a texture to use in presentation.
When a swapchain texture is acquired on a command buffer, it will
automatically be submitted for presentation when the command buffer is
submitted. The swapchain texture should only be referenced by the command
buffer used to acquire it.
This function will fill the swapchain texture handle with NULL if too many
frames are in flight. This is not an error. This NULL pointer should not be
passed back into SDL. Instead, it should be considered as an indication to
wait until the swapchain is available.
If you use this function, it is possible to create a situation where many
command buffers are allocated while the rendering context waits for the GPU
to catch up, which will cause memory usage to grow. You should use
SDL_WaitAndAcquireGPUSwapchainTexture() unless you know what you are doing
with timing.
The swapchain texture is managed by the implementation and must not be
freed by the user. You MUST NOT call this function from any thread other
than the one that created the window.

**Thread safety:** This function should only be called from the thread that
created the window.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ClaimWindowForGPUDevice

**See also:** SDL_SubmitGPUCommandBuffer

**See also:** SDL_SubmitGPUCommandBufferAndAcquireFence

**See also:** SDL_CancelGPUCommandBuffer

**See also:** SDL_GetWindowSizeInPixels

**See also:** SDL_WaitForGPUSwapchain

**See also:** SDL_WaitAndAcquireGPUSwapchainTexture

**See also:** SDL_SetGPUAllowedFramesInFlight

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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52491).
