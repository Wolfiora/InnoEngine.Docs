---
title: "SDLContext — Method: UpdateSensors"
description: "Exact Method: UpdateSensors contracts in SDLContext."
uid: api.inno.native.sdl3.b8e3870cc8663cdd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: UpdateSensors

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateSensors`

<a id="api-0a5227b41dd1fd99"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.UpdateSensors 69323eec3e8a81aeab4d53b66ca59c7b39cfd8dc09a0af1f4ac3ebd9676d8ef8 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.UpdateSensors()
```

Update the current state of the open sensors.
This is called automatically by the event loop if sensor events are
enabled.
This needs to be called from the thread that initialized the sensor
subsystem.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12297).
