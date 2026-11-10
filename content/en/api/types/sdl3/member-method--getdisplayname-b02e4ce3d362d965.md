---
title: "SDLContext.RawApi — Method: GetDisplayName"
description: "Exact Method: GetDisplayName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b02e4ce3d362d965
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDisplayName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDisplayName`

<a id="api-fedb049ca3693e9a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayName(System.UInt32) ab4cfc801dd5afdaf7a59d191791518ace5960354fd8c60dd036f712ffb13158 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayName(uint displayID)
```

Get the name of a display in UTF-8 encoding.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplays

**Parameter `displayID`:** the instance ID of the display to query.

**Returns:** the name of a display or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17118).
