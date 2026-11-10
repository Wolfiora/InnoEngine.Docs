---
title: "SDLContext.RawApi — Method: GetTrayEntryChecked"
description: "Exact Method: GetTrayEntryChecked contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2168a385c13dc256
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTrayEntryChecked

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTrayEntryChecked`

<a id="api-0d8fcfa3a4075765"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTrayEntryChecked(Inno.Native.Sdl3.SDLTrayEntry*) e5a61891e7ae019eb4cae481627108a868e672c3cdef725991edf02c007fabba -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetTrayEntryChecked(Inno.Native.Sdl3.SDLTrayEntry* entry)
```

Gets whether or not an entry is checked.
The entry must have been created with the SDL_TRAYENTRY_CHECKBOX flag.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTrayEntries

**See also:** SDL_InsertTrayEntryAt

**See also:** SDL_SetTrayEntryChecked

**Parameter `entry`:** the entry to be read.

**Returns:** true if the entry is checked; false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L38790).
