---
title: "SDLContext.RawApi — Method: GetGamepadTypeFromString"
description: "Exact Method: GetGamepadTypeFromString contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.276cf03aa39630a4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadTypeFromString

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadTypeFromString`

<a id="api-13bb93dd2bed5038"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadTypeFromString(System.SByte*) cf94a8de75983aafb09da9ed710192c6829e5f7a087a333ced2d876e2b114b36 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadType Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadTypeFromString(sbyte* str)
```

Convert a string into SDL_GamepadType enum.
This function is called internally to translate SDL_Gamepad mapping strings
for the underlying joystick device into the consistent SDL_Gamepad mapping.
You do not normally need to call this function unless you are parsing
SDL_Gamepad mappings in your own code.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadStringForType

**Parameter `str`:** string representing a SDL_GamepadType type.

**Returns:** the SDL_GamepadType enum corresponding to the input string, or
`SDL_GAMEPAD_TYPE_UNKNOWN` if no match was found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38109).
