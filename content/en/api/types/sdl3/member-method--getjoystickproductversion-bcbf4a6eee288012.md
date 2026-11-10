---
title: "SDLContext.RawApi — Method: GetJoystickProductVersion"
description: "Exact Method: GetJoystickProductVersion contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bcbf4a6eee288012
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickProductVersion

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickProductVersion`

<a id="api-68601197fc3e6ef2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickProductVersion(Inno.Native.Sdl3.SDLJoystick*) 495382910761018052c717abd92fbc1c75b581263eeb7496c8187149ace2b14a -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickProductVersion(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the product version of an opened joystick, if available.
If the product version isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickProductVersionForID

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Returns:** the product version of the selected joystick, or 0 if unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38381).
