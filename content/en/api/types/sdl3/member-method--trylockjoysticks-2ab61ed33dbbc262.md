---
title: "SDL — Method: TryLockJoysticks"
description: "Exact Method: TryLockJoysticks contracts in SDL."
uid: api.inno.native.sdl3.2ab61ed33dbbc262
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: TryLockJoysticks

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TryLockJoysticks`

<a id="api-8c3a07ced1d3151b"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.TryLockJoysticks a34861981717ce2d0d484af138c340a6116fc6a42d8be4de9c7cb7130e77b858 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.TryLockJoysticks()
```

Locking for atomic access to the joystick API.
The SDL joystick functions are thread-safe, however you can lock the
joysticks while processing to guarantee that the joystick list won't change
and joystick and gamepad events will not be delivered.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.6.0.

**Returns:** true if the joysticks were successfully locked, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2115).
