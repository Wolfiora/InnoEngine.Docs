---
title: "SDLContext.RawApi — Method: GetTrayMenuParentEntry"
description: "Exact Method: GetTrayMenuParentEntry contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.567cee7cfbb1646a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTrayMenuParentEntry

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTrayMenuParentEntry`

<a id="api-61644c8ec6a475f7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTrayMenuParentEntry(Inno.Native.Sdl3.SDLTrayMenu*) 66225c97d2a59ce50a4505c6eb3c83817ac681c1a73aae964981f50bb9ca756e -->

```csharp
public Inno.Native.Sdl3.SDLTrayEntry* Inno.Native.Sdl3.SDLContext.RawApi.GetTrayMenuParentEntry(Inno.Native.Sdl3.SDLTrayMenu* menu)
```

Gets the entry for which the menu is a submenu, if the current menu is a
submenu.
Either this function or SDL_GetTrayMenuParentTray() will return non-NULL
for any given menu.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTraySubmenu

**See also:** SDL_GetTrayMenuParentTray

**Parameter `menu`:** the menu for which to get the parent entry.

**Returns:** the parent entry, or NULL if this menu is not a submenu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17961).
