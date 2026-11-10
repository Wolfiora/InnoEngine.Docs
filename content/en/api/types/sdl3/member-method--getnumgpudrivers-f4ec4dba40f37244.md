---
title: "SDL — Method: GetNumGpuDrivers"
description: "Exact Method: GetNumGpuDrivers contracts in SDL."
uid: api.inno.native.sdl3.f4ec4dba40f37244
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetNumGpuDrivers

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumGpuDrivers`

<a id="api-595f5bc4491544d4"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetNumGpuDrivers 01b2ebd6a079436e246cf8092fa477893c8572f5cb1524a2b5152b5ff5064e5a -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetNumGpuDrivers()
```

Get the number of GPU drivers compiled into SDL.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGPUDriver

**Returns:** the number of built in GPU drivers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1356).
