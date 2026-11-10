---
title: "SDLContext.RawApi — Method: GetWindowMouseGrab"
description: "Exact Method: GetWindowMouseGrab contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.30cbc1c2c4df9c05
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowMouseGrab

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowMouseGrab`

<a id="api-c1cb82d3068ea343"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowMouseGrab(Inno.Native.Sdl3.SDLWindow*) 9bfefff71c0a404af777cad6962f897f8e0b9ea07bf3ded66ef4b4bec46d6818 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowMouseGrab(Inno.Native.Sdl3.SDLWindow* window)
```

Get a window's mouse grab mode.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowMouseRect

**See also:** SDL_SetWindowMouseRect

**See also:** SDL_SetWindowMouseGrab

**See also:** SDL_SetWindowKeyboardGrab

**Parameter `window`:** the window to query.

**Returns:** true if mouse is grabbed, and false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L34006).
