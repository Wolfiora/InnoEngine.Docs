---
title: "SDLContext — Method: HidExit"
description: "Exact Method: HidExit contracts in SDLContext."
uid: api.inno.native.sdl3.1605b78d6bbcf47f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HidExit

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidExit`

<a id="api-f6b85d7d4cd12508"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HidExit e0f300c0438b8d12474162c580efd174e39da9ff5490c9d857046a9c1db66556 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.HidExit()
```

Finalize the HIDAPI library.
This function frees all of the static data associated with HIDAPI. It
should be called at the end of execution to avoid memory leaks.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_hid_init

**Returns:** 0 on success or a negative error code on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16199).
