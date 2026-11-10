---
title: "SDLContext.RawApi — Method: GetNumJoystickAxes"
description: "Exact Method: GetNumJoystickAxes contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6633a1742f87e9d2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumJoystickAxes

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumJoystickAxes`

<a id="api-7e41bdaeb1367e07"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumJoystickAxes(Inno.Native.Sdl3.SDLJoystick*) 63edb0a47d9b725d5dc865526da7ac6fb34166224d48c397b972971d0afc6ccb -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumJoystickAxes(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the number of general axis controls on a joystick.
Often, the directional pad on a game controller will either look like 4
separate buttons or a POV hat, and not axes, but all of this is up to the
device and platform.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickAxis

**See also:** SDL_GetNumJoystickBalls

**See also:** SDL_GetNumJoystickButtons

**See also:** SDL_GetNumJoystickHats

**Parameter `joystick`:** an SDL_Joystick structure containing joystick information.

**Returns:** the number of axis controls/number of axes on success or -1 on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39167).
