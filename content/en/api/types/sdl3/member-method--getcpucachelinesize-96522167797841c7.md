---
title: "SDL — Method: GetCpuCacheLineSize"
description: "Exact Method: GetCpuCacheLineSize contracts in SDL."
uid: api.inno.native.sdl3.96522167797841c7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetCpuCacheLineSize

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCpuCacheLineSize`

<a id="api-5736f0a1841ee7b6"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetCpuCacheLineSize 85398b845850e017c85bde0e74698f348fa4ca0bb188951eaecef4a1c5f7c338 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetCpuCacheLineSize()
```

Determine the L1 cache line size of the CPU.
This is useful for determining multi-threaded structure padding or SIMD
prefetch sizes.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the L1 cache line size of the CPU, in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4350).
