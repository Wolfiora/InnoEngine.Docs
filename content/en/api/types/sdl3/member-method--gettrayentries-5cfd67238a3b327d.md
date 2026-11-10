---
title: "SDLContext.RawApi — Method: GetTrayEntries"
description: "Exact Method: GetTrayEntries contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5cfd67238a3b327d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTrayEntries

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTrayEntries`

<a id="api-28e719f3ed4e9018"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTrayEntries(Inno.Native.Sdl3.SDLTrayMenu*,System.Int32*) f7938eaee6cbd782b2fa5cbc0e11f26299e5dd51a449ae5e31a8b5029bd817db -->

```csharp
public Inno.Native.Sdl3.SDLTrayEntry** Inno.Native.Sdl3.SDLContext.RawApi.GetTrayEntries(Inno.Native.Sdl3.SDLTrayMenu* menu, int* count)
```

Returns a list of entries in the menu, in order.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_RemoveTrayEntry

**See also:** SDL_InsertTrayEntryAt

**Parameter `menu`:** The menu to get entries from.

**Parameter `count`:** An optional pointer to obtain the number of entries in the
menu.

**Returns:** a NULL-terminated list of entries within the given menu. The
pointer becomes invalid when any function that inserts or deletes
entries in the menu is called.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20486).
