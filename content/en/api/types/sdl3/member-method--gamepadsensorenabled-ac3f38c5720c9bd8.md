---
title: "SDLContext.RawApi — Method: GamepadSensorEnabled"
description: "Exact Method: GamepadSensorEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ac3f38c5720c9bd8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GamepadSensorEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GamepadSensorEnabled`

<a id="api-2668e4188a7fc4d5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GamepadSensorEnabled(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLSensorType) c94e1e8fb035d2f16cbda6f15498e4a9f33c0821a61fb24ea88c068b2087ac0d -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GamepadSensorEnabled(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLSensorType type)
```

Query whether sensor data reporting is enabled for a gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetGamepadSensorEnabled

**Parameter `gamepad`:** the gamepad to query.

**Parameter `type`:** the type of sensor to query.

**Returns:** true if the sensor is enabled, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35728).
