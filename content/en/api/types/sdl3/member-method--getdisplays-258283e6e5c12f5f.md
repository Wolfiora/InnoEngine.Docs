---
title: "SDLContext.RawApi — Method: GetDisplays"
description: "Exact Method: GetDisplays contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.258283e6e5c12f5f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDisplays

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDisplays`

<a id="api-5f86920cf16cc286"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDisplays(System.Int32*) 468d1a07a4ad37f61ea4dbd5dac8833cfcadae25b765889f835bdad08440ac80 -->

```csharp
public uint* Inno.Native.Sdl3.SDLContext.RawApi.GetDisplays(int* count)
```

Get a list of currently connected displays.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `count`:** a pointer filled in with the number of displays returned, may
be NULL.

**Returns:** a 0 terminated array of display instance IDs or NULL on failure;
call SDL_GetError() for more information. This should be freed
with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28848).
