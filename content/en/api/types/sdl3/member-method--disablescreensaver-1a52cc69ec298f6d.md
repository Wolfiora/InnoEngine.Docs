---
title: "SDLContext — Method: DisableScreenSaver"
description: "Exact Method: DisableScreenSaver contracts in SDLContext."
uid: api.inno.native.sdl3.1a52cc69ec298f6d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: DisableScreenSaver

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DisableScreenSaver`

<a id="api-e4e908b5bd9cc51a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.DisableScreenSaver 844371bcdf673f069a6c6546daef98780c77565b09471877a93e9d4b3ed0547c -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.DisableScreenSaver()
```

Prevent the screen from being blanked by a screen saver.
If you disable the screensaver, it is automatically re-enabled when SDL
quits.
The screensaver is disabled by default, but this may by changed by
SDL_HINT_VIDEO_ALLOW_SCREENSAVER.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_EnableScreenSaver

**See also:** SDL_ScreenSaverEnabled

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12054).
