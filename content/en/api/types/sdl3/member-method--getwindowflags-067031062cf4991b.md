---
title: "SDLContext.RawApi — Method: GetWindowFlags"
description: "Exact Method: GetWindowFlags contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.067031062cf4991b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowFlags

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowFlags`

<a id="api-808a708663a63a0c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowFlags(Inno.Native.Sdl3.SDLWindow*) 018641bbd9abc31ab9794bb8ffcf7efa50015af81c5cd6622e0a0b71a344f49e -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.GetWindowFlags(Inno.Native.Sdl3.SDLWindow* window)
```

Get the window flags.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateWindow

**See also:** SDL_HideWindow

**See also:** SDL_MaximizeWindow

**See also:** SDL_MinimizeWindow

**See also:** SDL_SetWindowFullscreen

**See also:** SDL_SetWindowMouseGrab

**See also:** SDL_SetWindowFillDocument

**See also:** SDL_ShowWindow

**Parameter `window`:** the window to query.

**Returns:** a mask of the SDL_WindowFlags associated with `window`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33101).
