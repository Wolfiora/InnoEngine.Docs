---
title: "SDLContext.RawApi — Method: RumbleJoystickTriggers"
description: "Exact Method: RumbleJoystickTriggers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.605660e8849e55d1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RumbleJoystickTriggers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RumbleJoystickTriggers`

<a id="api-14e973caa6917088"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RumbleJoystickTriggers(Inno.Native.Sdl3.SDLJoystick*,System.UInt16,System.UInt16,System.UInt32) ff387f63599a85a62a6f16f8f3c79ea3658a0266506fe2bb5191a1081ff6a2d4 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RumbleJoystickTriggers(Inno.Native.Sdl3.SDLJoystick* joystick, ushort left_rumble, ushort right_rumble, uint duration_ms)
```

Start a rumble effect in the joystick's triggers.
Each call to this function cancels any previous trigger rumble effect, and
calling it with 0 intensity stops any rumbling.
Note that this is rumbling of the _triggers_ and not the game controller as
a whole. This is currently only supported on Xbox One controllers. If you
want the (more common) whole-controller rumble, use SDL_RumbleJoystick()
instead.
This function requires you to process SDL events or call
SDL_UpdateJoysticks() to update rumble state.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RumbleJoystick

**Parameter `joystick`:** the joystick to vibrate.

**Parameter `left_rumble`:** the intensity of the left trigger rumble motor, from 0
to 0xFFFF.

**Parameter `right_rumble`:** the intensity of the right trigger rumble motor, from 0
to 0xFFFF.

**Parameter `duration_ms`:** the duration of the rumble effect, in milliseconds.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23672).
