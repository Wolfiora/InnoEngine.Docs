---
title: "SDLContext.RawApi — Method: GetJoystickProductForId"
description: "Exact Method: GetJoystickProductForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0c89f881ec2d12b5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickProductForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickProductForId`

<a id="api-33c18cd2b6647682"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickProductForId(System.UInt32) 5320fe36f587a6db159bdc63543a22a56aa4b37e9788cd2c8b7b5599e6bc1245 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickProductForId(uint instance_id)
```

Get the USB product ID of a joystick, if available.
This can be called before any joysticks are opened. If the product ID isn't
available this function returns 0.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickProduct

**See also:** SDL_GetJoysticks

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the USB product ID of the selected joystick. If called with an
invalid instance_id, this function returns 0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21554).
