---
title: "SDLContext.RawApi — Method: UploadToGpuBuffer"
description: "Exact Method: UploadToGpuBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a3457cef55993fdf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UploadToGpuBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UploadToGpuBuffer`

<a id="api-592ccc9e220eac95"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UploadToGpuBuffer(Inno.Native.Sdl3.SDLGPUCopyPass*,Inno.Native.Sdl3.SDLGPUTransferBufferLocation*,Inno.Native.Sdl3.SDLGPUBufferRegion*,System.Byte) dc47954d695d75681ea90377cf7a5db6bb9272b33ae9660b39b63ef3ae40b6f6 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UploadToGpuBuffer(Inno.Native.Sdl3.SDLGPUCopyPass* copy_pass, Inno.Native.Sdl3.SDLGPUTransferBufferLocation* source, Inno.Native.Sdl3.SDLGPUBufferRegion* destination, byte cycle)
```

Uploads data from a transfer buffer to a buffer.
The upload occurs on the GPU timeline. You may assume that the upload has
finished in subsequent commands.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `copy_pass`:** a copy pass handle.

**Parameter `source`:** the source transfer buffer with offset.

**Parameter `destination`:** the destination buffer with offset and size.

**Parameter `cycle`:** if true, cycles the buffer if it is already bound, otherwise
overwrites the data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43730).
