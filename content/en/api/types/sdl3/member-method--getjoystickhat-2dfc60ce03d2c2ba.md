---
title: "SDLContext.RawApi — Method: GetJoystickHat"
description: "Exact Method: GetJoystickHat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2dfc60ce03d2c2ba
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickHat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickHat`

<a id="api-0bad8390ddc3ac50"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickHat(Inno.Native.Sdl3.SDLJoystick*,System.Int32) 516f61d2ad1e24da8116ffe2fd5870e60a3eb6c6de66d1fa198c495452c79557 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickHat(Inno.Native.Sdl3.SDLJoystick* joystick, int hat)
```

Get the current state of a POV hat on a joystick.
The returned value will be one of the `SDL_HAT_*` values.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumJoystickHats

**Parameter `joystick`:** an SDL_Joystick structure containing joystick information.

**Parameter `hat`:** the hat index to get the state from; indices start at index 0.

**Returns:** the current hat position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33125).
