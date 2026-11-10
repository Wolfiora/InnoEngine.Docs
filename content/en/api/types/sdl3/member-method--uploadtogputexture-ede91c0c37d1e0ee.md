---
title: "SDLContext.RawApi — Method: UploadToGpuTexture"
description: "Exact Method: UploadToGpuTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ede91c0c37d1e0ee
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UploadToGpuTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UploadToGpuTexture`

<a id="api-8d57edccab55d3ae"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UploadToGpuTexture(Inno.Native.Sdl3.SDLGPUCopyPass*,Inno.Native.Sdl3.SDLGPUTextureTransferInfo*,Inno.Native.Sdl3.SDLGPUTextureRegion*,System.Byte) 657cb49e13c0747d995cd4dde70cf10a326ab2a7eb30bf2f702c483e436d2c81 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UploadToGpuTexture(Inno.Native.Sdl3.SDLGPUCopyPass* copy_pass, Inno.Native.Sdl3.SDLGPUTextureTransferInfo* source, Inno.Native.Sdl3.SDLGPUTextureRegion* destination, byte cycle)
```

Uploads data from a transfer buffer to a texture.
The upload occurs on the GPU timeline. You may assume that the upload has
finished in subsequent commands.
You must align the data in the transfer buffer to a multiple of the texel
size of the texture format.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `copy_pass`:** a copy pass handle.

**Parameter `source`:** the source transfer buffer with image layout information.

**Parameter `destination`:** the destination texture region.

**Parameter `cycle`:** if true, cycles the texture if the texture is bound, otherwise
overwrites the data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52780).
