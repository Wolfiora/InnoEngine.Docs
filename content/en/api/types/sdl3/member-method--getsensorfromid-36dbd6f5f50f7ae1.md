---
title: "SDLContext.RawApi — Method: GetSensorFromId"
description: "Exact Method: GetSensorFromId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.36dbd6f5f50f7ae1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensorFromId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorFromId`

<a id="api-df46c8d6f061d518"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensorFromId(System.UInt32) 5db5400683a9f605cc797f6c88a836d62c77b2739d69ac7e457b7c166eb56a34 -->

```csharp
public Inno.Native.Sdl3.SDLSensor* Inno.Native.Sdl3.SDLContext.RawApi.GetSensorFromId(uint instance_id)
```

Return the SDL_Sensor associated with an instance ID.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the sensor instance ID.

**Returns:** an SDL_Sensor object or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39081).
