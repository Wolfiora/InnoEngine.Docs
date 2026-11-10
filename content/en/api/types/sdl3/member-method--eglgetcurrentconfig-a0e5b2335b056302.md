---
title: "SDLContext.RawApi — Method: EglGetCurrentConfig"
description: "Exact Method: EglGetCurrentConfig contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a0e5b2335b056302
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EglGetCurrentConfig

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EglGetCurrentConfig`

<a id="api-5781d7931d0ba12c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EglGetCurrentConfig 5bb0cf44a34e014cfe61761a9dda9d35b378567424f81d97947a5d8cec85a961 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.EglGetCurrentConfig()
```

Get the currently active EGL config.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the currently active EGL config or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29393).
