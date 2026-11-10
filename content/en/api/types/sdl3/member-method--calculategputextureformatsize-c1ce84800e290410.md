---
title: "SDLContext.RawApi — Method: CalculateGpuTextureFormatSize"
description: "Exact Method: CalculateGpuTextureFormatSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c1ce84800e290410
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CalculateGpuTextureFormatSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CalculateGpuTextureFormatSize`

<a id="api-babca15a957e2511"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CalculateGpuTextureFormatSize(Inno.Native.Sdl3.SDLGPUTextureFormat,System.UInt32,System.UInt32,System.UInt32) 2ce6540df5f0ae2be83ac16a3bba44d23c5091d15ef00b37f91595861bc4658e -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.CalculateGpuTextureFormatSize(Inno.Native.Sdl3.SDLGPUTextureFormat format, uint width, uint height, uint depth_or_layer_count)
```

Calculate the size in bytes of a texture format with dimensions.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `format`:** a texture format.

**Parameter `width`:** width in pixels.

**Parameter `height`:** height in pixels.

**Parameter `depth_or_layer_count`:** depth for 3D textures or layer count otherwise.

**Returns:** the size of a texture with this format and dimensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47334).
