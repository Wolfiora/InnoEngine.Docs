---
title: "SDLContext.RawApi — Method: SetJoystickVirtualAxis"
description: "Exact Method: SetJoystickVirtualAxis contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.392f94809e180406
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetJoystickVirtualAxis

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetJoystickVirtualAxis`

<a id="api-0c014265edcd6b6c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickVirtualAxis(Inno.Native.Sdl3.SDLJoystick*,System.Int32,System.Int16) 6bcba89390b8ec05228857d5f1546aa9492dd0e2e55631bd6dae4074926d7aeb -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickVirtualAxis(Inno.Native.Sdl3.SDLJoystick* joystick, int axis, short value)
```

Set the state of an axis on an opened virtual joystick.
Please note that values set here will not be applied until the next call to
SDL_UpdateJoysticks, which can either be called directly, or can be called
indirectly through various other SDL APIs, including, but not limited to
the following: SDL_PollEvent, SDL_PumpEvents, SDL_WaitEventTimeout,
SDL_WaitEvent.
Note that when sending trigger axes, you should scale the value to the full
range of Sint16. For example, a trigger at rest would have the value of
`SDL_JOYSTICK_AXIS_MIN`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetJoystickVirtualButton

**See also:** SDL_SetJoystickVirtualBall

**See also:** SDL_SetJoystickVirtualHat

**See also:** SDL_SetJoystickVirtualTouchpad

**See also:** SDL_SetJoystickVirtualSensorData

**Parameter `joystick`:** the virtual joystick on which to set state.

**Parameter `axis`:** the index of the axis on the virtual joystick to update.

**Parameter `value`:** the new value for the specified axis.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18196).
