---
title: "SDLContext — Method: HasClipboardText"
description: "Exact Method: HasClipboardText contracts in SDLContext."
uid: api.inno.native.sdl3.641c7c12b59e3f88
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasClipboardText

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasClipboardText`

<a id="api-06b41e46f51e6fa7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasClipboardText 5b9cc7b0d2245384e8959029b695cd79322e1287e43e12723d5bfa84524c5dcc -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasClipboardText()
```

Query whether the clipboard exists and contains a non-empty text string.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetClipboardText

**See also:** SDL_SetClipboardText

**Returns:** true if the clipboard has text, or false if it does not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15685).
