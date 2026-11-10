---
title: "SDLContext.RawApi — Method: ReleaseGpuTexture"
description: "Exact Method: ReleaseGpuTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.dd1b2b51c85a7b50
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ReleaseGpuTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ReleaseGpuTexture`

<a id="api-2ff723fac48c7e4a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuTexture(Inno.Native.Sdl3.SDLGPUDevice*,Inno.Native.Sdl3.SDLGPUTexture*) 3c7b050b459daaf582df848314f52f648bcce49fd9ee2e9ae153d32660683a50 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ReleaseGpuTexture(Inno.Native.Sdl3.SDLGPUDevice* device, Inno.Native.Sdl3.SDLGPUTexture* texture)
```

Frees the given texture as soon as it is safe to do so.
You must not reference the texture after calling this function.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `device`:** a GPU context.

**Parameter `texture`:** a texture to be destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43543).
