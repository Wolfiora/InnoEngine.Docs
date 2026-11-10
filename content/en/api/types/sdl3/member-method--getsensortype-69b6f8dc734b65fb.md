---
title: "SDLContext.RawApi — Method: GetSensorType"
description: "Exact Method: GetSensorType contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.69b6f8dc734b65fb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensorType

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorType`

<a id="api-8a6adeafe54bfe3e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensorType(Inno.Native.Sdl3.SDLSensor*) 7b01b4a62ed18bd1620695355a0319a7a47a232201597aedfd56326eaf5e71c4 -->

```csharp
public Inno.Native.Sdl3.SDLSensorType Inno.Native.Sdl3.SDLContext.RawApi.GetSensorType(Inno.Native.Sdl3.SDLSensor* sensor)
```

Get the type of a sensor.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `sensor`:** the SDL_Sensor object to inspect.

**Returns:** the SDL_SensorType type, or `SDL_SENSOR_INVALID` if `sensor` is
NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21037).
