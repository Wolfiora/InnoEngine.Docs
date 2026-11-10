---
title: "SDLContext.RawApi — Method: BlitGpuTexture"
description: "Exact Method: BlitGpuTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.26de7d214b4101de
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: BlitGpuTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BlitGpuTexture`

<a id="api-26a960cf1d1cb098"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.BlitGpuTexture(Inno.Native.Sdl3.SDLGPUCommandBuffer*,Inno.Native.Sdl3.SDLGPUBlitInfo*) a9d7c1e0b50f0e2ad165c7bff0e5a94cac2688dfdb4b365e454b4dc7ffc2c8bf -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.BlitGpuTexture(Inno.Native.Sdl3.SDLGPUCommandBuffer* command_buffer, Inno.Native.Sdl3.SDLGPUBlitInfo* info)
```

Blits from a source texture region to a destination texture region.
This function must not be called inside of any pass.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `command_buffer`:** a command buffer.

**Parameter `info`:** the blit info struct containing the blit parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32791).
