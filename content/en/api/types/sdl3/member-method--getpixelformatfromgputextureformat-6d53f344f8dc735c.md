---
title: "SDLContext.RawApi — Method: GetPixelFormatFromGpuTextureFormat"
description: "Exact Method: GetPixelFormatFromGpuTextureFormat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6d53f344f8dc735c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetPixelFormatFromGpuTextureFormat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetPixelFormatFromGpuTextureFormat`

<a id="api-e4d18abe9e56ccec"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetPixelFormatFromGpuTextureFormat(Inno.Native.Sdl3.SDLGPUTextureFormat) 6aa7fdf434a589582eee841a595e98ecd6b1ca7e4bfcf1011561ae7b8964f54a -->

```csharp
public Inno.Native.Sdl3.SDLPixelFormat Inno.Native.Sdl3.SDLContext.RawApi.GetPixelFormatFromGpuTextureFormat(Inno.Native.Sdl3.SDLGPUTextureFormat format)
```

Get the SDL pixel format corresponding to a GPU texture format.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `format`:** a texture format.

**Returns:** the corresponding pixel format, or SDL_PIXELFORMAT_UNKNOWN if
there is no corresponding pixel format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27679).
