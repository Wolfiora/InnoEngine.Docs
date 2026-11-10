---
title: "SDLContext.RawApi — Method: GetWindowTitle"
description: "Exact Method: GetWindowTitle contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.cea31c5944507e7d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowTitle

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowTitle`

<a id="api-90ec1aa3b61e1634"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowTitle(Inno.Native.Sdl3.SDLWindow*) 3b2cb3a394f5b34058947b5766836cd4d47e930a487b93ce030d0ec1e123c1fa -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetWindowTitle(Inno.Native.Sdl3.SDLWindow* window)
```

Get the title of a window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowTitle

**Parameter `window`:** the window to query.

**Returns:** the title of the window in UTF-8 format or "" if there is no
title.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L19220).
