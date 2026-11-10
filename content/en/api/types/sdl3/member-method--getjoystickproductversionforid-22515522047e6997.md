---
title: "SDLContext — Method: GetJoystickProductVersionForId"
description: "Exact Method: GetJoystickProductVersionForId contracts in SDLContext."
uid: api.inno.native.sdl3.22515522047e6997
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetJoystickProductVersionForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickProductVersionForId`

<a id="api-e18498288909ef9a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetJoystickProductVersionForId(System.UInt32) bc655d25a2cd5379738c5cd64e5262ecceb13e6a3b78f2e19bf65e88810404af -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.GetJoystickProductVersionForId(uint instance_id)
```

Get the product version of a joystick, if available.
This can be called before any joysticks are opened. If the product version
isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickProductVersion

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the product version of the selected joystick. If called with an
invalid instance_id, this function returns 0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12446).
