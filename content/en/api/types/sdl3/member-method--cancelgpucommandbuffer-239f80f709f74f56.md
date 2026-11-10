---
title: "SDLContext.RawApi — Method: CancelGpuCommandBuffer"
description: "Exact Method: CancelGpuCommandBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.239f80f709f74f56
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CancelGpuCommandBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CancelGpuCommandBuffer`

<a id="api-65e25792f1ca1a30"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CancelGpuCommandBuffer(Inno.Native.Sdl3.SDLGPUCommandBuffer*) 128dbddd64f2e5a25e7fd2b1804f092d15c1b3aadaa49bdd23bdbd395a957a5b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.CancelGpuCommandBuffer(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer)
```

Cancels a command buffer.
None of the enqueued commands are executed.
It is an error to call this function after a swapchain texture has been
acquired.
This must be called from the thread the command buffer was acquired on.
You must not reference the command buffer after calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WaitAndAcquireGPUSwapchainTexture

**See also:** SDL_AcquireGPUCommandBuffer

**See also:** SDL_AcquireGPUSwapchainTexture

**Parameter `command_buffer`:** a command buffer.

**Returns:** true on success, false on error; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32073).
