---
title: "SDLInitStatus"
description: "Reference for SDLInitStatus in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.bb1cb5cb38398f62
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLInitStatus`

This reference describes `SDLInitStatus` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_INIT_STATUS_INITIALIZED`](#api-04230be890412f0a) | Field |
| [`SDL_INIT_STATUS_INITIALIZING`](#api-1e4f75d6ae007b7a) | Field |
| [`SDL_INIT_STATUS_UNINITIALIZED`](#api-ee7cfe938da2db1b) | Field |
| [`SDL_INIT_STATUS_UNINITIALIZING`](#api-abcdc0196c8eacc3) | Field |

## Type declaration

<a id="api-bb1cb5cb38398f62"></a>
<!-- api: T:Inno.Native.Sdl3.SDLInitStatus 32fa2574cb95109c9862df4b62f8ba3711f607d01a8844a7fbec0f4c728657c0 -->

```csharp
public enum Inno.Native.Sdl3.SDLInitStatus : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57459).

## `SDL_INIT_STATUS_INITIALIZED`

<a id="api-04230be890412f0a"></a>
<!-- api: F:Inno.Native.Sdl3.SDLInitStatus.SDL_INIT_STATUS_INITIALIZED 184d5aa8edc341e88d1cb8d1d7f87ffccaf21be54316ba61799862f52b8110d3 -->

```csharp
Inno.Native.Sdl3.SDLInitStatus.SDL_INIT_STATUS_INITIALIZED = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57463).

## `SDL_INIT_STATUS_INITIALIZING`

<a id="api-1e4f75d6ae007b7a"></a>
<!-- api: F:Inno.Native.Sdl3.SDLInitStatus.SDL_INIT_STATUS_INITIALIZING 4f0f55cb201eb8071358642aeae15b87623572dc3d1f5c28b4de6555ee7cdb48 -->

```csharp
Inno.Native.Sdl3.SDLInitStatus.SDL_INIT_STATUS_INITIALIZING = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57462).

## `SDL_INIT_STATUS_UNINITIALIZED`

<a id="api-ee7cfe938da2db1b"></a>
<!-- api: F:Inno.Native.Sdl3.SDLInitStatus.SDL_INIT_STATUS_UNINITIALIZED 98a5566a9ec9a0d51eb790fd3764f582f7e12d9f566a3e30d49db60a273c42d5 -->

```csharp
Inno.Native.Sdl3.SDLInitStatus.SDL_INIT_STATUS_UNINITIALIZED = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57461).

## `SDL_INIT_STATUS_UNINITIALIZING`

<a id="api-abcdc0196c8eacc3"></a>
<!-- api: F:Inno.Native.Sdl3.SDLInitStatus.SDL_INIT_STATUS_UNINITIALIZING 14ed3e33ca6b6521d64ea8a704fe47d8d8b4f908e8b0f40e5de1b6d2ea90330a -->

```csharp
Inno.Native.Sdl3.SDLInitStatus.SDL_INIT_STATUS_UNINITIALIZING = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L57464).
