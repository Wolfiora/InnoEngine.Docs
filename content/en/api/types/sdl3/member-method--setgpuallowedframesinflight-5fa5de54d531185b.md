---
title: "SDLContext.RawApi — Method: SetGpuAllowedFramesInFlight"
description: "Exact Method: SetGpuAllowedFramesInFlight contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5fa5de54d531185b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuAllowedFramesInFlight

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuAllowedFramesInFlight`

<a id="api-faa582892d9a8d9b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuAllowedFramesInFlight(Inno.Native.Sdl3.SDLGPUDevice*,System.UInt32) da934b434fcd64627fbc6ebdedb01b3a5b7689f2f951c4b586375c6a2ce3c40c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGpuAllowedFramesInFlight(Inno.Native.Sdl3.SDLGPUDevice* device, uint allowed_frames_in_flight)
```

Configures the maximum allowed number of frames in flight.
The default value when the device is created is 2. This means that after
you have submitted 2 frames for presentation, if the GPU has not finished
working on the first frame, SDL_AcquireGPUSwapchainTexture() will fill the
swapchain texture pointer with NULL, and
SDL_WaitAndAcquireGPUSwapchainTexture() will block.
Higher values increase throughput at the expense of visual latency. Lower
values decrease visual latency at the expense of throughput.
Note that calling this function will stall and flush the command queue to
prevent synchronization issues.
The minimum value of allowed frames in flight is 1, and the maximum is 3.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `allowed_frames_in_flight`:** the maximum number of frames that can be
pending on the GPU.

**Returns:** true if successful, false on error; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42754).
