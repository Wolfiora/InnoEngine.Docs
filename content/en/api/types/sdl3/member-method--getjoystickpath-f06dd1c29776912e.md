---
title: "SDLContext.RawApi — Method: GetJoystickPath"
description: "Exact Method: GetJoystickPath contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f06dd1c29776912e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickPath

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickPath`

<a id="api-7fd1807c887872bb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickPath(Inno.Native.Sdl3.SDLJoystick*) 9f42622fbaa6f4434aaac8da68e93dc5005e132aefa19454e90042e54b0efc65 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickPath(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the implementation dependent path of a joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickPathForID

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Returns:** the path of the selected joystick. If no path can be found, this
function returns NULL; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32939).
