---
title: "SDLContext.RawApi — Method: GetNumJoystickHats"
description: "Exact Method: GetNumJoystickHats contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.efbb145156a32019
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumJoystickHats

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumJoystickHats`

<a id="api-52bb74da744dddc7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumJoystickHats(Inno.Native.Sdl3.SDLJoystick*) 1078104b8df72368907b9d7bd96ee03373df417e365cbbdaa0862d0a92b8c2c6 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumJoystickHats(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the number of POV hats on a joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickHat

**See also:** SDL_GetNumJoystickAxes

**See also:** SDL_GetNumJoystickBalls

**See also:** SDL_GetNumJoystickButtons

**Parameter `joystick`:** an SDL_Joystick structure containing joystick information.

**Returns:** the number of POV hats on success or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43986).
