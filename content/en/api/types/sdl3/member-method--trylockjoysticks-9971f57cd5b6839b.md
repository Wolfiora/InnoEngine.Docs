---
title: "SDLContext — Method: TryLockJoysticks"
description: "Exact Method: TryLockJoysticks contracts in SDLContext."
uid: api.inno.native.sdl3.9971f57cd5b6839b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: TryLockJoysticks

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TryLockJoysticks`

<a id="api-d7e59ee8a01904af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.TryLockJoysticks 8d3f3cfcc764a5e5916612cf1cdea21442b6df49b528fd5520399a4e90da9345 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.TryLockJoysticks()
```

Locking for atomic access to the joystick API.
The SDL joystick functions are thread-safe, however you can lock the
joysticks while processing to guarantee that the joystick list won't change
and joystick and gamepad events will not be delivered.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.6.0.

**Returns:** true if the joysticks were successfully locked, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13929).
