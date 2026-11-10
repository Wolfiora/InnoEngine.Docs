---
title: "SDLContext.RawApi — Method: GetJoystickProductVersionForId"
description: "Exact Method: GetJoystickProductVersionForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bae8a6ddef59f941
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetJoystickProductVersionForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickProductVersionForId`

<a id="api-12888dc5ae762b64"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickProductVersionForId(System.UInt32) bae60cfaccc9f179f83c651439332ecfb115090083c97dc8ce12ca18f6abb9a9 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.RawApi.GetJoystickProductVersionForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23293).
