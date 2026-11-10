---
title: "SDLContext.RawApi — Method: SetJoystickVirtualBall"
description: "Exact Method: SetJoystickVirtualBall contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.86184941e8725241
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetJoystickVirtualBall

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetJoystickVirtualBall`

<a id="api-775a25a159f7e8fa"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickVirtualBall(Inno.Native.Sdl3.SDLJoystick*,System.Int32,System.Int16,System.Int16) 428b20438eb8f7a00778b484ce8fc00fc0f2c27e1404318da27512f538a4034c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickVirtualBall(Inno.Native.Sdl3.SDLJoystick* joystick, int ball, short xrel, short yrel)
```

Generate ball motion on an opened virtual joystick.
Please note that values set here will not be applied until the next call to
SDL_UpdateJoysticks, which can either be called directly, or can be called
indirectly through various other SDL APIs, including, but not limited to
the following: SDL_PollEvent, SDL_PumpEvents, SDL_WaitEventTimeout,
SDL_WaitEvent.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetJoystickVirtualAxis

**See also:** SDL_SetJoystickVirtualButton

**See also:** SDL_SetJoystickVirtualHat

**See also:** SDL_SetJoystickVirtualTouchpad

**See also:** SDL_SetJoystickVirtualSensorData

**Parameter `joystick`:** the virtual joystick on which to set state.

**Parameter `ball`:** the index of the ball on the virtual joystick to update.

**Parameter `xrel`:** the relative motion on the X axis.

**Parameter `yrel`:** the relative motion on the Y axis.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21970).
