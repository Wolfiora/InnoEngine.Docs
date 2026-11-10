---
title: "SDLContext — Method: CalculateGpuTextureFormatSize"
description: "Exact Method: CalculateGpuTextureFormatSize contracts in SDLContext."
uid: api.inno.native.sdl3.42985b5ea840032f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: CalculateGpuTextureFormatSize

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CalculateGpuTextureFormatSize`

<a id="api-99fd6d3f23ff5dba"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.CalculateGpuTextureFormatSize(Inno.Native.Sdl3.SDLGPUTextureFormat,System.UInt32,System.UInt32,System.UInt32) 2ef13c0acf40dbd31a8df8c4c7ff778e685c88c5742f66456e9840598fa6ece8 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.CalculateGpuTextureFormatSize(Inno.Native.Sdl3.SDLGPUTextureFormat format, uint width, uint height, uint depth_or_layer_count)
```

Calculate the size in bytes of a texture format with dimensions.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `format`:** a texture format.

**Parameter `width`:** width in pixels.

**Parameter `height`:** height in pixels.

**Parameter `depth_or_layer_count`:** depth for 3D textures or layer count otherwise.

**Returns:** the size of a texture with this format and dimensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15834).
