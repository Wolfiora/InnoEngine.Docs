---
title: "SDLContext — Method: GetJoystickProductForId"
description: "Exact Method: GetJoystickProductForId contracts in SDLContext."
uid: api.inno.native.sdl3.90a5f67a90d93033
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetJoystickProductForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickProductForId`

<a id="api-773067a5c03d1dcc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetJoystickProductForId(System.UInt32) 0d131e94e711785cd28e0ba118aa48c0cc0956910f377fcb9ba73c03650376e2 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.GetJoystickProductForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12229).
