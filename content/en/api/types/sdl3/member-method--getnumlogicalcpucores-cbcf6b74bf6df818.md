---
title: "SDL — Method: GetNumLogicalCpuCores"
description: "Exact Method: GetNumLogicalCpuCores contracts in SDL."
uid: api.inno.native.sdl3.cbcf6b74bf6df818
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetNumLogicalCpuCores

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumLogicalCpuCores`

<a id="api-cb5f400a1862e551"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetNumLogicalCpuCores adf7dac41c63177fc3737d3a830045cb95d4be889a33929fe707ed8a37d79148 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetNumLogicalCpuCores()
```

Get the number of logical CPU cores available.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the total number of logical CPU cores. On CPUs that include
technologies such as hyperthreading, the number of logical cores
may be more than the number of physical cores.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1009).
