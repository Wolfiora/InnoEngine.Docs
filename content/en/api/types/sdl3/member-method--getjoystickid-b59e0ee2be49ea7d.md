---
title: "SDLContext.RawApi — Method: GetJoystickId"
description: "Exact Method: GetJoystickId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b59e0ee2be49ea7d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickId`

<a id="api-0ac5088b8bf012ff"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickId(Inno.Native.Sdl3.SDLJoystick*) 0cf17e51c03bba5f0ab58c924918aa05c6e5ddb50031a8f71794287ecab3f44a -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickId(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the instance ID of an opened joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** an SDL_Joystick structure containing joystick information.

**Returns:** the instance ID of the specified joystick on success or 0 on
failure; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31605).
