---
title: "SDLContext.RawApi — Method: JoystickConnected"
description: "Exact Method: JoystickConnected contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e2b69d74d4fd7a2c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: JoystickConnected

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `JoystickConnected`

<a id="api-d64f8eab11fbb6ff"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.JoystickConnected(Inno.Native.Sdl3.SDLJoystick*) e89a18c89d572b17511a55590102a07eb3155659432581a457a02e08af6a1295 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.JoystickConnected(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the status of a specified joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** the joystick to query.

**Returns:** true if the joystick has been opened, false if it has not; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22445).
