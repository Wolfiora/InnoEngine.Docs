---
title: "SDLContext.RawApi — Method: GetSensorTypeForId"
description: "Exact Method: GetSensorTypeForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.33c6a1647aefbf2c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensorTypeForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorTypeForId`

<a id="api-28131934d76ecc10"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensorTypeForId(System.UInt32) 1247c879ea1d7ac5ebda31638fd9be362461e4cb87032974c98842cad530f29c -->

```csharp
public Inno.Native.Sdl3.SDLSensorType Inno.Native.Sdl3.SDLContext.RawApi.GetSensorTypeForId(uint instance_id)
```

Get the type of a sensor.
This can be called before any sensors are opened.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the sensor instance ID.

**Returns:** the SDL_SensorType, or `SDL_SENSOR_INVALID` if `instance_id` is
not valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23528).
