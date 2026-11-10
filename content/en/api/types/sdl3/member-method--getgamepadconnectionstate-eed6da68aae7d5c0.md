---
title: "SDLContext.RawApi — Method: GetGamepadConnectionState"
description: "Exact Method: GetGamepadConnectionState contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.eed6da68aae7d5c0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadConnectionState

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadConnectionState`

<a id="api-b7740da2f36c865c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadConnectionState(Inno.Native.Sdl3.SDLGamepad*) c3b1222f076c7ed1a1388fac6df7b52a904d6c054c974e2a1a260845e2ca4a44 -->

```csharp
public Inno.Native.Sdl3.SDLJoystickConnectionState Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadConnectionState(Inno.Native.Sdl3.SDLGamepad* gamepad)
```

Get the connection state of a gamepad.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `gamepad`:** the gamepad object to query.

**Returns:** the connection state on success or
`SDL_JOYSTICK_CONNECTION_INVALID` on failure; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40982).
