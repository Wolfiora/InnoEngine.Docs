---
title: "SDLContext.RawApi — Method: GetJoystickName"
description: "Exact Method: GetJoystickName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a9f60e0557edf304
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickName`

<a id="api-ae191f9151b54737"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickName(Inno.Native.Sdl3.SDLJoystick*) b65081e667f411f1dd777f73d9ccb6a62391b7231f8271c8a95406c1b0a86d44 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickName(Inno.Native.Sdl3.SDLJoystick* joystick)
```

Get the implementation dependent name of a joystick.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickNameForID

**Parameter `joystick`:** the SDL_Joystick obtained from SDL_OpenJoystick().

**Returns:** the name of the selected joystick. If no name can be found, this
function returns NULL; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45845).
