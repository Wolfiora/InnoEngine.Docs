---
title: "SDLContext.RawApi — Method: ReleaseGpuBuffer"
description: "Exact Method: ReleaseGpuBuffer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.772058b3d2ca4aca
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReleaseGpuBuffer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReleaseGpuBuffer`

<a id="api-3ac2da05f167184b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuBuffer(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUBuffer*) 8b645b3f018c76465a46a10cb6c1b0381b41eb169b2f0ff19e05aca6a8dd6119 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuBuffer(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUBuffer* buffer)
```

Frees the given buffer as soon as it is safe to do so.
You must not reference the buffer after calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `buffer`:** a buffer to be destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21597).
