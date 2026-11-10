---
title: "SDLContext.RawApi — Method: ScreenSaverEnabled"
description: "Exact Method: ScreenSaverEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fe0cc4dbfa0bbb0f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ScreenSaverEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ScreenSaverEnabled`

<a id="api-c791048646e4d94d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ScreenSaverEnabled ac8ec0d4dd42cdb1afdf1c3648a91ab74653a75748cdfd4ae8fd72b1fc723491 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.ScreenSaverEnabled()
```

Check whether the screensaver is currently enabled.
The screensaver is disabled by default.
The default can also be changed using `SDL_HINT_VIDEO_ALLOW_SCREENSAVER`.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DisableScreenSaver

**See also:** SDL_EnableScreenSaver

**Returns:** true if the screensaver is enabled, false if it is disabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42160).
