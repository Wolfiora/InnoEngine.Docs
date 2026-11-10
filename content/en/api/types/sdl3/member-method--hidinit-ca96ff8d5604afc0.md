---
title: "SDLContext.RawApi — Method: HidInit"
description: "Exact Method: HidInit contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ca96ff8d5604afc0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HidInit

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidInit`

<a id="api-5e58113cfc5dfe8d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HidInit 2b7cb4b1eb055efe8a6479b572489130e000e3d2954585f965a2e65a3149a62e -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.HidInit()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52262).
