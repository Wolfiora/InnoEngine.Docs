---
title: "SDLContext.RawApi — Method: GetJoystickPlayerIndex"
description: "Exact Method: GetJoystickPlayerIndex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.97a310f58fdcd435
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickPlayerIndex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickPlayerIndex`

<a id="api-9c5ad1caf1267675"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickPlayerIndex(Inno.Native.Sdl3.SDLJoystick*) aff3699a9a34ed2530813696971ece98bac4f020e5fe5c4165f8536f107c3317 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickPlayerIndex(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the player index of an opened joystick.
For XInput controllers this returns the XInput user index. Many joysticks
will not be able to supply this information.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetJoystickPlayerIndex

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Returns:** the player index, or -1 if it's not available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32887).
