---
title: "SDLContext.RawApi — Method: CopyGpuTextureToTexture"
description: "Exact Method: CopyGpuTextureToTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8afe6c4d33a68267
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CopyGpuTextureToTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CopyGpuTextureToTexture`

<a id="api-def53a51513e42f4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CopyGpuTextureToTexture(Inno.Native.Sdl3.SDLGPUCopyPass*,Inno.Native.Sdl3.SDLGPUTextureLocation*,Inno.Native.Sdl3.SDLGPUTextureLocation*,System.UInt32,System.UInt32,System.UInt32,System.Byte) 2ac01c2cdb9d683dcd55498d480e924039998af57004ec9ea43a526f16e6d5a0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.CopyGpuTextureToTexture(Inno.Native.Sdl3.SDLGPUCopyPass* copy_pass, Inno.Native.Sdl3.SDLGPUTextureLocation* source, Inno.Native.Sdl3.SDLGPUTextureLocation* destination, uint w, uint h, uint d, byte cycle)
```

Performs a texture-to-texture copy.
This copy occurs on the GPU timeline. You may assume the copy has finished
in subsequent commands.
This function does not support copying between depth and color textures.
For those, copy the texture to a buffer and then to the destination
texture.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `copy_pass`:** a copy pass handle.

**Parameter `source`:** a source texture region.

**Parameter `destination`:** a destination texture region.

**Parameter `w`:** the width of the region to copy.

**Parameter `h`:** the height of the region to copy.

**Parameter `d`:** the depth of the region to copy.

**Parameter `cycle`:** if true, cycles the destination texture if the destination
texture is bound, otherwise overwrites the data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20382).
