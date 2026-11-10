---
title: "SDLContext.RawApi — Method: CreateGpuGraphicsPipeline"
description: "Exact Method: CreateGpuGraphicsPipeline contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d0bf42d6e31646c3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuGraphicsPipeline

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuGraphicsPipeline`

<a id="api-df22cb22aaec9155"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuGraphicsPipeline(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUGraphicsPipelineCreateInfo*) cf1c709cfc596b338de977bddc74d41adcdd592683a6c80b49c1ea89fb96cd4a -->

```csharp
public Inno.Native.Sdl3.SDLGPUGraphicsPipeline* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuGraphicsPipeline(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUGraphicsPipelineCreateInfo* createinfo)
```

Creates a pipeline object to be used in a graphics workflow.
There are optional properties that can be provided through `props`. These
are the supported properties:
- `SDL_PROP_GPU_GRAPHICSPIPELINE_CREATE_NAME_STRING`: a name that can be
displayed in debugging tools.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUShader

**See also:** SDL_BindGPUGraphicsPipeline

**See also:** SDL_ReleaseGPUGraphicsPipeline

**Parameter `device`:** a GPU Context.

**Parameter `createinfo`:** a struct describing the state of the graphics pipeline to
create.

**Returns:** a graphics pipeline object on success, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18883).
