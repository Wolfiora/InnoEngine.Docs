---
title: "SDL — Method: GetSensorNonPortableTypeForId"
description: "Exact Method: GetSensorNonPortableTypeForId contracts in SDL."
uid: api.inno.native.sdl3.085f77acb87d9af4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetSensorNonPortableTypeForId

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorNonPortableTypeForId`

<a id="api-c87a38aeef37860c"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetSensorNonPortableTypeForId(System.UInt32) 786d51675b64d12e301d7a7883a38d3206495e7abcc7d0bba086bdb3ee75f5f7 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetSensorNonPortableTypeForId(uint instance_id)
```

Get the platform dependent type of a sensor.
This can be called before any sensors are opened.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the sensor instance ID.

**Returns:** the sensor platform dependent type, or -1 if `instance_id` is not
valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1124).
