---
title: "SDL — Method: HidInit"
description: "Exact Method: HidInit contracts in SDL."
uid: api.inno.native.sdl3.8cf68aaccb9d6cc5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HidInit

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidInit`

<a id="api-7eacf14df81cdcf6"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HidInit fd76ddc4d8d49832af96b77a63a2be1a9b61f24e001e5f3ba2ceced52262a30f -->

```csharp
public static int Inno.Native.Sdl3.SDL.HidInit()
```

Initialize the HIDAPI library.
This function initializes the HIDAPI library. Calling it is not strictly
necessary, as it will be called automatically by SDL_hid_enumerate(),
SDL_hid_open(), and SDL_hid_open_path() if needed. This function should be
called at the beginning of execution however, if there is a chance of
HIDAPI handles being opened by different threads simultaneously.
Each call to this function should have a matching call to SDL_hid_exit()

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_hid_exit

**Returns:** 0 on success or a negative error code on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4214).
