---
title: "SDLContext — Method: GpuTextureFormatTexelBlockSize"
description: "Exact Method: GpuTextureFormatTexelBlockSize contracts in SDLContext."
uid: api.inno.native.sdl3.e369dcf8fc743030
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GpuTextureFormatTexelBlockSize

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GpuTextureFormatTexelBlockSize`

<a id="api-325fe59ac67ae911"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GpuTextureFormatTexelBlockSize(Inno.Native.Sdl3.SDLGPUTextureFormat) 9a1f4f3d2ab83cf847dcf01dab0b4238b41f87a11119d2ce71c6c74f3aa8a61f -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.GpuTextureFormatTexelBlockSize(Inno.Native.Sdl3.SDLGPUTextureFormat format)
```

Obtains the texel block size for a texture format.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UploadToGPUTexture

**Parameter `format`:** the texture format you want to know the texel size of.

**Returns:** the texel block size of the texture format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12974).
