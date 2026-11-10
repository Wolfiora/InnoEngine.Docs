---
title: "SDLContext.RawApi — Method: CreateGpuBuffer"
description: "Exact Method: CreateGpuBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.66e96627812f3491
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuBuffer`

<a id="api-915e58799e3ba56d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuBuffer(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUBufferCreateInfo*) 8f52049fe8be8b99d8739296ecb6f9a5c7c42572f9f27f97503a43345f1f1611 -->

```csharp
public Inno.Native.Sdl3.SDLGPUBuffer* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuBuffer(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUBufferCreateInfo* createinfo)
```

Creates a buffer object to be used in graphics or compute workflows.
The contents of this buffer are undefined until data is written to the
buffer.
Note that certain combinations of usage flags are invalid. For example, a
buffer cannot have both the VERTEX and INDEX flags.
If you use a STORAGE flag, the data in the buffer must respect std140
layout conventions. In practical terms this means you must ensure that vec3
and vec4 fields are 16-byte aligned.
For better understanding of underlying concepts and memory management with
SDL GPU API, you may refer
[this blog post](https://moonside.games/posts/sdl-gpu-concepts-cycling/)
.
There are optional properties that can be provided through `props`. These
are the supported properties:
- `SDL_PROP_GPU_BUFFER_CREATE_NAME_STRING`: a name that can be displayed in
debugging tools.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UploadToGPUBuffer

**See also:** SDL_DownloadFromGPUBuffer

**See also:** SDL_CopyGPUBufferToBuffer

**See also:** SDL_BindGPUVertexBuffers

**See also:** SDL_BindGPUIndexBuffer

**See also:** SDL_BindGPUVertexStorageBuffers

**See also:** SDL_BindGPUFragmentStorageBuffers

**See also:** SDL_DrawGPUPrimitivesIndirect

**See also:** SDL_DrawGPUIndexedPrimitivesIndirect

**See also:** SDL_BindGPUComputeStorageBuffers

**See also:** SDL_DispatchGPUComputeIndirect

**See also:** SDL_ReleaseGPUBuffer

**Parameter `device`:** a GPU Context.

**Parameter `createinfo`:** a struct describing the state of the buffer to create.

**Returns:** a buffer object on success, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31866).
