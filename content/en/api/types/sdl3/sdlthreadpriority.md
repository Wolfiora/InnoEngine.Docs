---
title: "SDLThreadPriority"
description: "Reference for SDLThreadPriority in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.99766c11a4ec6754
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLThreadPriority`

This reference describes `SDLThreadPriority` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_THREAD_PRIORITY_HIGH`](#api-766939a8e75569e4) | Field |
| [`SDL_THREAD_PRIORITY_LOW`](#api-988fc8d9613c39a5) | Field |
| [`SDL_THREAD_PRIORITY_NORMAL`](#api-5d22cfda59833d6b) | Field |
| [`SDL_THREAD_PRIORITY_TIME_CRITICAL`](#api-d5299739acbda989) | Field |

## Type declaration

<a id="api-99766c11a4ec6754"></a>
<!-- api: T:Inno.Native.Sdl3.SDLThreadPriority c0443890fc8f7e67ec247c694f4ea57932020b096eaa06bc5633a16baccc6ec4 -->

```csharp
public enum Inno.Native.Sdl3.SDLThreadPriority : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59789).

## `SDL_THREAD_PRIORITY_HIGH`

<a id="api-766939a8e75569e4"></a>
<!-- api: F:Inno.Native.Sdl3.SDLThreadPriority.SDL_THREAD_PRIORITY_HIGH 3a769520ee9f708b9719458075ce37c6f465dfdb22b91c6e3d75416753e9a048 -->

```csharp
Inno.Native.Sdl3.SDLThreadPriority.SDL_THREAD_PRIORITY_HIGH = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59793).

## `SDL_THREAD_PRIORITY_LOW`

<a id="api-988fc8d9613c39a5"></a>
<!-- api: F:Inno.Native.Sdl3.SDLThreadPriority.SDL_THREAD_PRIORITY_LOW 916add3c3394d80f762229537043bef354a17e1e12588ea985ffd566cc54fab3 -->

```csharp
Inno.Native.Sdl3.SDLThreadPriority.SDL_THREAD_PRIORITY_LOW = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59791).

## `SDL_THREAD_PRIORITY_NORMAL`

<a id="api-5d22cfda59833d6b"></a>
<!-- api: F:Inno.Native.Sdl3.SDLThreadPriority.SDL_THREAD_PRIORITY_NORMAL bd1f81804f5909dd5ca1292ab65e20863d7c7c9d91b37fb1c23143376ecf6aff -->

```csharp
Inno.Native.Sdl3.SDLThreadPriority.SDL_THREAD_PRIORITY_NORMAL = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59792).

## `SDL_THREAD_PRIORITY_TIME_CRITICAL`

<a id="api-d5299739acbda989"></a>
<!-- api: F:Inno.Native.Sdl3.SDLThreadPriority.SDL_THREAD_PRIORITY_TIME_CRITICAL f490ab7c25cfe8cf9f37f61694b0162304e3719106dc48a5b37baf88c4438cb9 -->

```csharp
Inno.Native.Sdl3.SDLThreadPriority.SDL_THREAD_PRIORITY_TIME_CRITICAL = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L59794).
