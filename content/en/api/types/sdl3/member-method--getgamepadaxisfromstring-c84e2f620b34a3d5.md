---
title: "SDLContext.RawApi — Method: GetGamepadAxisFromString"
description: "Exact Method: GetGamepadAxisFromString contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c84e2f620b34a3d5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadAxisFromString

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadAxisFromString`

<a id="api-ab6865d730259bf0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadAxisFromString(System.SByte*) b269d3d3fdb78d92a679d92bd78b11eae4106d6ca6f2cfa8264741c13df961f8 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadAxis Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadAxisFromString(sbyte* str)
```

Convert a string into SDL_GamepadAxis enum.
This function is called internally to translate SDL_Gamepad mapping strings
for the underlying joystick device into the consistent SDL_Gamepad mapping.
You do not normally need to call this function unless you are parsing
SDL_Gamepad mappings in your own code.
Note specially that "righttrigger" and "lefttrigger" map to
`SDL_GAMEPAD_AXIS_RIGHT_TRIGGER` and `SDL_GAMEPAD_AXIS_LEFT_TRIGGER`,
respectively.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadStringForAxis

**Parameter `str`:** string representing a SDL_Gamepad axis.

**Returns:** the SDL_GamepadAxis enum corresponding to the input string, or
`SDL_GAMEPAD_AXIS_INVALID` if no match was found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46155).
