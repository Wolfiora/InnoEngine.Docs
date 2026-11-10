---
title: "SDLContext.RawApi — Method: DownloadFromGpuBuffer"
description: "Exact Method: DownloadFromGpuBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d749ca758bc688fb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DownloadFromGpuBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DownloadFromGpuBuffer`

<a id="api-0031ed9c6e91c0d3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DownloadFromGpuBuffer(Inno.Native.Sdl3.SDLGPUCopyPass*,Inno.Native.Sdl3.SDLGPUBufferRegion*,Inno.Native.Sdl3.SDLGPUTransferBufferLocation*) 81cd0ca62b7dd835e739b1b4aca761375d60c82c2f5b840091523afddc6a3433 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DownloadFromGpuBuffer(Inno.Native.Sdl3.SDLGPUCopyPass* copy_pass, Inno.Native.Sdl3.SDLGPUBufferRegion* source, Inno.Native.Sdl3.SDLGPUTransferBufferLocation* destination)
```

Copies data from a buffer to a transfer buffer on the GPU timeline.
This data is not guaranteed to be copied until the command buffer fence is
signaled.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `copy_pass`:** a copy pass handle.

**Parameter `source`:** the source buffer with offset and size.

**Parameter `destination`:** the destination transfer buffer with offset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44067).
