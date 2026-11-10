---
title: "SDLContext.RawApi — Method: GetTrayEntryEnabled"
description: "Exact Method: GetTrayEntryEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3c419dc5d6d2237c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTrayEntryEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTrayEntryEnabled`

<a id="api-063288aeebb4686e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTrayEntryEnabled(Inno.Native.Sdl3.SDLTrayEntry*) 3faa2df764db38e27b4de7664b97875e9839071bfe5c39ddac408db611c02d06 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetTrayEntryEnabled(Inno.Native.Sdl3.SDLTrayEntry* entry)
```

Gets whether or not an entry is enabled.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTrayEntries

**See also:** SDL_InsertTrayEntryAt

**See also:** SDL_SetTrayEntryEnabled

**Parameter `entry`:** the entry to be read.

**Returns:** true if the entry is enabled; false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38201).
