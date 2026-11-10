---
title: "SDLContext.RawApi — Method: GetGpuDriver"
description: "Exact Method: GetGpuDriver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7a1bdfa329e6eb58
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGpuDriver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGpuDriver`

<a id="api-711f917bf9d5deae"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGpuDriver(System.Int32) 560cacc0dd21c18b507c3bd30f572bf01533a7a97d19d95c3a386fd57a7f9c31 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGpuDriver(int index)
```

Get the name of a built in GPU driver.
The GPU drivers are presented in the order in which they are normally
checked during initialization.
The names of drivers are all simple, low-ASCII identifiers, like "vulkan",
"metal" or "direct3d12". These never have Unicode characters, and are not
meant to be proper names.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumGPUDrivers

**Parameter `index`:** the index of a GPU driver.

**Returns:** the name of the GPU driver with the given **index**.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25957).
