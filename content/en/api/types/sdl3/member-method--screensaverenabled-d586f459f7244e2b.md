---
title: "SDLContext — Method: ScreenSaverEnabled"
description: "Exact Method: ScreenSaverEnabled contracts in SDLContext."
uid: api.inno.native.sdl3.d586f459f7244e2b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: ScreenSaverEnabled

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ScreenSaverEnabled`

<a id="api-6045235164775f5a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.ScreenSaverEnabled 674154564a57b5fcd72fdc2ec3e41ba7883fcdb1a8c565bd308a2966b6c6c1ff -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.ScreenSaverEnabled()
```

Check whether the screensaver is currently enabled.
The screensaver is disabled by default.
The default can also be changed using `SDL_HINT_VIDEO_ALLOW_SCREENSAVER`.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DisableScreenSaver

**See also:** SDL_EnableScreenSaver

**Returns:** true if the screensaver is enabled, false if it is disabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15169).
