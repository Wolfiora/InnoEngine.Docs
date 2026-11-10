---
title: "SDL — Method: HasClipboardText"
description: "Exact Method: HasClipboardText contracts in SDL."
uid: api.inno.native.sdl3.b19779a4813cfe8c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasClipboardText

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasClipboardText`

<a id="api-c589ff03a767d8fe"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasClipboardText 09eb9b0469dd4b672e5cd70001cc68e4a646cb2d6168fd31904410962af99f56 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasClipboardText()
```

Query whether the clipboard exists and contains a non-empty text string.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetClipboardText

**See also:** SDL_SetClipboardText

**Returns:** true if the clipboard has text, or false if it does not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3565).
