---
title: "SDLContext.RawApi — Method: RumbleGamepadTriggers"
description: "Exact Method: RumbleGamepadTriggers contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f765b549ab9eb425
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RumbleGamepadTriggers

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RumbleGamepadTriggers`

<a id="api-9b2b9dd8f44349c8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RumbleGamepadTriggers(Inno.Native.Sdl3.SDLGamepad*,System.UInt16,System.UInt16,System.UInt32) 7d67b2452ce0a3e737fb7b99f2f9999e49793131267cef1d9d7da95e3677db6a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RumbleGamepadTriggers(Inno.Native.Sdl3.SDLGamepad* gamepad, ushort left_rumble, ushort right_rumble, uint duration_ms)
```

Start a rumble effect in the gamepad's triggers.
Each call to this function cancels any previous trigger rumble effect, and
calling it with 0 intensity stops any rumbling.
Note that this is rumbling of the _triggers_ and not the gamepad as a
whole. This is currently only supported on Xbox One gamepads. If you want
the (more common) whole-gamepad rumble, use SDL_RumbleGamepad() instead.
This function requires you to process SDL events or call
SDL_UpdateJoysticks() to update rumble state.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RumbleGamepad

**Parameter `gamepad`:** the gamepad to vibrate.

**Parameter `left_rumble`:** the intensity of the left trigger rumble motor, from 0
to 0xFFFF.

**Parameter `right_rumble`:** the intensity of the right trigger rumble motor, from 0
to 0xFFFF.

**Parameter `duration_ms`:** the duration of the rumble effect, in milliseconds.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39322).
