---
title: "SDLContext.RawApi — Method: OpenSensor"
description: "Exact Method: OpenSensor contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d3820309589b0f32
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OpenSensor

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OpenSensor`

<a id="api-e2fcedb74418e31e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OpenSensor(System.UInt32) d5200ac019f16fae0e318037be4f40524e5d4314abd5dc48c22eae7276b54d5c -->

```csharp
public Inno.Native.Sdl3.SDLSensor* Inno.Native.Sdl3.SDLContext.RawApi.OpenSensor(uint instance_id)
```

Open a sensor for use.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the sensor instance ID.

**Returns:** an SDL_Sensor object or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48897).
