---
title: "SDLContext — Method: ClearClipboardData"
description: "Exact Method: ClearClipboardData contracts in SDLContext."
uid: api.inno.native.sdl3.d7bad35a15ee4595
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: ClearClipboardData

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClearClipboardData`

<a id="api-03a5dd0c27828ce3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.ClearClipboardData f36bf3fba8429b59248f550de1d4fc7ec90d087e277d88aa69b4f6faaf9a3272 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.ClearClipboardData()
```

Clear the clipboard data.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetClipboardData

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15018).
