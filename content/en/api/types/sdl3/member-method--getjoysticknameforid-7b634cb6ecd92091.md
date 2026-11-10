---
title: "SDLContext.RawApi — Method: GetJoystickNameForId"
description: "Exact Method: GetJoystickNameForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7b634cb6ecd92091
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickNameForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickNameForId`

<a id="api-f0ae5dfccd08d7fb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickNameForId(System.UInt32) ed4dde77bcd52b7c8f9950b156d7b05c52e0e3a2b32cc803c5ec440326cb4978 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickNameForId(uint instance_id)
```

Get the implementation dependent name of a joystick.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickName

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the name of the selected joystick. If no name can be found, this
function returns NULL; call SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25220).
