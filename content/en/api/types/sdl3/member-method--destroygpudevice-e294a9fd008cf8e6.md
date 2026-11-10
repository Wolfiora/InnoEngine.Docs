---
title: "SDLContext.RawApi — Method: DestroyGpuDevice"
description: "Exact Method: DestroyGpuDevice contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e294a9fd008cf8e6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyGpuDevice

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyGpuDevice`

<a id="api-2e9d7f798f8e3a64"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyGpuDevice(Inno.Native.Sdl3.SDLGPUDevice*) f696ac7e0ba05baa433006c44c1fca60b107d20c2b791b9268389b752ef4086e -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyGpuDevice(Inno.Native.Sdl3.SDLGPUDevice* device)
```

Destroys a GPU context previously returned by SDL_CreateGPUDevice.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateGPUDevice

**Parameter `device`:** a GPU Context to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18853).
