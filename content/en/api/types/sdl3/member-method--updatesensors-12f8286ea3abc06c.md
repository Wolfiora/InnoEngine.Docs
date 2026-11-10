---
title: "SDLContext.RawApi — Method: UpdateSensors"
description: "Exact Method: UpdateSensors contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.12f8286ea3abc06c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UpdateSensors

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateSensors`

<a id="api-ff7c5bf609b362f6"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UpdateSensors db9e715a13e44aa0a914288308f8ee95dafd03eca81d4e870761a43183a7e0a1 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UpdateSensors()
```

Update the current state of the open sensors.
This is called automatically by the event loop if sensor events are
enabled.
This needs to be called from the thread that initialized the sensor
subsystem.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21886).
