---
title: "SDLContext.RawApi — Method: GetJoystickAxis"
description: "Exact Method: GetJoystickAxis contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3eebddc43a460993
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickAxis

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickAxis`

<a id="api-19c928c5d66db18f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickAxis(Inno.Native.Sdl3.SDLJoystick*,System.Int32) d809b2e2366ee5272251b28052284e5ee2ad1abd83defde7a011a4d3819491df -->

```csharp
public short Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickAxis(Inno.Native.Sdl3.SDLJoystick* joystick, int axis)
```

Get the current state of an axis control on a joystick.
SDL makes no promises about what part of the joystick any given axis refers
to. Your game should have some sort of configuration UI to let users
specify what each axis should be bound to. Alternately, SDL's higher-level
Game Controller API makes a great effort to apply order to this lower-level
interface, so you know that a specific axis is the "left thumb stick," etc.
The value returned by SDL_GetJoystickAxis() is a signed integer (-32768 to
32767) representing the current position of the axis. It may be necessary
to impose certain tolerances on these values to account for jitter.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetNumJoystickAxes

**Parameter `joystick`:** an SDL_Joystick structure containing joystick information.

**Parameter `axis`:** the axis to query; the axis indices start at index 0.

**Returns:** a 16-bit signed integer representing the current position of the
axis or 0 on failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37174).
