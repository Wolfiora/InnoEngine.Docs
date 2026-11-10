---
title: "SDLContext.RawApi — Method: GetJoystickProperties"
description: "Exact Method: GetJoystickProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a4f4b2b661a3ed17
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickProperties`

<a id="api-ebe84283d2290147"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickProperties(Inno.Native.Sdl3.SDLJoystick*) d47f27d9d97108cd944ccc0f5ff514d5cf0bf5b13dc5bf637e6921ecb6d8951a -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickProperties(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the properties associated with a joystick.
The following read-only properties are provided by SDL:
- `SDL_PROP_JOYSTICK_CAP_MONO_LED_BOOLEAN`: true if this joystick has an
LED that has adjustable brightness
- `SDL_PROP_JOYSTICK_CAP_RGB_LED_BOOLEAN`: true if this joystick has an LED
that has adjustable color
- `SDL_PROP_JOYSTICK_CAP_PLAYER_LED_BOOLEAN`: true if this joystick has a
player LED
- `SDL_PROP_JOYSTICK_CAP_RUMBLE_BOOLEAN`: true if this joystick has
left/right rumble
- `SDL_PROP_JOYSTICK_CAP_TRIGGER_RUMBLE_BOOLEAN`: true if this joystick has
simple trigger rumble

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19721).
