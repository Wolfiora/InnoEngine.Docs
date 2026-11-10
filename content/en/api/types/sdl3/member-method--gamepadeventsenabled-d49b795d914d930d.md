---
title: "SDL — Method: GamepadEventsEnabled"
description: "Exact Method: GamepadEventsEnabled contracts in SDL."
uid: api.inno.native.sdl3.d49b795d914d930d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GamepadEventsEnabled

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GamepadEventsEnabled`

<a id="api-088834810c57033b"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GamepadEventsEnabled 54cb2937eb4b81b42cdd31dd30f469084b95b96ffab4d67e362d2c53108453ac -->

```csharp
public static bool Inno.Native.Sdl3.SDL.GamepadEventsEnabled()
```

Query the state of gamepad event processing.
If gamepad events are disabled, you must call SDL_UpdateGamepads() yourself
and check the state of the gamepad when you want gamepad information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetGamepadEventsEnabled

**Returns:** true if gamepad events are being processed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L744).
