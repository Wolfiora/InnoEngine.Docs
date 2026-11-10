---
title: "SDLContext — Method: GetJoystickGuidForId"
description: "Exact Method: GetJoystickGuidForId contracts in SDLContext."
uid: api.inno.native.sdl3.cd6207a3806494d9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetJoystickGuidForId

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetJoystickGuidForId`

<a id="api-d2bf983bc4843ddc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetJoystickGuidForId(System.UInt32) b00f78e519985d65dcdcb359bcb6dc25c21364162f1a2fe0568ab50c6d3b06a6 -->

```csharp
public Inno.Native.Sdl3.SDLGUID Inno.Native.Sdl3.SDLContext.GetJoystickGuidForId(uint instance_id)
```

Get the implementation-dependent GUID of a joystick.
This can be called before any joysticks are opened.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickGUID

**See also:** SDL_GUIDToString

**Parameter `instance_id`:** the joystick instance ID.

**Returns:** the GUID of the selected joystick. If called with an invalid
instance_id, this function returns a zero GUID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13410).
