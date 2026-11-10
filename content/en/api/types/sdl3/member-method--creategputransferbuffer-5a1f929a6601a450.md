---
title: "SDLContext.RawApi — Method: CreateGpuTransferBuffer"
description: "Exact Method: CreateGpuTransferBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5a1f929a6601a450
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuTransferBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuTransferBuffer`

<a id="api-a49623d43f2ec074"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuTransferBuffer(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUTransferBufferCreateInfo*) d848252cb170ef31cfd82ed6eebebeb42a7c6d88cd34c21f1ab65101ad8e54e5 -->

```csharp
public Inno.Native.Sdl3.SDLGPUTransferBuffer* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuTransferBuffer(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUTransferBufferCreateInfo* createinfo)
```

Creates a transfer buffer to be used when uploading to or downloading from
graphics resources.
Download buffers can be particularly expensive to create, so it is good
practice to reuse them if data will be downloaded regularly.
There are optional properties that can be provided through `props`. These
are the supported properties:
- `SDL_PROP_GPU_TRANSFERBUFFER_CREATE_NAME_STRING`: a name that can be
displayed in debugging tools.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UploadToGPUBuffer

**See also:** SDL_DownloadFromGPUBuffer

**See also:** SDL_UploadToGPUTexture

**See also:** SDL_DownloadFromGPUTexture

**See also:** SDL_ReleaseGPUTransferBuffer

**Parameter `device`:** a GPU Context.

**Parameter `createinfo`:** a struct describing the state of the transfer buffer to
create.

**Returns:** a transfer buffer on success, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44186).
