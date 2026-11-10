---
title: "SDLContext.RawApi — Method: GetTrayEntryLabel"
description: "Exact Method: GetTrayEntryLabel contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.31731760a4f67420
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTrayEntryLabel

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTrayEntryLabel`

<a id="api-accdae845cf772c0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTrayEntryLabel(Inno.Native.Sdl3.SDLTrayEntry*) 61b70e6195d7a92faa6d5e48f4237290925019d15a7914230063e773983a161f -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetTrayEntryLabel(Inno.Native.Sdl3.SDLTrayEntry* entry)
```

Gets the label of an entry.
If the returned value is NULL, the entry is a separator.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTrayEntries

**See also:** SDL_InsertTrayEntryAt

**See also:** SDL_SetTrayEntryLabel

**Parameter `entry`:** the entry to be read.

**Returns:** the label of the entry in UTF-8 encoding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43081).
