---
title: "SDLContext.RawApi — Method: UnmapGpuTransferBuffer"
description: "Exact Method: UnmapGpuTransferBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0a1bbcfd2c455996
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnmapGpuTransferBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnmapGpuTransferBuffer`

<a id="api-1d67299e3729cf8a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnmapGpuTransferBuffer(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUTransferBuffer*) 0cba7742d3f798d8767f69913dad50c0856435c2f3631290b70631b0c2a06f24 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnmapGpuTransferBuffer(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUTransferBuffer* transfer_buffer)
```

Unmaps a previously mapped transfer buffer.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `transfer_buffer`:** a previously mapped transfer buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19083).
