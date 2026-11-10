---
title: "SDL — Method: JoystickEventsEnabled"
description: "Exact Method: JoystickEventsEnabled contracts in SDL."
uid: api.inno.native.sdl3.113252588b9de422
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: JoystickEventsEnabled

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `JoystickEventsEnabled`

<a id="api-b4a18a2c0ffd01b9"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.JoystickEventsEnabled 3818390c174dc34ef1b65cd9567efa64f786f3e08c1404ed429751dabf7554f3 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.JoystickEventsEnabled()
```

Query the state of joystick event processing.
If joystick events are disabled, you must call SDL_UpdateJoysticks()
yourself and check the state of the joystick when you want joystick
information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetJoystickEventsEnabled

**Returns:** true if joystick events are being processed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2525).
