---
title: "SDLContext.RawApi — Method: GpuTextureFormatTexelBlockSize"
description: "Exact Method: GpuTextureFormatTexelBlockSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1c8f6cfd47fc3ce5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GpuTextureFormatTexelBlockSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GpuTextureFormatTexelBlockSize`

<a id="api-aa2619c156422f19"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GpuTextureFormatTexelBlockSize(Inno.Native.Sdl3.SDLGPUTextureFormat) 66d60c697e2bf3fafdaa47203eedc8c83c8c7b89c1f8865e3f8614016bec74e7 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GpuTextureFormatTexelBlockSize(Inno.Native.Sdl3.SDLGPUTextureFormat format)
```

Obtains the texel block size for a texture format.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UploadToGPUTexture

**Parameter `format`:** the texture format you want to know the texel size of.

**Returns:** the texel block size of the texture format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27197).
