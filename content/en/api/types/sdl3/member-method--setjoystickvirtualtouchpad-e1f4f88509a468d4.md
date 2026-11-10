---
title: "SDLContext.RawApi — Method: SetJoystickVirtualTouchpad"
description: "Exact Method: SetJoystickVirtualTouchpad contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e1f4f88509a468d4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetJoystickVirtualTouchpad

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetJoystickVirtualTouchpad`

<a id="api-e8c4a4ab3de6a215"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickVirtualTouchpad(Inno.Native.Sdl3.SDLJoystick*,System.Int32,System.Int32,System.Byte,System.Single,System.Single,System.Single) 85500df236d457e1b24e2f1c78ab221e06c0cb6add73eee5ccf94400852c9f5f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickVirtualTouchpad(Inno.Native.Sdl3.SDLJoystick* joystick, int touchpad, int finger, byte down, float x, float y, float pressure)
```

Set touchpad finger state on an opened virtual joystick.
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

**See also:** SDL_SetJoystickVirtualSensorData

**Parameter `joystick`:** the virtual joystick on which to set state.

**Parameter `touchpad`:** the index of the touchpad on the virtual joystick to
update.

**Parameter `finger`:** the index of the finger on the touchpad to set.

**Parameter `down`:** true if the finger is pressed, false if the finger is released.

**Parameter `x`:** the x coordinate of the finger on the touchpad, normalized 0 to 1,
with the origin in the upper left.

**Parameter `y`:** the y coordinate of the finger on the touchpad, normalized 0 to 1,
with the origin in the upper left.

**Parameter `pressure`:** the pressure of the finger.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24346).
