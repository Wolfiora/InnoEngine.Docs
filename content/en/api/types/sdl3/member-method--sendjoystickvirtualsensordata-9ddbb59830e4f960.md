---
title: "SDLContext.RawApi — Method: SendJoystickVirtualSensorData"
description: "Exact Method: SendJoystickVirtualSensorData contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9ddbb59830e4f960
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SendJoystickVirtualSensorData

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SendJoystickVirtualSensorData`

<a id="api-d281eab039f0c2f9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SendJoystickVirtualSensorData(Inno.Native.Sdl3.SDLJoystick*,Inno.Native.Sdl3.SDLSensorType,System.UInt64,System.Single*,System.Int32) ea8b4fdaeb660a72b5501e32fd7f54c7e7ca93da78b4362b4cea337b9f0d2929 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SendJoystickVirtualSensorData(Inno.Native.Sdl3.SDLJoystick* joystick, Inno.Native.Sdl3.SDLSensorType type, ulong sensor_timestamp, float* data, int num_values)
```

Send a sensor update for an opened virtual joystick.
Please note that values set here will not be applied until the next call to
SDL_UpdateJoysticks, which can either be called directly, or can be called
indirectly through various other SDL APIs, including, but not limited to
the following: SDL_PollEvent, SDL_PumpEvents, SDL_WaitEventTimeout,
SDL_WaitEvent.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetJoystickVirtualAxis

**See also:** SDL_SetJoystickVirtualButton

**See also:** SDL_SetJoystickVirtualBall

**See also:** SDL_SetJoystickVirtualHat

**See also:** SDL_SetJoystickVirtualTouchpad

**Parameter `joystick`:** the virtual joystick on which to set state.

**Parameter `type`:** the type of the sensor on the virtual joystick to update.

**Parameter `sensor_timestamp`:** a 64-bit timestamp in nanoseconds associated with
the sensor reading.

**Parameter `data`:** the data associated with the sensor reading.

**Parameter `num_values`:** the number of values pointed to by `data`.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49977).
