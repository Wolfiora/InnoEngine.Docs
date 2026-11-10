---
title: "SDLContext.RawApi — Method: SetGamepadPlayerIndex"
description: "Exact Method: SetGamepadPlayerIndex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cdd160b39b1e274c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGamepadPlayerIndex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGamepadPlayerIndex`

<a id="api-633237d67a095988"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGamepadPlayerIndex(Inno.Native.Sdl3.SDLGamepad*,System.Int32) 56348fa4b693366caf554fec141b69150bb5eee93b12ae02c39e0859c78045dd -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGamepadPlayerIndex(Inno.Native.Sdl3.SDLGamepad* gamepad, int player_index)
```

Set the player index of an opened gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadPlayerIndex

**Parameter `gamepad`:** the gamepad object to adjust.

**Parameter `player_index`:** player index to assign to this gamepad, or -1 to clear
the player index and turn off player LEDs.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20795).
