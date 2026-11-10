---
title: "SDLContext.RawApi — Method: GetGamepadMappingForGuid"
description: "Exact Method: GetGamepadMappingForGuid contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bac0aff3f7529482
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGamepadMappingForGuid

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGamepadMappingForGuid`

<a id="api-e8b5c71868bdfe2a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadMappingForGuid(Inno.Native.Sdl3.SDLGUID*) 674ec9b9c1fcc1c32b0e28d0f63465856b30a5ee4954b7d708d0c03e206d7d7d -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetGamepadMappingForGuid(Inno.Native.Sdl3.SDLGUID* guid)
```

Get the gamepad mapping string for a given GUID.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetJoystickGUIDForID

**See also:** SDL_GetJoystickGUID

**Parameter `guid`:** a structure containing the GUID for which a mapping is desired.

**Returns:** a mapping string or NULL on failure; call SDL_GetError() for more
information. This should be freed with SDL_free() when it is no
longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27822).
