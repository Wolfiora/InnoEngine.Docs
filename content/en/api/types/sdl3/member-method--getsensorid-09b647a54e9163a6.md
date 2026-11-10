---
title: "SDLContext.RawApi — Method: GetSensorId"
description: "Exact Method: GetSensorId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.09b647a54e9163a6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensorId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorId`

<a id="api-a794235f3db18d22"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensorId(Inno.Native.Sdl3.SDLSensor*) 082fb52e0281a82150d88f59571fc2967f41fca3bd5287881404a8b0cea51f55 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetSensorId(Inno.Native.Sdl3.SDLSensor* sensor)
```

Get the instance ID of a sensor.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `sensor`:** the SDL_Sensor object to inspect.

**Returns:** the sensor instance ID, or 0 on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52532).
