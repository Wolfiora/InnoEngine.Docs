---
title: "SDLContext.RawApi — Method: GetGamepadMappingForId"
description: "Exact Method: GetGamepadMappingForId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2b6e150280fe315e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadMappingForId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadMappingForId`

<a id="api-b1ba7f1ea49aea3a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadMappingForId(System.UInt32) 447f27a61d78e86e42a67f1e06c9617f9ac85b455df85c736d266cd76023fd36 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadMappingForId(uint instance_id)
```

Get the mapping of a gamepad.
This can be called before any gamepads are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetGamepads

**See also:** SDL_GetGamepadMapping

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the mapping string. Returns NULL if no mapping is available. This
should be freed with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51554).
