---
title: "SDLContext.RawApi — Method: GetTraySubmenu"
description: "Exact Method: GetTraySubmenu contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fa4b8f8946fe73c3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTraySubmenu

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTraySubmenu`

<a id="api-dc0388f3121734bc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTraySubmenu(Inno.Native.Sdl3.SDLTrayEntry*) ecdd01a536b54b7b513cd0a2c904e6a2bd44ebb669b2eddf9edc5480fb7fd356 -->

```csharp
public Inno.Native.Sdl3.SDLTrayMenu* Inno.Native.Sdl3.SDLContext.RawApi.GetTraySubmenu(Inno.Native.Sdl3.SDLTrayEntry* entry)
```

Gets a previously created tray entry submenu.
You should have called SDL_CreateTraySubmenu() on the entry object. This
function allows you to fetch it again later.
This function does the same thing as SDL_GetTrayMenu(), except that it
takes a SDL_TrayEntry instead of a SDL_Tray.
A menu does not need to be destroyed; it will be destroyed with the tray.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_InsertTrayEntryAt

**See also:** SDL_CreateTraySubmenu

**Parameter `entry`:** the tray entry to bind the menu to.

**Returns:** the newly created menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45236).
