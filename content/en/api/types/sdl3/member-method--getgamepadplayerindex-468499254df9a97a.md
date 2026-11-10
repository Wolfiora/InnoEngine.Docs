---
title: "SDLContext.RawApi — Method: GetGamepadPlayerIndex"
description: "Exact Method: GetGamepadPlayerIndex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.468499254df9a97a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadPlayerIndex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadPlayerIndex`

<a id="api-546a11fc94e44607"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadPlayerIndex(Inno.Native.Sdl3.SDLGamepad*) 1f5f5c5a002d9b461e0f31a50bf91ea524edd22e5084ba2ccba1682063178775 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadPlayerIndex(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the player index of an opened gamepad.
For XInput gamepads this returns the XInput user index.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetGamepadPlayerIndex

**Parameter `gamepad`:** the gamepad object to query.

**Returns:** the player index for gamepad, or -1 if it's not available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34151).
