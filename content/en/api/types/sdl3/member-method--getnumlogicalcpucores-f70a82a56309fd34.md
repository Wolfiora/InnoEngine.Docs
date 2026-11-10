---
title: "SDLContext.RawApi — Method: GetNumLogicalCpuCores"
description: "Exact Method: GetNumLogicalCpuCores contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f70a82a56309fd34
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumLogicalCpuCores

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumLogicalCpuCores`

<a id="api-876f2b4f39503c85"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumLogicalCpuCores 56a9cb42e7b8d6353f65e92a00fa5fa24a46707a650db30142efbb6288bffe71 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumLogicalCpuCores()
```

Get the number of logical CPU cores available.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the total number of logical CPU cores. On CPUs that include
technologies such as hyperthreading, the number of logical cores
may be more than the number of physical cores.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24458).
