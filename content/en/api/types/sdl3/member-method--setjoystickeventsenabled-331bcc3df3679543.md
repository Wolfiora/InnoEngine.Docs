---
title: "SDLContext.RawApi — Method: SetJoystickEventsEnabled"
description: "Exact Method: SetJoystickEventsEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.331bcc3df3679543
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetJoystickEventsEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetJoystickEventsEnabled`

<a id="api-d404eb2547e31ff7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickEventsEnabled(System.Byte) 7bbedf7a71b6bafd40e93a298bbc6a8f38c8ef6689e36f57ff2ecbd3b641e214 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetJoystickEventsEnabled(byte enabled)
```

Set the state of joystick event processing.
If joystick events are disabled, you must call SDL_UpdateJoysticks()
yourself and check the state of the joystick when you want joystick
information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_JoystickEventsEnabled

**See also:** SDL_UpdateJoysticks

**Parameter `enabled`:** whether to process joystick events or not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32360).
