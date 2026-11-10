---
title: "SDLAsyncIOResult"
description: "Reference for SDLAsyncIOResult in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.99a7b2028c9bad21
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAsyncIOResult`

This reference describes `SDLAsyncIOResult` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_ASYNCIO_CANCELED`](#api-a9576b39c94b3074) | Field |
| [`SDL_ASYNCIO_COMPLETE`](#api-ec3ef1df7918a8da) | Field |
| [`SDL_ASYNCIO_FAILURE`](#api-058872899b6d5a01) | Field |

## Type declaration

<a id="api-99a7b2028c9bad21"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAsyncIOResult 7e0aa4d86b200b21825f750a729a42ef28bed81c9ef661ae93b14d78b036e098 -->

```csharp
public enum Inno.Native.Sdl3.SDLAsyncIOResult : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53289).

## `SDL_ASYNCIO_CANCELED`

<a id="api-a9576b39c94b3074"></a>
<!-- api: F:Inno.Native.Sdl3.SDLAsyncIOResult.SDL_ASYNCIO_CANCELED 5bf14054cfe10c9214466cc23bb51e79d6c0e17367ceb5c6b7cf95230d2d9a58 -->

```csharp
Inno.Native.Sdl3.SDLAsyncIOResult.SDL_ASYNCIO_CANCELED = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53293).

## `SDL_ASYNCIO_COMPLETE`

<a id="api-ec3ef1df7918a8da"></a>
<!-- api: F:Inno.Native.Sdl3.SDLAsyncIOResult.SDL_ASYNCIO_COMPLETE 9efddd913b05b9a4689efc8c216880504f215ca121713b7bb2f38b85dc1f1673 -->

```csharp
Inno.Native.Sdl3.SDLAsyncIOResult.SDL_ASYNCIO_COMPLETE = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53291).

## `SDL_ASYNCIO_FAILURE`

<a id="api-058872899b6d5a01"></a>
<!-- api: F:Inno.Native.Sdl3.SDLAsyncIOResult.SDL_ASYNCIO_FAILURE 5ccf31cccea1d7e90726414f11ed29e9a51f557c1032bd00582de506b7b019f5 -->

```csharp
Inno.Native.Sdl3.SDLAsyncIOResult.SDL_ASYNCIO_FAILURE = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53292).
