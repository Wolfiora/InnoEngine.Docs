---
title: "SDLContext.RawApi — Method: GetGamepadSensorDataRate"
description: "Exact Method: GetGamepadSensorDataRate contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6b83e8e0e984b057
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadSensorDataRate

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadSensorDataRate`

<a id="api-fa1e343126127f1e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadSensorDataRate(Inno.Native.Sdl3.SDLGamepad*,Inno.Native.Sdl3.SDLSensorType) 29158dd06702784199cc2d1598584827e89f54afefcdea8da515ecd174c426b9 -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadSensorDataRate(Inno.Native.Sdl3.SDLGamepad* gamepad, Inno.Native.Sdl3.SDLSensorType type)
```

Get the data rate (number of events per second) of a gamepad sensor.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad to query.

**Parameter `type`:** the type of sensor to query.

**Returns:** the data rate, or 0.0f if the data rate is not available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26757).
