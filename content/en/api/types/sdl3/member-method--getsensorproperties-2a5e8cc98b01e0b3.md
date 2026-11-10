---
title: "SDLContext.RawApi — Method: GetSensorProperties"
description: "Exact Method: GetSensorProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2a5e8cc98b01e0b3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensorProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorProperties`

<a id="api-73ee0ff9cd48c805"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensorProperties(Inno.Native.Sdl3.SDLSensor*) 4031c5a40549c067aa5e268efcf38c6cbf7daf332f5005caae5c205e22290574 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetSensorProperties(Inno.Native.Sdl3.SDLSensor* sensor)
```

Get the properties associated with a sensor.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `sensor`:** the SDL_Sensor object.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49352).
