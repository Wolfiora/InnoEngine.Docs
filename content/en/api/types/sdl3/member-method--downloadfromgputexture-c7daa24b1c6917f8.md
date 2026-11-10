---
title: "SDLContext.RawApi — Method: DownloadFromGpuTexture"
description: "Exact Method: DownloadFromGpuTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c7daa24b1c6917f8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DownloadFromGpuTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DownloadFromGpuTexture`

<a id="api-c3cf6b3e3720cc7d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DownloadFromGpuTexture(Inno.Native.Sdl3.SDLGPUCopyPass*,Inno.Native.Sdl3.SDLGPUTextureRegion*,Inno.Native.Sdl3.SDLGPUTextureTransferInfo*) 38e68f4bff1747d4f76154bf8d9a8dea40e89194c00cc4c59b688c212a995f2a -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DownloadFromGpuTexture(Inno.Native.Sdl3.SDLGPUCopyPass* copy_pass, Inno.Native.Sdl3.SDLGPUTextureRegion* source, Inno.Native.Sdl3.SDLGPUTextureTransferInfo* destination)
```

Copies data from a texture to a transfer buffer on the GPU timeline.
This data is not guaranteed to be copied until the command buffer fence is
signaled.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `copy_pass`:** a copy pass handle.

**Parameter `source`:** the source texture region.

**Parameter `destination`:** the destination transfer buffer with image layout
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20747).
