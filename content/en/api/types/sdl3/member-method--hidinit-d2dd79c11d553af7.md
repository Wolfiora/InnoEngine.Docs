---
title: "SDLContext — Method: HidInit"
description: "Exact Method: HidInit contracts in SDLContext."
uid: api.inno.native.sdl3.d2dd79c11d553af7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HidInit

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HidInit`

<a id="api-6ad3539b59a4a5be"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HidInit 4b35d51677fc65059da5a17e689f8a8787a961b44ef721a4387807d327518bab -->

```csharp
public int Inno.Native.Sdl3.SDLContext.HidInit()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16479).
