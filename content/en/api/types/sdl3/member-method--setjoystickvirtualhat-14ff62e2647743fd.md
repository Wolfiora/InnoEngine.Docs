---
title: "SDLContext.RawApi — Method: SetJoystickVirtualHat"
description: "Exact Method: SetJoystickVirtualHat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.14ff62e2647743fd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetJoystickVirtualHat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetJoystickVirtualHat`

<a id="api-4053e5f205d0f680"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickVirtualHat(Inno.Native.Sdl3.SDLJoystick*,System.Int32,System.Byte) a05e25289072f905a7bf232ae03ffcb9af3e4889334c4b84d4746d953edcba8e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickVirtualHat(Inno.Native.Sdl3.SDLJoystick* joystick, int hat, byte value)
```

Set the state of a hat on an opened virtual joystick.
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

**See also:** SDL_SetJoystickVirtualTouchpad

**See also:** SDL_SetJoystickVirtualSensorData

**Parameter `joystick`:** the virtual joystick on which to set state.

**Parameter `hat`:** the index of the hat on the virtual joystick to update.

**Parameter `value`:** the new value for the specified hat.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38417).
