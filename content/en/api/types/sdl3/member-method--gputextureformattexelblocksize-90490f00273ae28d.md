---
title: "SDL — Method: GpuTextureFormatTexelBlockSize"
description: "Exact Method: GpuTextureFormatTexelBlockSize contracts in SDL."
uid: api.inno.native.sdl3.90490f00273ae28d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GpuTextureFormatTexelBlockSize

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GpuTextureFormatTexelBlockSize`

<a id="api-6dce99ccae453633"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GpuTextureFormatTexelBlockSize(Inno.Native.Sdl3.SDLGPUTextureFormat) a48a37a975b1da905a08711646518b475ef9b52d2515a5d1831aeb8c7b4128ef -->

```csharp
public static uint Inno.Native.Sdl3.SDL.GpuTextureFormatTexelBlockSize(Inno.Native.Sdl3.SDLGPUTextureFormat format)
```

Obtains the texel block size for a texture format.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UploadToGPUTexture

**Parameter `format`:** the texture format you want to know the texel size of.

**Returns:** the texel block size of the texture format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1333).
