---
title: "SDLContext.RawApi — Method: GetCpuCacheLineSize"
description: "Exact Method: GetCpuCacheLineSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d087c576b3585fcf
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetCpuCacheLineSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetCpuCacheLineSize`

<a id="api-3d108b0eafc1689b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetCpuCacheLineSize c356b32af891ef847af2e6e2ec57f2f00c3decdd21711814c7107ef37f8e3179 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetCpuCacheLineSize()
```

Determine the L1 cache line size of the CPU.
This is useful for determining multi-threaded structure padding or SIMD
prefetch sizes.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the L1 cache line size of the CPU, in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52927).
