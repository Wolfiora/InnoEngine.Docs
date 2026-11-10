---
title: "SDLContext.RawApi — Method: CreateTrayMenu"
description: "Exact Method: CreateTrayMenu contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3193b2d92d87fc19
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateTrayMenu

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateTrayMenu`

<a id="api-d047c36838d2713c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateTrayMenu(Inno.Native.Sdl3.SDLTray*) 0eca57aaffc3c1a355a27f1463341b63f4121c453549e3478bc1b58f046bab46 -->

```csharp
public Inno.Native.Sdl3.SDLTrayMenu* Inno.Native.Sdl3.SDLContext.RawApi.CreateTrayMenu(Inno.Native.Sdl3.SDLTray* tray)
```

Create a menu for a system tray.
This should be called at most once per tray icon.
This function does the same thing as SDL_CreateTraySubmenu(), except that
it takes a SDL_Tray instead of a SDL_TrayEntry.
A menu does not need to be destroyed; it will be destroyed with the tray.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTray

**See also:** SDL_GetTrayMenu

**See also:** SDL_GetTrayMenuParentTray

**Parameter `tray`:** the tray to bind the menu to.

**Returns:** the newly created menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36469).
