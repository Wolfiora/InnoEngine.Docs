---
title: "SDLContext.RawApi — Method: GetGamepadProperties"
description: "Exact Method: GetGamepadProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7e8b29ec91bd8293
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadProperties`

<a id="api-9caee8925f6c2964"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadProperties(Inno.Native.Sdl3.SDLGamepad*) 7c6f8e8805238045bee0563dc24a1ae162139be6d38d867c1db64d8a5871dfa3 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadProperties(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the properties associated with an opened gamepad.
These properties are shared with the underlying joystick object.
The following read-only properties are provided by SDL:
- `SDL_PROP_GAMEPAD_CAP_MONO_LED_BOOLEAN`: true if this gamepad has an LED
that has adjustable brightness
- `SDL_PROP_GAMEPAD_CAP_RGB_LED_BOOLEAN`: true if this gamepad has an LED
that has adjustable color
- `SDL_PROP_GAMEPAD_CAP_PLAYER_LED_BOOLEAN`: true if this gamepad has a
player LED
- `SDL_PROP_GAMEPAD_CAP_RUMBLE_BOOLEAN`: true if this gamepad has
left/right rumble
- `SDL_PROP_GAMEPAD_CAP_TRIGGER_RUMBLE_BOOLEAN`: true if this gamepad has
simple trigger rumble

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** a gamepad identifier previously returned by
SDL_OpenGamepad().

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32255).
