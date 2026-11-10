---
title: "SDLContext.RawApi — Method: SetJoystickVirtualButton"
description: "Exact Method: SetJoystickVirtualButton contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.74c7993f209f0b4f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetJoystickVirtualButton

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetJoystickVirtualButton`

<a id="api-5eeda94256d94b10"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickVirtualButton(Inno.Native.Sdl3.SDLJoystick*,System.Int32,System.Byte) 2f9b13ccdb0447248e60e0019f8f4b2cffa19207cc978aaa6c1e6416c08d02be -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickVirtualButton(Inno.Native.Sdl3.SDLJoystick* joystick, int button, byte down)
```

Set the state of a button on an opened virtual joystick.
Please note that values set here will not be applied until the next call to
SDL_UpdateJoysticks, which can either be called directly, or can be called
indirectly through various other SDL APIs, including, but not limited to
the following: SDL_PollEvent, SDL_PumpEvents, SDL_WaitEventTimeout,
SDL_WaitEvent.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetJoystickVirtualAxis

**See also:** SDL_SetJoystickVirtualBall

**See also:** SDL_SetJoystickVirtualHat

**See also:** SDL_SetJoystickVirtualTouchpad

**See also:** SDL_SetJoystickVirtualSensorData

**Parameter `joystick`:** the virtual joystick on which to set state.

**Parameter `button`:** the index of the button on the virtual joystick to update.

**Parameter `down`:** true if the button is pressed, false otherwise.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44928).
