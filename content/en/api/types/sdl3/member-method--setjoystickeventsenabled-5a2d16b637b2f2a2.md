---
title: "SDLContext — Method: SetJoystickEventsEnabled"
description: "Exact Method: SetJoystickEventsEnabled contracts in SDLContext."
uid: api.inno.native.sdl3.5a2d16b637b2f2a2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetJoystickEventsEnabled

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetJoystickEventsEnabled`

<a id="api-21c49685bd2ad697"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetJoystickEventsEnabled(System.Boolean) 2eade4f9b1e8c6a9b3f7f6ca26d5c5d2c770617fc5a3d4bfffee7d13bda7fafc -->

```csharp
public void Inno.Native.Sdl3.SDLContext.SetJoystickEventsEnabled(bool enabled)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13616).
