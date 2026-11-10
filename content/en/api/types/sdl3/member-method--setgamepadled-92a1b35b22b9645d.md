---
title: "SDLContext.RawApi — Method: SetGamepadLed"
description: "Exact Method: SetGamepadLed contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.92a1b35b22b9645d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGamepadLed

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGamepadLed`

<a id="api-fb6efce774537530"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGamepadLed(Inno.Native.Sdl3.SDLGamepad*,System.Byte,System.Byte,System.Byte) 2701a65c89469d345c63aa2ea10a356bdc896a8273bf44fe86fac390305d4613 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGamepadLed(Inno.Native.Sdl3.SDLGamepad* gamepad, byte red, byte green, byte blue)
```

Update a gamepad's LED color.
An example of a joystick LED is the light on the back of a PlayStation 4's
DualShock 4 controller.
For gamepads with a single color LED, the maximum of the RGB values will be
used as the LED brightness.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad to update.

**Parameter `red`:** the intensity of the red LED.

**Parameter `green`:** the intensity of the green LED.

**Parameter `blue`:** the intensity of the blue LED.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51531).
