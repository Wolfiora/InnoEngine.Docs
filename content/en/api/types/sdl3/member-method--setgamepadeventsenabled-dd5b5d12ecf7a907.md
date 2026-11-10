---
title: "SDL — Method: SetGamepadEventsEnabled"
description: "Exact Method: SetGamepadEventsEnabled contracts in SDL."
uid: api.inno.native.sdl3.dd5b5d12ecf7a907
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: SetGamepadEventsEnabled

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGamepadEventsEnabled`

<a id="api-63892d937228cc3d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.SetGamepadEventsEnabled(System.Boolean) bc069dc40f07760e4784b39d76000c73eea1f6240c394dd5da00e116d1204470 -->

```csharp
public static void Inno.Native.Sdl3.SDL.SetGamepadEventsEnabled(bool enabled)
```

Set the state of gamepad event processing.
If gamepad events are disabled, you must call SDL_UpdateGamepads() yourself
and check the state of the gamepad when you want gamepad information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GamepadEventsEnabled

**See also:** SDL_UpdateGamepads

**Parameter `enabled`:** whether to process gamepad events or not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4064).
