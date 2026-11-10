---
title: "SDLContext.RawApi — Method: IsJoystickHaptic"
description: "Exact Method: IsJoystickHaptic contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f57bc9177258ae31
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: IsJoystickHaptic

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsJoystickHaptic`

<a id="api-374e59ecaa1fa6dd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.IsJoystickHaptic(Inno.Native.Sdl3.SDLJoystick*) 4e0c56d97ceac997b7bc1d7418cbf7f931fd3bce6f54d99762d7f44c9394d5a3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.IsJoystickHaptic(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Query if a joystick has haptic features.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_OpenHapticFromJoystick

**Parameter `joystick`:** the SDL_Joystick to test for haptic capabilities.

**Returns:** true if the joystick is haptic or false if it isn't.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30058).
