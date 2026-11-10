---
title: "SDLContext.RawApi — Method: GetSensorNonPortableType"
description: "Exact Method: GetSensorNonPortableType contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b7cdd8815b95f09e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensorNonPortableType

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorNonPortableType`

<a id="api-0e089598ad267dee"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensorNonPortableType(Inno.Native.Sdl3.SDLSensor*) e6ff2b50bdfdb68f36f3c91e05687c9fe652e52398fdcd9b647104524d11f8a4 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetSensorNonPortableType(Inno.Native.Sdl3.SDLSensor* sensor)
```

Get the platform dependent type of a sensor.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `sensor`:** the SDL_Sensor object to inspect.

**Returns:** the sensor platform dependent type, or -1 if `sensor` is NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29073).
