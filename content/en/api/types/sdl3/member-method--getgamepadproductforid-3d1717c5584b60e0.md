---
title: "SDLContext.RawApi — Method: GetGamepadProductForId"
description: "Exact Method: GetGamepadProductForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3d1717c5584b60e0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadProductForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadProductForId`

<a id="api-c601301e265d43c0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadProductForId(System.UInt32) 5b3c5de41e6c2a96a16d0cdea02d20d72804e60db8068f66f000e05fe4111bf0 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadProductForId(uint instance_id)
```

Get the USB product ID of a gamepad, if available.
This can be called before any gamepads are opened. If the product ID isn't
available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadProduct

**See also:** SDL_GetGamepads

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the USB product ID of the selected gamepad. If called on an
invalid index, this function returns zero.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19041).
