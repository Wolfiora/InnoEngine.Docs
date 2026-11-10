---
title: "SDLContext.RawApi — Method: InsertTrayEntryAt"
description: "Exact Method: InsertTrayEntryAt contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.335461317caad229
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: InsertTrayEntryAt

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InsertTrayEntryAt`

<a id="api-7a146fe1754bd3ae"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.InsertTrayEntryAt(Inno.Native.Sdl3.SDLTrayMenu*,System.Int32,System.SByte*,System.UInt32) a45c12b9a512fc585f10712d030bbf546059713bf4f0071107e9f2e13e3b50bb -->

```csharp
public Inno.Native.Sdl3.SDLTrayEntry* Inno.Native.Sdl3.SDLContext.RawApi.InsertTrayEntryAt(Inno.Native.Sdl3.SDLTrayMenu* menu, int pos, sbyte* label, uint flags)
```

Insert a tray entry at a given position.
If label is NULL, the entry will be a separator. Many functions won't work
for an entry that is a separator.
An entry does not need to be destroyed; it will be destroyed with the tray.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_TrayEntryFlags

**See also:** SDL_GetTrayEntries

**See also:** SDL_RemoveTrayEntry

**See also:** SDL_GetTrayEntryParent

**Parameter `menu`:** the menu to append the entry to.

**Parameter `pos`:** the desired position for the new entry. Entries at or following
this place will be moved. If pos is -1, the entry is appended.

**Parameter `label`:** the text to be displayed on the entry, in UTF-8 encoding, or
NULL for a separator.

**Parameter `flags`:** a combination of flags, some of which are mandatory.

**Returns:** the newly created entry, or NULL if pos is out of bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32222).
