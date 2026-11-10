---
title: "SDLContext.RawApi — Method: SetGamepadMapping"
description: "Exact Method: SetGamepadMapping contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.561a9652ccaaad13
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetGamepadMapping

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetGamepadMapping`

<a id="api-3c5aabf3481c4ce7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetGamepadMapping(System.UInt32,System.SByte*) af88af9c604fd21a663b1ccce00a76009a3fcfe4992c7a55c25ad77b7220999f -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetGamepadMapping(uint instance_id, sbyte* mapping)
```

Set the current mapping of a joystick or gamepad.
Details about mappings are discussed with SDL_AddGamepadMapping().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddGamepadMapping

**See also:** SDL_GetGamepadMapping

**Parameter `instance_id`:** the joystick instance ID.

**Parameter `mapping`:** the mapping to use for this device, or NULL to clear the
mapping.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40153).
