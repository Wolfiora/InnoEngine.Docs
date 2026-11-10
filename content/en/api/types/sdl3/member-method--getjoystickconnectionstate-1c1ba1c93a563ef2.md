---
title: "SDLContext.RawApi — Method: GetJoystickConnectionState"
description: "Exact Method: GetJoystickConnectionState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1c1ba1c93a563ef2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickConnectionState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickConnectionState`

<a id="api-63fb2c99c0b68a66"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickConnectionState(Inno.Native.Sdl3.SDLJoystick*) 50c51c43423cfec988fbd25e7a8a483acf9285f45b487fa5770cb87ea1751947 -->

```csharp
public Inno.Native.Sdl3.SDLJoystickConnectionState Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickConnectionState(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the connection state of a joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `joystick`:** the joystick to query.

**Returns:** the connection state on success or
`SDL_JOYSTICK_CONNECTION_INVALID` on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38462).
