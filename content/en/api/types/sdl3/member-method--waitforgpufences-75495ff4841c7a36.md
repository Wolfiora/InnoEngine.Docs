---
title: "SDLContext.RawApi — Method: WaitForGpuFences"
description: "Exact Method: WaitForGpuFences contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.75495ff4841c7a36
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitForGpuFences

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitForGpuFences`

<a id="api-34d42eac933c42a6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitForGpuFences(Inno.Native.Sdl3.SDLGPUDevice*,System.Byte,Inno.Native.Sdl3.SDLGPUFence**,System.UInt32) a864b4851e5c0659a36f89065c9cc39183e9b9da339229712632162fa46e3cee -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WaitForGpuFences(Inno.Native.Sdl3.SDLGPUDevice* device, byte wait_all, Inno.Native.Sdl3.SDLGPUFence** fences, uint num_fences)
```

Blocks the thread until the given fences are signaled.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SubmitGPUCommandBufferAndAcquireFence

**See also:** SDL_WaitForGPUIdle

**Parameter `device`:** a GPU context.

**Parameter `wait_all`:** if 0, wait for any fence to be signaled, if 1, wait for all
fences to be signaled.

**Parameter `fences`:** an array of fences to wait on.

**Parameter `num_fences`:** the number of fences in the fences array.

**Returns:** true on success, false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44348).
