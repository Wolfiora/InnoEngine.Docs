---
title: "SDLContext.RawApi — Method: SendJoystickEffect"
description: "Exact Method: SendJoystickEffect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.430b182ad3a89e8b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SendJoystickEffect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SendJoystickEffect`

<a id="api-1e7567b6666d102f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SendJoystickEffect(Inno.Native.Sdl3.SDLJoystick*,System.Void*,System.Int32) 32c79bb4d28c72a7d460c7b81342b7a78cae11f503b8a017e396b0ae81506864 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SendJoystickEffect(Inno.Native.Sdl3.SDLJoystick* joystick, void* data, int size)
```

Send a joystick specific effect packet.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** the joystick to affect.

**Parameter `data`:** the data to send to the joystick.

**Parameter `size`:** the size of the data to send to the joystick.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18682).
