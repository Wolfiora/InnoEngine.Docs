---
title: "SDLContext.RawApi — Method: GetJoystickType"
description: "Exact Method: GetJoystickType contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.52410a4f93e7dff1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickType

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickType`

<a id="api-696996105b8fbe8b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickType(Inno.Native.Sdl3.SDLJoystick*) d1e87aa001392fe1933b0dfd5066a1053eda0abf8b55c4ebb1ed29326cce6fc8 -->

```csharp
public Inno.Native.Sdl3.SDLJoystickType Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickType(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the type of an opened joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickTypeForID

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Returns:** the SDL_JoystickType of the selected joystick.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50233).
