---
title: "SDLContext.RawApi — Method: SetJoystickLed"
description: "Exact Method: SetJoystickLed contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ac14c1069d955a27
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetJoystickLed

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetJoystickLed`

<a id="api-fa46ae9d5e72990f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickLed(Inno.Native.Sdl3.SDLJoystick*,System.Byte,System.Byte,System.Byte) 88b1393158353efcf6bb511d80586dddc6ddd6f298cc524d9dd8cd1cd17300ac -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickLed(Inno.Native.Sdl3.SDLJoystick* joystick, byte red, byte green, byte blue)
```

Update a joystick's LED color.
An example of a joystick LED is the light on the back of a PlayStation 4's
DualShock 4 controller.
For joysticks with a single color LED, the maximum of the RGB values will
be used as the LED brightness.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** the joystick to update.

**Parameter `red`:** the intensity of the red LED.

**Parameter `green`:** the intensity of the green LED.

**Parameter `blue`:** the intensity of the blue LED.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24419).
