---
title: "SDLContext — Method: HasMouse"
description: "Exact Method: HasMouse contracts in SDLContext."
uid: api.inno.native.sdl3.7299251d4e94e1c9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasMouse

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasMouse`

<a id="api-5c1b8e95fb591629"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasMouse ecc4490d2642265183126d13955823e5606c0c4feb17072625a2b8ea2b3dfcdd -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasMouse()
```

Return whether a mouse is currently connected.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetMice

**Returns:** true if a mouse is connected, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16023).
