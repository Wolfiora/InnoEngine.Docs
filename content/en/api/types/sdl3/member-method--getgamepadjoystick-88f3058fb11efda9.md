---
title: "SDLContext.RawApi — Method: GetGamepadJoystick"
description: "Exact Method: GetGamepadJoystick contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.88f3058fb11efda9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadJoystick

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadJoystick`

<a id="api-ee796e4561b50b3c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadJoystick(Inno.Native.Sdl3.SDLGamepad*) acd56cf72f278a8693c4617395ba773701900a509c2b0cf519dbe0bb4e3c660b -->

```csharp
public Inno.Native.Sdl3.SDLJoystick* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadJoystick(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the underlying joystick from a gamepad.
This function will give you a SDL_Joystick object, which allows you to use
the SDL_Joystick functions with a SDL_Gamepad object. This would be useful
for getting a joystick's position at any given time, even if it hasn't
moved (moving it would produce an event, which would have the axis' value).
The pointer returned is owned by the SDL_Gamepad. You should not call
SDL_CloseJoystick() on it, for example, since doing so will likely cause
SDL to crash.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad object that you want to get a joystick from.

**Returns:** an SDL_Joystick object, or NULL on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50880).
