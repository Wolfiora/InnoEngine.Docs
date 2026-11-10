---
title: "SDL — Method: CalculateGpuTextureFormatSize"
description: "Exact Method: CalculateGpuTextureFormatSize contracts in SDL."
uid: api.inno.native.sdl3.a3f1c5a310ce63e5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: CalculateGpuTextureFormatSize

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CalculateGpuTextureFormatSize`

<a id="api-458a03eacb0eaa8d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.CalculateGpuTextureFormatSize(Inno.Native.Sdl3.SDLGPUTextureFormat,System.UInt32,System.UInt32,System.UInt32) 3b1e52e2a18ea0aa754c41825c9ea4be97c4de2318a5a8e6c24a1fdbcb6a4dc7 -->

```csharp
public static uint Inno.Native.Sdl3.SDL.CalculateGpuTextureFormatSize(Inno.Native.Sdl3.SDLGPUTextureFormat format, uint width, uint height, uint depth_or_layer_count)
```

Calculate the size in bytes of a texture format with dimensions.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `format`:** a texture format.

**Parameter `width`:** width in pixels.

**Parameter `height`:** height in pixels.

**Parameter `depth_or_layer_count`:** depth for 3D textures or layer count otherwise.

**Returns:** the size of a texture with this format and dimensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3694).
