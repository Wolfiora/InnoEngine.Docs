---
title: "SDLContext.RawApi — Method: SetGamepadEventsEnabled"
description: "Exact Method: SetGamepadEventsEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fad6ce14c163ae2a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGamepadEventsEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGamepadEventsEnabled`

<a id="api-a7fe5dfd9124e1ca"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGamepadEventsEnabled(System.Byte) b0ddd6614fa1c4a388ddf9bc5205cd0bceaee0c2d2824c50a9b47c89a1c3f766 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetGamepadEventsEnabled(byte enabled)
```

Set the state of gamepad event processing.
If gamepad events are disabled, you must call SDL_UpdateGamepads() yourself
and check the state of the gamepad when you want gamepad information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GamepadEventsEnabled

**See also:** SDL_UpdateGamepads

**Parameter `enabled`:** whether to process gamepad events or not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51007).
