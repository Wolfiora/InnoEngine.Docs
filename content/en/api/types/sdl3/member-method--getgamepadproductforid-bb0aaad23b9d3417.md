---
title: "SDLContext — Method: GetGamepadProductForId"
description: "Exact Method: GetGamepadProductForId contracts in SDLContext."
uid: api.inno.native.sdl3.bb0aaad23b9d3417
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetGamepadProductForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadProductForId`

<a id="api-02f993a45d50aa01"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetGamepadProductForId(System.UInt32) 543e7c81dd19eab03310be7c5384540631bb5a09b8ff9134b8edf21fd5ea23d6 -->

```csharp
public ushort Inno.Native.Sdl3.SDLContext.GetGamepadProductForId(uint instance_id)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11839).
