---
title: "SDLContext.RawApi — Method: HasPrimarySelectionText"
description: "Exact Method: HasPrimarySelectionText contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1a00a651a1023480
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasPrimarySelectionText

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasPrimarySelectionText`

<a id="api-d4c270396435948c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasPrimarySelectionText fd4113c00d8a68ace07c6249ddcc1a1c552c7f600d6f68d228621460818753d3 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasPrimarySelectionText()
```

Query whether the primary selection exists and contains a non-empty text
string.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetPrimarySelectionText

**See also:** SDL_SetPrimarySelectionText

**Returns:** true if the primary selection has text, or false if it does not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25345).
