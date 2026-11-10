---
title: "SDLAppResult"
description: "Reference for SDLAppResult in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.1f52d40045b5650a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLAppResult`

This reference describes `SDLAppResult` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_APP_CONTINUE`](#api-72e868fc623e2605) | Field |
| [`SDL_APP_FAILURE`](#api-5c00e7ece9539142) | Field |
| [`SDL_APP_SUCCESS`](#api-073811765bf0a55f) | Field |

## Type declaration

<a id="api-1f52d40045b5650a"></a>
<!-- api: T:Inno.Native.Sdl3.SDLAppResult d46bf1e417b0058bb77eca00f8477add9bb3888b3b6eadd3b551dbf68a69fcff -->

```csharp
public enum Inno.Native.Sdl3.SDLAppResult : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53145).

## `SDL_APP_CONTINUE`

<a id="api-72e868fc623e2605"></a>
<!-- api: F:Inno.Native.Sdl3.SDLAppResult.SDL_APP_CONTINUE a289941c043883932a90211b1d1264adf472f4b0ce6bc522797629db960b5560 -->

```csharp
Inno.Native.Sdl3.SDLAppResult.SDL_APP_CONTINUE = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53147).

## `SDL_APP_FAILURE`

<a id="api-5c00e7ece9539142"></a>
<!-- api: F:Inno.Native.Sdl3.SDLAppResult.SDL_APP_FAILURE 92fc7be7a57956c4338988ead70175cfe0291cfaade0de0424de7f87e75c5ed1 -->

```csharp
Inno.Native.Sdl3.SDLAppResult.SDL_APP_FAILURE = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53149).

## `SDL_APP_SUCCESS`

<a id="api-073811765bf0a55f"></a>
<!-- api: F:Inno.Native.Sdl3.SDLAppResult.SDL_APP_SUCCESS 411a355d909f4d3bc3d5e5635a194f6d19d777242e234ae4bd3ede814fbec154 -->

```csharp
Inno.Native.Sdl3.SDLAppResult.SDL_APP_SUCCESS = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53148).
