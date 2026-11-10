---
title: "SDLContext.RawApi — Method: GetJoystickTypeForId"
description: "Exact Method: GetJoystickTypeForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a7d5958b2d2624d0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickTypeForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickTypeForId`

<a id="api-1da5e42fc050d699"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickTypeForId(System.UInt32) ae5869584a1b9464a89886c04c2e47303e29f6fd525abef6fb3532865f5c081e -->

```csharp
public Inno.Native.Sdl3.SDLJoystickType Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickTypeForId(uint instance_id)
```

Get the type of a joystick, if available.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickType

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the SDL_JoystickType of the selected joystick. If called with an
invalid instance_id, this function returns
`SDL_JOYSTICK_TYPE_UNKNOWN`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44952).
