---
title: "SDLContext.RawApi — Method: SetGamepadSensorEnabled"
description: "Exact Method: SetGamepadSensorEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.db88426947c10895
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGamepadSensorEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGamepadSensorEnabled`

<a id="api-31c0ea2e3ffaa8a7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGamepadSensorEnabled(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLSensorType,System.Byte) 08f89ad42302b0a83caf13dd286205e3f182e685074712f9c5471d5a3e71c94c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGamepadSensorEnabled(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLSensorType type, byte enabled)
```

Set whether data reporting for a gamepad sensor is enabled.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GamepadHasSensor

**See also:** SDL_GamepadSensorEnabled

**Parameter `gamepad`:** the gamepad to update.

**Parameter `type`:** the type of sensor to enable/disable.

**Parameter `enabled`:** whether data reporting should be enabled.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43235).
