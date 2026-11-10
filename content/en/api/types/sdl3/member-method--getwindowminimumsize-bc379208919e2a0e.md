---
title: "SDLContext.RawApi — Method: GetWindowMinimumSize"
description: "Exact Method: GetWindowMinimumSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bc379208919e2a0e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowMinimumSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowMinimumSize`

<a id="api-7a9093fea793f752"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowMinimumSize(Inno.Native.Sdl3.SDLWindow*,System.Int32*,System.Int32*) 252f1212050b6d5b2cdb0e673d505733ff0fa40d975334795095b3e6db4ce23c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowMinimumSize(Inno.Native.Sdl3.SDLWindow* window, int* w, int* h)
```

Get the minimum size of a window's client area.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowMaximumSize

**See also:** SDL_SetWindowMinimumSize

**Parameter `window`:** the window to query.

**Parameter `w`:** a pointer filled in with the minimum width of the window, may be
NULL.

**Parameter `h`:** a pointer filled in with the minimum height of the window, may be
NULL.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24627).
