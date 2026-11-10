---
title: "SDL — Method: LockJoysticks"
description: "Exact Method: LockJoysticks contracts in SDL."
uid: api.inno.native.sdl3.c5e1e65f3dba871e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: LockJoysticks

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockJoysticks`

<a id="api-06667598a1b2cc5e"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.LockJoysticks 7117eea2786ed3d50009208fc51d17049896d3220f799b51ab88146eb2e84eef -->

```csharp
public static void Inno.Native.Sdl3.SDL.LockJoysticks()
```

Locking for atomic access to the joystick API.
The SDL joystick functions are thread-safe, however you can lock the
joysticks while processing to guarantee that the joystick list won't change
and joystick and gamepad events will not be delivered.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L542).
