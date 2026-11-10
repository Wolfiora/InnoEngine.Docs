---
title: "SDL — Method: UpdateSensors"
description: "Exact Method: UpdateSensors contracts in SDL."
uid: api.inno.native.sdl3.dff78ca0731a8cb1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: UpdateSensors

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateSensors`

<a id="api-1308451496c4f02c"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.UpdateSensors 277eb95d875e075fb11d8cd8a810df6b653190cf381314f56a0de7dfc831b771 -->

```csharp
public static void Inno.Native.Sdl3.SDL.UpdateSensors()
```

Update the current state of the open sensors.
This is called automatically by the event loop if sensor events are
enabled.
This needs to be called from the thread that initialized the sensor
subsystem.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L784).
