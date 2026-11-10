---
title: "SDLContext — Method: SetGamepadEventsEnabled"
description: "Exact Method: SetGamepadEventsEnabled contracts in SDLContext."
uid: api.inno.native.sdl3.c7a75c66a22faf69
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: SetGamepadEventsEnabled

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGamepadEventsEnabled`

<a id="api-a27359a779a1cb9d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.SetGamepadEventsEnabled(System.Boolean) ff539a6a7cfdbba608e826ad621f73069aed9ba899f5e5902c7efa57557a509c -->

```csharp
public void Inno.Native.Sdl3.SDLContext.SetGamepadEventsEnabled(bool enabled)
```

Set the state of gamepad event processing.
If gamepad events are disabled, you must call SDL_UpdateGamepads() yourself
and check the state of the gamepad when you want gamepad information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GamepadEventsEnabled

**See also:** SDL_UpdateGamepads

**Parameter `enabled`:** whether to process gamepad events or not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16293).
