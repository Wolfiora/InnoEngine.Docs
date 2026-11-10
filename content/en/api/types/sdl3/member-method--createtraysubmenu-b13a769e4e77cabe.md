---
title: "SDLContext.RawApi — Method: CreateTraySubmenu"
description: "Exact Method: CreateTraySubmenu contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b13a769e4e77cabe
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateTraySubmenu

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateTraySubmenu`

<a id="api-8114bd7ace98e9ab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateTraySubmenu(Inno.Native.Sdl3.SDLTrayEntry*) c97a7d6141d61e92ff04b310d6335716b0cfd81c50b3dc6e2562cc7e1e849fde -->

```csharp
public Inno.Native.Sdl3.SDLTrayMenu* Inno.Native.Sdl3.SDLContext.RawApi.CreateTraySubmenu(Inno.Native.Sdl3.SDLTrayEntry* entry)
```

Create a submenu for a system tray entry.
This should be called at most once per tray entry.
This function does the same thing as SDL_CreateTrayMenu, except that it
takes a SDL_TrayEntry instead of a SDL_Tray.
A menu does not need to be destroyed; it will be destroyed with the tray.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_InsertTrayEntryAt

**See also:** SDL_GetTraySubmenu

**See also:** SDL_GetTrayMenuParentEntry

**Parameter `entry`:** the tray entry to bind the menu to.

**Returns:** the newly created menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37201).
