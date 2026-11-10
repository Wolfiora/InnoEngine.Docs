---
title: "SDLContext — Method: RemoveTimer"
description: "Exact Method: RemoveTimer contracts in SDLContext."
uid: api.inno.native.sdl3.9df0028dabb3d0d3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: RemoveTimer

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RemoveTimer`

<a id="api-fc9068e4c94ccab1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RemoveTimer(System.UInt32) e146ca4b6a3e593bcef79cb3e5274632b0071acdf4f124e64ebdf1d9ef59ea30 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.RemoveTimer(uint id)
```

Remove a timer created with SDL_AddTimer().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_AddTimer

**Parameter `id`:** the ID of the timer to remove.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14116).
