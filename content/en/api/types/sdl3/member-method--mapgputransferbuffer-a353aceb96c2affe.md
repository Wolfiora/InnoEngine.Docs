---
title: "SDLContext.RawApi — Method: MapGpuTransferBuffer"
description: "Exact Method: MapGpuTransferBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a353aceb96c2affe
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MapGpuTransferBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MapGpuTransferBuffer`

<a id="api-87a8c82d18c56ebd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MapGpuTransferBuffer(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUTransferBuffer*,System.Byte) fcb65f1a4174b8955dfa1a8084c415577a5084a0509a68eac27a8e9eddac904e -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.MapGpuTransferBuffer(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUTransferBuffer* transfer_buffer, byte cycle)
```

Maps a transfer buffer into application address space.
You must unmap the transfer buffer before encoding upload commands. The
memory is owned by the graphics driver - do NOT call SDL_free() on the
returned pointer.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `transfer_buffer`:** a transfer buffer.

**Parameter `cycle`:** if true, cycles the transfer buffer if it is already bound.

**Returns:** the address of the mapped transfer buffer memory, or NULL on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50353).
