---
title: "SDLContext — Method: GetCpuCacheLineSize"
description: "Exact Method: GetCpuCacheLineSize contracts in SDLContext."
uid: api.inno.native.sdl3.b4526fb66d5b139d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetCpuCacheLineSize

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCpuCacheLineSize`

<a id="api-0618ac1431a7eecb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetCpuCacheLineSize 70487d394cb1965739bb73d9eadbaf33e759e3c5b16dcc14738fa7d83535b2e9 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetCpuCacheLineSize()
```

Determine the L1 cache line size of the CPU.
This is useful for determining multi-threaded structure padding or SIMD
prefetch sizes.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the L1 cache line size of the CPU, in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16649).
