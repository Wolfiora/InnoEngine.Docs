---
title: "SDLContext.RawApi — Method: GetSensorName"
description: "Exact Method: GetSensorName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1f1d225138e5aa4e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensorName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorName`

<a id="api-b9b8bebc9846b874"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensorName(Inno.Native.Sdl3.SDLSensor*) 0ead6f6632edf90a35096e27273992903bff92720d2cbadfb3c122b07c69f54b -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetSensorName(Inno.Native.Sdl3.SDLSensor* sensor)
```

Get the implementation dependent name of a sensor.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `sensor`:** the SDL_Sensor object.

**Returns:** the sensor name or NULL on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36488).
