---
title: "SDLContext — Method: HasPrimarySelectionText"
description: "Exact Method: HasPrimarySelectionText contracts in SDLContext."
uid: api.inno.native.sdl3.dacea1722b79262e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasPrimarySelectionText

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasPrimarySelectionText`

<a id="api-6b293cc283053046"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasPrimarySelectionText b8e28abf0ec4171398c4c11ce2b1e1ecf28e932a6e74f41dfc213ad65d6c491d -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasPrimarySelectionText()
```

Query whether the primary selection exists and contains a non-empty text
string.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPrimarySelectionText

**See also:** SDL_SetPrimarySelectionText

**Returns:** true if the primary selection has text, or false if it does not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12704).
