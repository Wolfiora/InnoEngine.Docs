---
title: "SDLContext.RawApi — Method: HidExit"
description: "Exact Method: HidExit contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.05a8c4252faf5aed
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidExit

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidExit`

<a id="api-0a53e4e954082b78"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidExit e36a2399a4252ad0e2a84fdb65888e4105f1fa12a5efa0652165ed71ec176ff6 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidExit()
```

Finalize the HIDAPI library.
This function frees all of the static data associated with HIDAPI. It
should be called at the end of execution to avoid memory leaks.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_hid_init

**Returns:** 0 on success or a negative error code on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50526).
