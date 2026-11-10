---
title: "SDLContext.RawApi — Method: GamepadHasSensor"
description: "Exact Method: GamepadHasSensor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.26119041a5e26f2f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GamepadHasSensor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GamepadHasSensor`

<a id="api-5944323cf3cb255b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GamepadHasSensor(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLSensorType) d615293c5ca35920336c34b53a9e78d8ac3182824b067d13baf74909729a88a9 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GamepadHasSensor(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLSensorType type)
```

Return whether a gamepad has a particular sensor.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadSensorData

**See also:** SDL_GetGamepadSensorDataRate

**See also:** SDL_SetGamepadSensorEnabled

**Parameter `gamepad`:** the gamepad to query.

**Parameter `type`:** the type of sensor to query.

**Returns:** true if the sensor exists, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31029).
