---
title: "SDLContext — Method: CreateProperties"
description: "Exact Method: CreateProperties contracts in SDLContext."
uid: api.inno.native.sdl3.962c1000c8871182
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: CreateProperties

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateProperties`

<a id="api-72a12cad0643882c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.CreateProperties a7e0a9665781dcf51a58b3a31dfd74aa0ce2d87642a87eccdadb9de83cf94935 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.CreateProperties()
```

Create a group of properties.
All properties are automatically destroyed when SDL_Quit() is called.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroyProperties

**Returns:** an ID for a new group of properties, or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15185).
