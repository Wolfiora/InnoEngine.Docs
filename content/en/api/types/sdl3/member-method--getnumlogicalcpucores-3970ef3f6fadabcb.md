---
title: "SDLContext — Method: GetNumLogicalCpuCores"
description: "Exact Method: GetNumLogicalCpuCores contracts in SDLContext."
uid: api.inno.native.sdl3.3970ef3f6fadabcb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetNumLogicalCpuCores

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumLogicalCpuCores`

<a id="api-2090cae6c062d6b6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetNumLogicalCpuCores 516b73ea85358aaf15af58bbd1632efbbea1127206a04b6dcc0f99b475a66cdc -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetNumLogicalCpuCores()
```

Get the number of logical CPU cores available.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the total number of logical CPU cores. On CPUs that include
technologies such as hyperthreading, the number of logical cores
may be more than the number of physical cores.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12578).
