---
title: "SDL — Method: SetJoystickEventsEnabled"
description: "Exact Method: SetJoystickEventsEnabled contracts in SDL."
uid: api.inno.native.sdl3.8c054f98c2f6cff3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetJoystickEventsEnabled

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetJoystickEventsEnabled`

<a id="api-d4edd7f1e0c44f20"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetJoystickEventsEnabled(System.Boolean) db198a447336eda6957c97413daee49e4af28bd9a614d8e3b45a66b0e60fe383 -->

```csharp
public static void Inno.Native.Sdl3.SDL.SetJoystickEventsEnabled(bool enabled)
```

Set the state of joystick event processing.
If joystick events are disabled, you must call SDL_UpdateJoysticks()
yourself and check the state of the joystick when you want joystick
information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_JoystickEventsEnabled

**See also:** SDL_UpdateJoysticks

**Parameter `enabled`:** whether to process joystick events or not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1862).
