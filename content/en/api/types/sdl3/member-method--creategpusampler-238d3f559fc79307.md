---
title: "SDLContext.RawApi — Method: CreateGpuSampler"
description: "Exact Method: CreateGpuSampler contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.238d3f559fc79307
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuSampler

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuSampler`

<a id="api-1284e38821c40092"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuSampler(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUSamplerCreateInfo*) ab5a56c2de293399677d597569e37da63ccab23b9d98ca992de10d26f8ce6711 -->

```csharp
public Inno.Native.Sdl3.SDLGPUSampler* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuSampler(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUSamplerCreateInfo* createinfo)
```

Creates a sampler object to be used when binding textures in a graphics
workflow.
There are optional properties that can be provided through `props`. These
are the supported properties:
- `SDL_PROP_GPU_SAMPLER_CREATE_NAME_STRING`: a name that can be displayed
in debugging tools.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_BindGPUVertexSamplers

**See also:** SDL_BindGPUFragmentSamplers

**See also:** SDL_ReleaseGPUSampler

**Parameter `device`:** a GPU Context.

**Parameter `createinfo`:** a struct describing the state of the sampler to create.

**Returns:** a sampler object on success, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22750).
