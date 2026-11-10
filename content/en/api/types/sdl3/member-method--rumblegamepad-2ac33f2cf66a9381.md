---
title: "SDLContext.RawApi — Method: RumbleGamepad"
description: "Exact Method: RumbleGamepad contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2ac33f2cf66a9381
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RumbleGamepad

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RumbleGamepad`

<a id="api-e8ee1de96e2b81a3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RumbleGamepad(Inno.Native.Sdl3.SDLGamepad*,System.UInt16,System.UInt16,System.UInt32) fa09a6d191fc36129ef06aee6e36571ddb9684af950c295e6c83311e1e9cec11 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.RumbleGamepad(Inno.Native.Sdl3.SDLGamepad* gamepad, ushort low_frequency_rumble, ushort high_frequency_rumble, uint duration_ms)
```

Start a rumble effect on a gamepad.
Each call to this function cancels any previous rumble effect, and calling
it with 0 intensity stops any rumbling.
This function requires you to process SDL events or call
SDL_UpdateJoysticks() to update rumble state.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad to vibrate.

**Parameter `low_frequency_rumble`:** the intensity of the low frequency (left)
rumble motor, from 0 to 0xFFFF.

**Parameter `high_frequency_rumble`:** the intensity of the high frequency (right)
rumble motor, from 0 to 0xFFFF.

**Parameter `duration_ms`:** the duration of the rumble effect, in milliseconds.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41190).
