---
title: "SDLThreadState"
description: "Reference for SDLThreadState in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.f9c4c5caa4145ed3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLThreadState`

This reference describes `SDLThreadState` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_THREAD_ALIVE`](#api-2fbce325c8373977) | Field |
| [`SDL_THREAD_COMPLETE`](#api-a2d3230e11b73f54) | Field |
| [`SDL_THREAD_DETACHED`](#api-6ca357d74c86b126) | Field |
| [`SDL_THREAD_UNKNOWN`](#api-7838f8d1ba33ba1d) | Field |

## Type declaration

<a id="api-f9c4c5caa4145ed3"></a>
<!-- api: T:Inno.Native.Sdl3.SDLThreadState 6d608282a425e18c40861b3eb205f7c71a981361653446e35d7e1f04a71c5e3d -->

```csharp
public enum Inno.Native.Sdl3.SDLThreadState : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59803).

## `SDL_THREAD_ALIVE`

<a id="api-2fbce325c8373977"></a>
<!-- api: F:Inno.Native.Sdl3.SDLThreadState.SDL_THREAD_ALIVE 4465d752f593682ef2db3a7482045e77ea45c6ca8c4a6df9a8d918216b0a3657 -->

```csharp
Inno.Native.Sdl3.SDLThreadState.SDL_THREAD_ALIVE = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59806).

## `SDL_THREAD_COMPLETE`

<a id="api-a2d3230e11b73f54"></a>
<!-- api: F:Inno.Native.Sdl3.SDLThreadState.SDL_THREAD_COMPLETE 9d6abe104296b6efb7c29f79c40b1fc714b4c84a85677d95bfae9d167bb25d77 -->

```csharp
Inno.Native.Sdl3.SDLThreadState.SDL_THREAD_COMPLETE = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59808).

## `SDL_THREAD_DETACHED`

<a id="api-6ca357d74c86b126"></a>
<!-- api: F:Inno.Native.Sdl3.SDLThreadState.SDL_THREAD_DETACHED 09da0beb2dcd42c981b663cfb9c89955892538e2dd6a86158b633c7677fab6e5 -->

```csharp
Inno.Native.Sdl3.SDLThreadState.SDL_THREAD_DETACHED = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59807).

## `SDL_THREAD_UNKNOWN`

<a id="api-7838f8d1ba33ba1d"></a>
<!-- api: F:Inno.Native.Sdl3.SDLThreadState.SDL_THREAD_UNKNOWN c68860465e412bdb55ba2b482b483c82760af9ac75bbeb164ecbfa2c8e083b7d -->

```csharp
Inno.Native.Sdl3.SDLThreadState.SDL_THREAD_UNKNOWN = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59805).
