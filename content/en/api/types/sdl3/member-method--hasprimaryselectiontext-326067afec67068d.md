---
title: "SDL — Method: HasPrimarySelectionText"
description: "Exact Method: HasPrimarySelectionText contracts in SDL."
uid: api.inno.native.sdl3.326067afec67068d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasPrimarySelectionText

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasPrimarySelectionText`

<a id="api-58d16bfc2733cecf"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasPrimarySelectionText 938accc9a83f67887814033ca017ffc157213db6abf723ef39c5c321e8e5d2b2 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasPrimarySelectionText()
```

Query whether the primary selection exists and contains a non-empty text
string.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPrimarySelectionText

**See also:** SDL_SetPrimarySelectionText

**Returns:** true if the primary selection has text, or false if it does not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1111).
