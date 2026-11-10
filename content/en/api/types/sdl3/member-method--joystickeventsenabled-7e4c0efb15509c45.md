---
title: "SDLContext — Method: JoystickEventsEnabled"
description: "Exact Method: JoystickEventsEnabled contracts in SDLContext."
uid: api.inno.native.sdl3.7e4c0efb15509c45
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: JoystickEventsEnabled

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `JoystickEventsEnabled`

<a id="api-a483a4ca2f52364e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.JoystickEventsEnabled c7baef0cf76cf40f75eb30dacec80aaa18e184290b1cdcfefed3633b382ef55e -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.JoystickEventsEnabled()
```

Query the state of joystick event processing.
If joystick events are disabled, you must call SDL_UpdateJoysticks()
yourself and check the state of the joystick when you want joystick
information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetJoystickEventsEnabled

**Returns:** true if joystick events are being processed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14413).
