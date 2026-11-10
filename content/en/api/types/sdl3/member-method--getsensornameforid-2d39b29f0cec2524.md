---
title: "SDLContext.RawApi — Method: GetSensorNameForId"
description: "Exact Method: GetSensorNameForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2d39b29f0cec2524
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensorNameForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorNameForId`

<a id="api-4e79167ea77c5341"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensorNameForId(System.UInt32) f0aa5b365206f065fb9ff0b4f5ddd5c0072b4b358d2b3dcd1c24342dd1a7aba4 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetSensorNameForId(uint instance_id)
```

Get the implementation dependent name of a sensor.
This can be called before any sensors are opened.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the sensor instance ID.

**Returns:** the sensor name, or NULL if `instance_id` is not valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41378).
