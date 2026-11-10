---
title: "SDLContext.RawApi — Method: GetDisplayForWindow"
description: "Exact Method: GetDisplayForWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8ce30ca6d3436ccc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetDisplayForWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetDisplayForWindow`

<a id="api-57e23a0750787bed"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayForWindow(Inno.Native.Sdl3.SDLWindow*) 67c7a6da755afda24ba6789ac0c580db005012ddf81b9878d415aa990428c7df -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetDisplayForWindow(Inno.Native.Sdl3.SDLWindow* window)
```

Get the display associated with a window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetDisplayBounds

**See also:** SDL_GetDisplays

**Parameter `window`:** the window to query.

**Returns:** the instance ID of the display containing the center of the window
on success or 0 on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26735).
