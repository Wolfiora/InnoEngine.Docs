---
title: "SDLContext — Method: GamepadEventsEnabled"
description: "Exact Method: GamepadEventsEnabled contracts in SDLContext."
uid: api.inno.native.sdl3.64ea4e7cf8b72e59
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GamepadEventsEnabled

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GamepadEventsEnabled`

<a id="api-c62b4bf9bd992c3f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GamepadEventsEnabled e490dd6678510f7f7e194cbc5f4a6dd4ad1efeee55b4165a903425face0aaaa6 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.GamepadEventsEnabled()
```

Query the state of gamepad event processing.
If gamepad events are disabled, you must call SDL_UpdateGamepads() yourself
and check the state of the gamepad when you want gamepad information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetGamepadEventsEnabled

**Returns:** true if gamepad events are being processed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12245).
