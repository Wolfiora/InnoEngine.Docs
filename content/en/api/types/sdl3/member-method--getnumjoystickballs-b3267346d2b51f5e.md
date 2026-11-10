---
title: "SDLContext.RawApi — Method: GetNumJoystickBalls"
description: "Exact Method: GetNumJoystickBalls contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b3267346d2b51f5e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumJoystickBalls

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumJoystickBalls`

<a id="api-dec67079587a40ed"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumJoystickBalls(Inno.Native.Sdl3.SDLJoystick*) 97d69478a72e1f51ebc41ef82242361d42b370400a5d401d46e07d7eae41b8eb -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumJoystickBalls(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the number of trackballs on a joystick.
Joystick trackballs have only relative motion events associated with them
and their state cannot be polled.
Most joysticks do not have trackballs.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickBall

**See also:** SDL_GetNumJoystickAxes

**See also:** SDL_GetNumJoystickButtons

**See also:** SDL_GetNumJoystickHats

**Parameter `joystick`:** an SDL_Joystick structure containing joystick information.

**Returns:** the number of trackballs on success or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36912).
