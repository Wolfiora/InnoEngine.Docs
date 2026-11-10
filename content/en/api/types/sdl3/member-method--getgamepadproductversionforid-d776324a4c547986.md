---
title: "SDLContext — Method: GetGamepadProductVersionForId"
description: "Exact Method: GetGamepadProductVersionForId contracts in SDLContext."
uid: api.inno.native.sdl3.d776324a4c547986
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetGamepadProductVersionForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadProductVersionForId`

<a id="api-3c411136dd61dfd9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetGamepadProductVersionForId(System.UInt32) 0b3d1a0f182d2805c43e11ebb2bc541d473b0df6ccc9b6122b54d22d54ffef42 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.GetGamepadProductVersionForId(uint instance_id)
```

Get the product version of a gamepad, if available.
This can be called before any gamepads are opened. If the product version
isn't available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadProductVersion

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the product version of the selected gamepad. If called on an
invalid index, this function returns zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15237).
