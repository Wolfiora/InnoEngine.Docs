---
title: "SDLContext.RawApi — Method: RumbleJoystick"
description: "Exact Method: RumbleJoystick contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.390d1dcfdc70c6f0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RumbleJoystick

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RumbleJoystick`

<a id="api-790ac19022e589ac"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RumbleJoystick(Inno.Native.Sdl3.SDLJoystick*,System.UInt16,System.UInt16,System.UInt32) 69ad0538b4eb383879abcd122d3967fd08db9f470e5c0e9205079be9bc72a6de -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RumbleJoystick(Inno.Native.Sdl3.SDLJoystick* joystick, ushort low_frequency_rumble, ushort high_frequency_rumble, uint duration_ms)
```

Start a rumble effect.
Each call to this function cancels any previous rumble effect, and calling
it with 0 intensity stops any rumbling.
This function requires you to process SDL events or call
SDL_UpdateJoysticks() to update rumble state.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** the joystick to vibrate.

**Parameter `low_frequency_rumble`:** the intensity of the low frequency (left)
rumble motor, from 0 to 0xFFFF.

**Parameter `high_frequency_rumble`:** the intensity of the high frequency (right)
rumble motor, from 0 to 0xFFFF.

**Parameter `duration_ms`:** the duration of the rumble effect, in milliseconds.

**Returns:** true, or false if rumble isn't supported on this joystick.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L48990).
