---
title: "SDLContext.RawApi — Method: GetGamepadSensorData"
description: "Exact Method: GetGamepadSensorData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.47a3adeb9bc7386d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadSensorData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadSensorData`

<a id="api-5616d01553fb4218"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadSensorData(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLSensorType,System.Single*,System.Int32) 64bfdd445a340a6470745ee95b986d845e8da4ac65e698937cb86fd8acf524ab -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadSensorData(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLSensorType type, float* data, int num_values)
```

Get the current state of a gamepad sensor.
The number of values and interpretation of the data is sensor dependent.
See the remarks in SDL_SensorType for details for each type of sensor.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad to query.

**Parameter `type`:** the type of sensor to query.

**Parameter `data`:** a pointer filled with the current sensor state.

**Parameter `num_values`:** the number of values to write to data.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47997).
