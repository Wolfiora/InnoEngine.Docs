---
title: "SDLGPUTransferBufferUsage"
description: "Reference for SDLGPUTransferBufferUsage in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.c53ab6bd125ec080
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLGPUTransferBufferUsage`

This reference describes `SDLGPUTransferBufferUsage` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_GPU_TRANSFERBUFFERUSAGE_DOWNLOAD`](#api-6e4c52f9cd0d234c) | Field |
| [`SDL_GPU_TRANSFERBUFFERUSAGE_UPLOAD`](#api-9187651d37ce3be8) | Field |

## Type declaration

<a id="api-c53ab6bd125ec080"></a>
<!-- api: T:Inno.Native.Sdl3.SDLGPUTransferBufferUsage 8bdc4eaecf394f0bb8e9652ae4a8140336cb1957a8fd1b887a3208b4a770fdb7 -->

```csharp
public enum Inno.Native.Sdl3.SDLGPUTransferBufferUsage : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L56731).

## `SDL_GPU_TRANSFERBUFFERUSAGE_DOWNLOAD`

<a id="api-6e4c52f9cd0d234c"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUTransferBufferUsage.SDL_GPU_TRANSFERBUFFERUSAGE_DOWNLOAD 64ca03d5c8a1b1f15e544ec5999527ab667be5a4fa9c6e3749c89b0ade35c099 -->

```csharp
Inno.Native.Sdl3.SDLGPUTransferBufferUsage.SDL_GPU_TRANSFERBUFFERUSAGE_DOWNLOAD = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L56734).

## `SDL_GPU_TRANSFERBUFFERUSAGE_UPLOAD`

<a id="api-9187651d37ce3be8"></a>
<!-- api: F:Inno.Native.Sdl3.SDLGPUTransferBufferUsage.SDL_GPU_TRANSFERBUFFERUSAGE_UPLOAD 1d357073c5129ea54839315fb6453e36d1dbe55d989bf72c4dfa5d1763e3dfbf -->

```csharp
Inno.Native.Sdl3.SDLGPUTransferBufferUsage.SDL_GPU_TRANSFERBUFFERUSAGE_UPLOAD = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L56733).
