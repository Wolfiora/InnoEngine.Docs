---
title: "SDLContext.RawApi — Method: GetWindowFromId"
description: "Exact Method: GetWindowFromId contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b2213cbedf9c03a8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowFromId

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowFromId`

<a id="api-ab9ace9703085ba5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowFromId(System.UInt32) e0cbd5980329b190af8ed81b41a9d4edf7d35d9dab20aca1d85a8be25fb48479 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.GetWindowFromId(uint id)
```

Get a window from a stored ID.
The numeric ID is what SDL_WindowEvent references, and is necessary to map
these events to specific SDL_Window objects.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowID

**Parameter `id`:** the ID of the window.

**Returns:** the window associated with `id` or NULL if it doesn't exist; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17669).
