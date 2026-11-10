---
title: "SDLContext.RawApi — Method: RemoveTrayEntry"
description: "Exact Method: RemoveTrayEntry contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.85894f066761ddff
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: RemoveTrayEntry

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `RemoveTrayEntry`

<a id="api-fcb8e2b0f972dbc3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.RemoveTrayEntry(Inno.Native.Sdl3.SDLTrayEntry*) 64657263a036c423190203bb1277a54b09455317ba444a1b331e97175c10d49c -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.RemoveTrayEntry(Inno.Native.Sdl3.SDLTrayEntry* entry)
```

Removes a tray entry.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTrayEntries

**See also:** SDL_InsertTrayEntryAt

**Parameter `entry`:** The entry to be deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49242).
