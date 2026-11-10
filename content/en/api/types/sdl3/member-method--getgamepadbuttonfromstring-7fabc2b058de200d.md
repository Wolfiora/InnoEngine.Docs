---
title: "SDLContext.RawApi — Method: GetGamepadButtonFromString"
description: "Exact Method: GetGamepadButtonFromString contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7fabc2b058de200d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadButtonFromString

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadButtonFromString`

<a id="api-45e3db62d0b9151d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadButtonFromString(System.SByte*) 255c1b37e7a8e5cb23a1f8888fa91baf7b7d0f893a01ac6cdd69c4732ff8d8b4 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadButton Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadButtonFromString(sbyte* str)
```

Convert a string into an SDL_GamepadButton enum.
This function is called internally to translate SDL_Gamepad mapping strings
for the underlying joystick device into the consistent SDL_Gamepad mapping.
You do not normally need to call this function unless you are parsing
SDL_Gamepad mappings in your own code.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadStringForButton

**Parameter `str`:** string representing a SDL_Gamepad button.

**Returns:** the SDL_GamepadButton enum corresponding to the input string, or
`SDL_GAMEPAD_BUTTON_INVALID` if no match was found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24024).
