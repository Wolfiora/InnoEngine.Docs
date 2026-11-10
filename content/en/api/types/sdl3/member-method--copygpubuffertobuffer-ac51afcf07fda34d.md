---
title: "SDLContext.RawApi — Method: CopyGpuBufferToBuffer"
description: "Exact Method: CopyGpuBufferToBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ac51afcf07fda34d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CopyGpuBufferToBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CopyGpuBufferToBuffer`

<a id="api-cd44b3dc34b7ced9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CopyGpuBufferToBuffer(Inno.Native.Sdl3.SDLGPUCopyPass*,Inno.Native.Sdl3.SDLGPUBufferLocation*,Inno.Native.Sdl3.SDLGPUBufferLocation*,System.UInt32,System.Byte) 817ddbc750e20cd9689db597c162362a2dbcf0d51f4531fe76fa207cc1ab9be1 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.CopyGpuBufferToBuffer(Inno.Native.Sdl3.SDLGPUCopyPass* copy_pass, Inno.Native.Sdl3.SDLGPUBufferLocation* source, Inno.Native.Sdl3.SDLGPUBufferLocation* destination, uint size, byte cycle)
```

Performs a buffer-to-buffer copy.
This copy occurs on the GPU timeline. You may assume the copy has finished
in subsequent commands.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `copy_pass`:** a copy pass handle.

**Parameter `source`:** the buffer and offset to copy from.

**Parameter `destination`:** the buffer and offset to copy to.

**Parameter `size`:** the length of the buffer to copy.

**Parameter `cycle`:** if true, cycles the destination buffer if it is already bound,
otherwise overwrites the data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27306).
