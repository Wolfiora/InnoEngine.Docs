---
title: "SDLContext.RawApi — Method: ReleaseGpuShader"
description: "Exact Method: ReleaseGpuShader contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1bac9ad1ff2f921f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReleaseGpuShader

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReleaseGpuShader`

<a id="api-208a94e38abe3c09"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuShader(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUShader*) 17980d7ea0e6dba1f2d3701415c38aaff39089c2adcc62587ec4b95b17906d72 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuShader(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUShader* shader)
```

Frees the given shader as soon as it is safe to do so.
You must not reference the shader after calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `shader`:** a shader to be destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39661).
