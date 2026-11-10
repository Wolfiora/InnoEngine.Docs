---
title: "SDLContext.RawApi — Method: GetSensorNonPortableTypeForId"
description: "Exact Method: GetSensorNonPortableTypeForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cf51e6004f16b8a1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensorNonPortableTypeForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorNonPortableTypeForId`

<a id="api-e56e095e19268e65"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensorNonPortableTypeForId(System.UInt32) 2aaee2f486ba51580259e9f4244526ba1b592f3047e508734de7721443b5a28b -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetSensorNonPortableTypeForId(uint instance_id)
```

Get the platform dependent type of a sensor.
This can be called before any sensors are opened.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the sensor instance ID.

**Returns:** the sensor platform dependent type, or -1 if `instance_id` is not
valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25388).
