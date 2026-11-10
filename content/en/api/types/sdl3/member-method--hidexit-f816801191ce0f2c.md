---
title: "SDL — Method: HidExit"
description: "Exact Method: HidExit contracts in SDL."
uid: api.inno.native.sdl3.f816801191ce0f2c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HidExit

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidExit`

<a id="api-9d27cb4b2b976dc8"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HidExit 1964f5f3c8c0e205e153faa5e10d11245bdc966238ec72102ab51cbcfab4e4db -->

```csharp
public static int Inno.Native.Sdl3.SDL.HidExit()
```

Finalize the HIDAPI library.
This function frees all of the static data associated with HIDAPI. It
should be called at the end of execution to avoid memory leaks.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_hid_init

**Returns:** 0 on success or a negative error code on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3986).
