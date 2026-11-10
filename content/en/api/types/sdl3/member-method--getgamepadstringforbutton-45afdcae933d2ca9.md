---
title: "SDLContext.RawApi — Method: GetGamepadStringForButton"
description: "Exact Method: GetGamepadStringForButton contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.45afdcae933d2ca9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadStringForButton

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadStringForButton`

<a id="api-adb3fd1ca96e7179"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadStringForButton(Inno.Native.Sdl3.SDLGamepadButton) d91b86cb592f6f16799d8de8c8a9479eb4b096f1479fee3489d1778fee63f772 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadStringForButton(Inno.Native.Sdl3.SDLGamepadButton button)
```

Convert from an SDL_GamepadButton enum to a string.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadButtonFromString

**Parameter `button`:** an enum value for a given SDL_GamepadButton.

**Returns:** a string for the given button, or NULL if an invalid button is
specified. The string returned is of the format used by
SDL_Gamepad mapping strings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52284).
