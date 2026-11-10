---
title: "SDLContext.RawApi — Method: GetSensorData"
description: "Exact Method: GetSensorData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.778b39d226add18b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensorData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorData`

<a id="api-52f93e0b5f211ebd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensorData(Inno.Native.Sdl3.SDLSensor*,System.Single*,System.Int32) 275fc4fad99126faf4dca6cbdf1421b46fa6fb9ac3fdc5edec304fb2a344b17a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetSensorData(Inno.Native.Sdl3.SDLSensor* sensor, float* data, int num_values)
```

Get the current state of an opened sensor.
The number of values and interpretation of the data is sensor dependent.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `sensor`:** the SDL_Sensor object to query.

**Parameter `data`:** a pointer filled with the current sensor state.

**Parameter `num_values`:** the number of values to write to data.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29843).
