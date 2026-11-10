---
title: "SDLContext.RawApi — Method: GpuTextureSupportsSampleCount"
description: "Exact Method: GpuTextureSupportsSampleCount contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ee41471b562d7a2c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GpuTextureSupportsSampleCount

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GpuTextureSupportsSampleCount`

<a id="api-6ebaca1af4cc313a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GpuTextureSupportsSampleCount(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUTextureFormat,Inno.Native.Sdl3.SDLGPUSampleCount) e93a31b230c6c279f82607662844ffb3f3ed78d7955bed473cd90781cffc759b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GpuTextureSupportsSampleCount(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUTextureFormat format, Inno.Native.Sdl3.SDLGPUSampleCount sample_count)
```

Determines if a sample count for a texture format is supported.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `format`:** the texture format to check.

**Parameter `sample_count`:** the sample count to check.

**Returns:** whether the sample count is supported for this texture format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40572).
