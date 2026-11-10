---
title: "SDLContext.RawApi — Method: GetSensors"
description: "Exact Method: GetSensors contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e06c9fe73dec12be
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSensors

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSensors`

<a id="api-0ffbaaa49b35f0dc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSensors(System.Int32*) 416c5a5d9072065f242c5cc65e9e30fe6d2a1540e7dddb2853062eb3bc46d9a9 -->

```csharp
public uint* Inno.Native.Sdl3.SDLContext.RawApi.GetSensors(int* count)
```

Get a list of currently connected sensors.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `count`:** a pointer filled in with the number of sensors returned, may
be NULL.

**Returns:** a 0 terminated array of sensor instance IDs or NULL on failure;
call SDL_GetError() for more information. This should be freed
with SDL_free() when it is no longer needed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23125).
