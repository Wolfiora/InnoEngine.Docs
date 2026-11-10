---
title: "SDLContext.RawApi — Method: ReleaseGpuTransferBuffer"
description: "Exact Method: ReleaseGpuTransferBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d1fac6e1c348b31c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReleaseGpuTransferBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReleaseGpuTransferBuffer`

<a id="api-e60f68bdcb7a8165"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuTransferBuffer(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUTransferBuffer*) 2b870959c80296d189d2ec59bca3e15306560c812cc897d8c17e0022685da256 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuTransferBuffer(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUTransferBuffer* transfer_buffer)
```

Frees the given transfer buffer as soon as it is safe to do so.
You must not reference the transfer buffer after calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `transfer_buffer`:** a transfer buffer to be destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49842).
