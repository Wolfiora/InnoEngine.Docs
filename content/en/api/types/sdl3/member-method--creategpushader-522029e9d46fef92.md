---
title: "SDLContext.RawApi — Method: CreateGpuShader"
description: "Exact Method: CreateGpuShader contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.522029e9d46fef92
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateGpuShader

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateGpuShader`

<a id="api-ba84be7c4a9ee021"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuShader(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUShaderCreateInfo*) c0fbff3ad749b5389353bac45fef47b53d33e93033249a6846c2e68572e72709 -->

```csharp
public Inno.Native.Sdl3.SDLGPUShader* Inno.Native.Sdl3.SDLContext.RawApi.CreateGpuShader(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUShaderCreateInfo* createinfo)
```

Creates a shader to be used when creating a graphics pipeline.
Shader resource bindings must be authored to follow a particular order
depending on the shader format.
For SPIR-V shaders, use the following resource sets:
For vertex shaders:
- 0: Sampled textures, followed by storage textures, followed by storage
buffers
- 1: Uniform buffers
For fragment shaders:
- 2: Sampled textures, followed by storage textures, followed by storage
buffers
- 3: Uniform buffers
For DXBC and DXIL shaders, use the following register order:
For vertex shaders:
- (t[n], space0): Sampled textures, followed by storage textures, followed
by storage buffers
- (s[n], space0): Samplers with indices corresponding to the sampled
textures
- (b[n], space1): Uniform buffers
For pixel shaders:
- (t[n], space2): Sampled textures, followed by storage textures, followed
by storage buffers
- (s[n], space2): Samplers with indices corresponding to the sampled
textures
- (b[n], space3): Uniform buffers
For MSL/metallib, use the following order:
- [[texture]]: Sampled textures, followed by storage textures
- [[sampler]]: Samplers with indices corresponding to the sampled textures
- [[buffer]]: Uniform buffers, followed by storage buffers. Vertex buffer 0
is bound at [[buffer(14)]], vertex buffer 1 at [[buffer(15)]], and so on.
Rather than manually authoring vertex buffer indices, use the
[[stage_in]] attribute which will automatically use the vertex input
information from the SDL_GPUGraphicsPipeline.
Shader semantics other than system-value semantics do not matter in D3D12
and for ease of use the SDL implementation assumes that non system-value
semantics will all be TEXCOORD. If you are using HLSL as the shader source
language, your vertex semantics should start at TEXCOORD0 and increment
like so: TEXCOORD1, TEXCOORD2, etc. If you wish to change the semantic
prefix to something other than TEXCOORD you can use
SDL_PROP_GPU_DEVICE_CREATE_D3D12_SEMANTIC_NAME_STRING with
SDL_CreateGPUDeviceWithProperties().
There are optional properties that can be provided through `props`. These
are the supported properties:
- `SDL_PROP_GPU_SHADER_CREATE_NAME_STRING`: a name that can be displayed in
debugging tools.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUGraphicsPipeline

**See also:** SDL_ReleaseGPUShader

**Parameter `device`:** a GPU Context.

**Parameter `createinfo`:** a struct describing the state of the shader to create.

**Returns:** a shader object on success, or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45444).
