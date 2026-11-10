---
title: "SDLContext.RawApi — Method: GetNumJoystickButtons"
description: "Exact Method: GetNumJoystickButtons contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6aa7b2ba17830aac
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumJoystickButtons

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumJoystickButtons`

<a id="api-846b1cf58223dfae"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumJoystickButtons(Inno.Native.Sdl3.SDLJoystick*) 8d2f1fefb3e2bd254eda4bd66fc20639409c253ef6f0cedb0e99ab649033e3d9 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumJoystickButtons(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the number of buttons on a joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickButton

**See also:** SDL_GetNumJoystickAxes

**See also:** SDL_GetNumJoystickBalls

**See also:** SDL_GetNumJoystickHats

**Parameter `joystick`:** an SDL_Joystick structure containing joystick information.

**Returns:** the number of buttons on success or -1 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45958).
