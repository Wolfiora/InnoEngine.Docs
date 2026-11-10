---
title: "SDLContext.RawApi — Method: WaitForGpuIdle"
description: "Exact Method: WaitForGpuIdle contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.56c9f8fbfe49356d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: WaitForGpuIdle

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `WaitForGpuIdle`

<a id="api-08fac544fec1c612"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.WaitForGpuIdle(Inno.Native.Sdl3.SDLGPUDevice*) af1509e094d3c25d38ae1fa0a3ed440f76bc2f6d8b20bcd501489e8d1fabf7ac -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.WaitForGpuIdle(Inno.Native.Sdl3.SDLGPUDevice* device)
```

Blocks the thread until the GPU is completely idle.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_WaitForGPUFences

**Parameter `device`:** a GPU context.

**Returns:** true on success, false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17936).
