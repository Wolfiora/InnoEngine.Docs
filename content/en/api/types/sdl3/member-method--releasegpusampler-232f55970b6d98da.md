---
title: "SDLContext.RawApi — Method: ReleaseGpuSampler"
description: "Exact Method: ReleaseGpuSampler contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.232f55970b6d98da
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReleaseGpuSampler

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReleaseGpuSampler`

<a id="api-7c8a6f7b50a7be94"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuSampler(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUSampler*) d4d2bc280396197b05adc7234e41868242a57e695467284fe556cc9c9275277a -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuSampler(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUSampler* sampler)
```

Frees the given sampler as soon as it is safe to do so.
You must not reference the sampler after calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `sampler`:** a sampler to be destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35997).
