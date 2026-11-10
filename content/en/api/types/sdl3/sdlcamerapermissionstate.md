---
title: "SDLCameraPermissionState"
description: "Reference for SDLCameraPermissionState in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.cf3c394ffc9aacba
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLCameraPermissionState`

This reference describes `SDLCameraPermissionState` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_CAMERA_PERMISSION_STATE_APPROVED`](#api-8c8ad7864fef4f66) | Field |
| [`SDL_CAMERA_PERMISSION_STATE_DENIED`](#api-ff9df4616a0c1e51) | Field |
| [`SDL_CAMERA_PERMISSION_STATE_PENDING`](#api-271ab827a5deecea) | Field |

## Type declaration

<a id="api-cf3c394ffc9aacba"></a>
<!-- api: T:Inno.Native.Sdl3.SDLCameraPermissionState 646dd0496efd34eada25c517697e207adb671e3d14e2f1cc434646e11298c89e -->

```csharp
public enum Inno.Native.Sdl3.SDLCameraPermissionState : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53572).

## `SDL_CAMERA_PERMISSION_STATE_APPROVED`

<a id="api-8c8ad7864fef4f66"></a>
<!-- api: F:Inno.Native.Sdl3.SDLCameraPermissionState.SDL_CAMERA_PERMISSION_STATE_APPROVED b6a65ebb9b26e47b5bfb4113b4c6e8c151e156fd1386328ed54b13865aa11504 -->

```csharp
Inno.Native.Sdl3.SDLCameraPermissionState.SDL_CAMERA_PERMISSION_STATE_APPROVED = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53576).

## `SDL_CAMERA_PERMISSION_STATE_DENIED`

<a id="api-ff9df4616a0c1e51"></a>
<!-- api: F:Inno.Native.Sdl3.SDLCameraPermissionState.SDL_CAMERA_PERMISSION_STATE_DENIED 904d10ace5b589f573f935b9309a8685b2455b63ee70eb147a8b36af78b43db2 -->

```csharp
Inno.Native.Sdl3.SDLCameraPermissionState.SDL_CAMERA_PERMISSION_STATE_DENIED = -1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53574).

## `SDL_CAMERA_PERMISSION_STATE_PENDING`

<a id="api-271ab827a5deecea"></a>
<!-- api: F:Inno.Native.Sdl3.SDLCameraPermissionState.SDL_CAMERA_PERMISSION_STATE_PENDING d3808fb5ab08513bc5311b21790ea2fa910aad0c13545a4046344879fd2e13c7 -->

```csharp
Inno.Native.Sdl3.SDLCameraPermissionState.SDL_CAMERA_PERMISSION_STATE_PENDING = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L53575).
