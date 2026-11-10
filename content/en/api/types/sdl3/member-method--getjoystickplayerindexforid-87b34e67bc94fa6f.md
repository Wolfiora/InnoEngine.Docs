---
title: "SDLContext — Method: GetJoystickPlayerIndexForId"
description: "Exact Method: GetJoystickPlayerIndexForId contracts in SDLContext."
uid: api.inno.native.sdl3.87b34e67bc94fa6f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetJoystickPlayerIndexForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickPlayerIndexForId`

<a id="api-4b49bdb6808f55f5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetJoystickPlayerIndexForId(System.UInt32) 56ab045cc1d5e4fa6306891d2a16ad63d4f3e696718df9fd9623234fb74e0f10 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetJoystickPlayerIndexForId(uint instance_id)
```

Get the player index of a joystick.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickPlayerIndex

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the player index of a joystick, or -1 if it's not available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12688).
