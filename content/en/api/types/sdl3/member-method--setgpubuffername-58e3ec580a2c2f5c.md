---
title: "SDLContext.RawApi — Method: SetGpuBufferName"
description: "Exact Method: SetGpuBufferName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.58e3ec580a2c2f5c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGpuBufferName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGpuBufferName`

<a id="api-3e7127a4cdcc6c12"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGpuBufferName(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUBuffer*,System.SByte*) 31e8cb3f41e09ab3012d9c4a7e1528b2063c60778020f9546458d66fce95eb50 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetGpuBufferName(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUBuffer* buffer, sbyte* text)
```

Sets an arbitrary string constant to label a buffer.
You should use SDL_PROP_GPU_BUFFER_CREATE_NAME_STRING with
SDL_CreateGPUBuffer instead of this function to avoid thread safety issues.

**Thread safety:** This function is not thread safe, you must make sure the
buffer is not simultaneously used by any other thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUBuffer

**Parameter `device`:** a GPU Context.

**Parameter `buffer`:** a buffer to attach the name to.

**Parameter `text`:** a UTF-8 string constant to mark as the name of the buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45905).
