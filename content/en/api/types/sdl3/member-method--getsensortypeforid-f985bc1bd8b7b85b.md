---
title: "SDL — Method: GetSensorTypeForId"
description: "Exact Method: GetSensorTypeForId contracts in SDL."
uid: api.inno.native.sdl3.f985bc1bd8b7b85b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetSensorTypeForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorTypeForId`

<a id="api-f21a5b1933dc7a97"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetSensorTypeForId(System.UInt32) 182770ce2977a62869119b2da08601f80729dae31bc4481dcd367b6dc026bcad -->

```csharp
public static Inno.Native.Sdl3.SDLSensorType Inno.Native.Sdl3.SDL.GetSensorTypeForId(uint instance_id)
```

Get the type of a sensor.
This can be called before any sensors are opened.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the sensor instance ID.

**Returns:** the SDL_SensorType, or `SDL_SENSOR_INVALID` if `instance_id` is
not valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L946).
