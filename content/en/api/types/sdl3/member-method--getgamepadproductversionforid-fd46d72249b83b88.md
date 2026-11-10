---
title: "SDLContext.RawApi — Method: GetGamepadProductVersionForId"
description: "Exact Method: GetGamepadProductVersionForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fd46d72249b83b88
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadProductVersionForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadProductVersionForId`

<a id="api-2f7e7b9b07736ad5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadProductVersionForId(System.UInt32) 3ed48433e442caa63f15598eac00252e10245571497cfb42daf28d4bcd8dac2e -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadProductVersionForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42647).
