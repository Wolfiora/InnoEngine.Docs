---
title: "SDLContext — Method: GetRealGamepadTypeForId"
description: "Exact Method: GetRealGamepadTypeForId contracts in SDLContext."
uid: api.inno.native.sdl3.70a87830e603bd05
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetRealGamepadTypeForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetRealGamepadTypeForId`

<a id="api-e7650a198675054c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetRealGamepadTypeForId(System.UInt32) 2eeacfd99a936c36da6a85839eb1a2642cf425e8b20a045814a099ea6fef21a9 -->

```csharp
public Inno.Native.Sdl3.SDLGamepadType Inno.Native.Sdl3.SDLContext.GetRealGamepadTypeForId(uint instance_id)
```

Get the type of a gamepad, ignoring any mapping override.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepadTypeForID

**See also:** SDL_GetGamepads

**See also:** SDL_GetRealGamepadType

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the gamepad type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13901).
