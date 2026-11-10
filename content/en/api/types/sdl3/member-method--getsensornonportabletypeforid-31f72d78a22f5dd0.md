---
title: "SDLContext — Method: GetSensorNonPortableTypeForId"
description: "Exact Method: GetSensorNonPortableTypeForId contracts in SDLContext."
uid: api.inno.native.sdl3.31f72d78a22f5dd0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetSensorNonPortableTypeForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensorNonPortableTypeForId`

<a id="api-b65de27e8b40ca7b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetSensorNonPortableTypeForId(System.UInt32) 3a75508564b380d71739b614d2e436a8b038dda21cd38e71c857766cd1305199 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetSensorNonPortableTypeForId(uint instance_id)
```

Get the platform dependent type of a sensor.
This can be called before any sensors are opened.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `instance_id`:** the sensor instance ID.

**Returns:** the sensor platform dependent type, or -1 if `instance_id` is not
valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12721).
