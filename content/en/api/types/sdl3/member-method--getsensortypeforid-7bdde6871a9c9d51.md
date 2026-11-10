---
title: "SDLContext — Method: GetSensorTypeForId"
description: "Exact Method: GetSensorTypeForId contracts in SDLContext."
uid: api.inno.native.sdl3.7bdde6871a9c9d51
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetSensorTypeForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorTypeForId`

<a id="api-270bdcc785e992cd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetSensorTypeForId(System.UInt32) d6d986b254d269e94f089428e87e8d6c37e4f947ae0d8492b2afd4c6303d7c46 -->

```csharp
public Inno.Native.Sdl3.SDLSensorType Inno.Native.Sdl3.SDLContext.GetSensorTypeForId(uint instance_id)
```

Get the type of a sensor.
This can be called before any sensors are opened.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the sensor instance ID.

**Returns:** the SDL_SensorType, or `SDL_SENSOR_INVALID` if `instance_id` is
not valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12499).
