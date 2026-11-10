---
title: "SDLContext.RawApi — Method: GamepadEventsEnabled"
description: "Exact Method: GamepadEventsEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5162085d5ba64795
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GamepadEventsEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GamepadEventsEnabled`

<a id="api-254bdee1d0498f7b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GamepadEventsEnabled b8a50a9fe3faf6f957a9101da479fdf759a2c7a376366d696550525f48d9c297 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GamepadEventsEnabled()
```

Query the state of gamepad event processing.
If gamepad events are disabled, you must call SDL_UpdateGamepads() yourself
and check the state of the gamepad when you want gamepad information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetGamepadEventsEnabled

**Returns:** true if gamepad events are being processed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21616).
