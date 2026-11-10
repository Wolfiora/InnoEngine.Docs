---
title: "SDLContext.RawApi — Method: SetJoystickPlayerIndex"
description: "Exact Method: SetJoystickPlayerIndex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a1e84bf45f2680cc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetJoystickPlayerIndex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetJoystickPlayerIndex`

<a id="api-089f69cd9784b09f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickPlayerIndex(Inno.Native.Sdl3.SDLJoystick*,System.Int32) 713d946c7a59b0614b77cc400e970c91b1796a4c90bb786cea9c022ee4f6658a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickPlayerIndex(Inno.Native.Sdl3.SDLJoystick* joystick, int player_index)
```

Set the player index of an opened joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickPlayerIndex

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Parameter `player_index`:** player index to assign to this joystick, or -1 to clear
the player index and turn off player LEDs.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36568).
