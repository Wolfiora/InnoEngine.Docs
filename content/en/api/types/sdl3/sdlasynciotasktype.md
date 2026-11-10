---
title: "SDLAsyncIOTaskType"
description: "Reference for SDLAsyncIOTaskType in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.0b24a6e6ea633b04
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAsyncIOTaskType`

This reference describes `SDLAsyncIOTaskType` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_ASYNCIO_TASK_CLOSE`](#api-53fbc7afe81308c1) | Field |
| [`SDL_ASYNCIO_TASK_READ`](#api-9fbca88db03d987f) | Field |
| [`SDL_ASYNCIO_TASK_WRITE`](#api-a15b81733b90e0cc) | Field |

## Type declaration

<a id="api-0b24a6e6ea633b04"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAsyncIOTaskType cda214186512462e0ff543eafff3de3b4ab7072d229aaddbafeb3b7163440e87 -->

```csharp
public enum Inno.Native.Sdl3.SDLAsyncIOTaskType : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53302).

## `SDL_ASYNCIO_TASK_CLOSE`

<a id="api-53fbc7afe81308c1"></a>
<!-- api: F:Inno.Native.Sdl3.SDLAsyncIOTaskType.SDL_ASYNCIO_TASK_CLOSE 2127d40f2635c2c41e36368f5848bca073e294eee99c61a087694fcf6fac4654 -->

```csharp
Inno.Native.Sdl3.SDLAsyncIOTaskType.SDL_ASYNCIO_TASK_CLOSE = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53306).

## `SDL_ASYNCIO_TASK_READ`

<a id="api-9fbca88db03d987f"></a>
<!-- api: F:Inno.Native.Sdl3.SDLAsyncIOTaskType.SDL_ASYNCIO_TASK_READ fd04fb44fabef7c9f7ee5e1bdf09fc2c33b23dff71bd0a18ac64876ad208febe -->

```csharp
Inno.Native.Sdl3.SDLAsyncIOTaskType.SDL_ASYNCIO_TASK_READ = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53304).

## `SDL_ASYNCIO_TASK_WRITE`

<a id="api-a15b81733b90e0cc"></a>
<!-- api: F:Inno.Native.Sdl3.SDLAsyncIOTaskType.SDL_ASYNCIO_TASK_WRITE dcf34828900a0cee37dcfdc0e3785fd9d571b0fc5273cdc3eeae0ebdb1839a88 -->

```csharp
Inno.Native.Sdl3.SDLAsyncIOTaskType.SDL_ASYNCIO_TASK_WRITE = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53305).
