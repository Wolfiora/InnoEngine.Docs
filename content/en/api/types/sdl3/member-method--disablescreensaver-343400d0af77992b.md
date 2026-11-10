---
title: "SDLContext.RawApi — Method: DisableScreenSaver"
description: "Exact Method: DisableScreenSaver contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.343400d0af77992b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DisableScreenSaver

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DisableScreenSaver`

<a id="api-a1c719c58dc54c8a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DisableScreenSaver 25bc24ca33de2ac85bcd5e052a9b7c5beb0c06980c6ab049d1fda352a8d188e6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.DisableScreenSaver()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20040).
