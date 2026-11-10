---
title: "SDLContext.RawApi — Method: JoystickEventsEnabled"
description: "Exact Method: JoystickEventsEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.01179312342fc77a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: JoystickEventsEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `JoystickEventsEnabled`

<a id="api-fbd9e53586a5f333"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.JoystickEventsEnabled 6684b045e88e4c4d0ab9fd36541ddab813d09017b74887ab1995f42ffcbdabb4 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.JoystickEventsEnabled()
```

Query the state of joystick event processing.
If joystick events are disabled, you must call SDL_UpdateJoysticks()
yourself and check the state of the joystick when you want joystick
information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetJoystickEventsEnabled

**Returns:** true if joystick events are being processed, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36774).
