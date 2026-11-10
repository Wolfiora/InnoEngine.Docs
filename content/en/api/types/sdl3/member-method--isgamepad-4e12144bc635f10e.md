---
title: "SDLContext — Method: IsGamepad"
description: "Exact Method: IsGamepad contracts in SDLContext."
uid: api.inno.native.sdl3.4e12144bc635f10e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: IsGamepad

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsGamepad`

<a id="api-aa66125ec2acd046"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.IsGamepad(System.UInt32) 8783193d6fb251ab2c72c3a77aa4035ac99dc4f0e0982668ce7b092f9ef3771a -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.IsGamepad(uint instance_id)
```

Check if the given joystick is supported by the gamepad interface.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoysticks

**See also:** SDL_OpenGamepad

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** true if the given joystick is supported by the gamepad interface,
false if it isn't or it's an invalid index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14631).
