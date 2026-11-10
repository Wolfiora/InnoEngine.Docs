---
title: "SDLContext — Method: GetGpuTextureFormatFromPixelFormat"
description: "Exact Method: GetGpuTextureFormatFromPixelFormat contracts in SDLContext."
uid: api.inno.native.sdl3.a9e6dc5860fca508
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetGpuTextureFormatFromPixelFormat

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGpuTextureFormatFromPixelFormat`

<a id="api-259af913d6cd39f1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetGpuTextureFormatFromPixelFormat(Inno.Native.Sdl3.SDLPixelFormat) c47c66ba57844ba243426c5cb225a4256f5c4d74b0f357340c03287a368a9cc7 -->

```csharp
public Inno.Native.Sdl3.SDLGPUTextureFormat Inno.Native.Sdl3.SDLContext.GetGpuTextureFormatFromPixelFormat(Inno.Native.Sdl3.SDLPixelFormat format)
```

Get the GPU texture format corresponding to an SDL pixel format.

**Upstream availability:** This function is available since SDL 3.4.0.

**Parameter `format`:** a pixel format.

**Returns:** the corresponding GPU texture format, or
SDL_GPU_TEXTUREFORMAT_INVALID if there is no corresponding GPU
texture format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13093).
