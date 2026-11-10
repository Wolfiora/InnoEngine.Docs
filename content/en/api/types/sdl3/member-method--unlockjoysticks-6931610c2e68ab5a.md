---
title: "SDLContext.RawApi — Method: UnlockJoysticks"
description: "Exact Method: UnlockJoysticks contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6931610c2e68ab5a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnlockJoysticks

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockJoysticks`

<a id="api-062967c2c3c7f9a9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnlockJoysticks b4e8de33d04e85d24f5325017984e899de17d1a71fcf8c5ccd6dd2f614c235c0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnlockJoysticks()
```

Unlocking for atomic access to the joystick API.

**Thread safety:** This should be called from the same thread that called
SDL_LockJoysticks().

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L40219).
