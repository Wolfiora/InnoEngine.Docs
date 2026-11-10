---
title: "SDLContext.RawApi — Method: EglGetCurrentDisplay"
description: "Exact Method: EglGetCurrentDisplay contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.73ec3105db6196c6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: EglGetCurrentDisplay

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `EglGetCurrentDisplay`

<a id="api-288ed4e12a5f20b2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.EglGetCurrentDisplay 8a7e432df285aabce26dc1fd46f6c1ee828f94eb492db0d954e000b90c744029 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.EglGetCurrentDisplay()
```

Get the currently active EGL display.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the currently active EGL display or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32441).
