---
title: "SDLContext.RawApi — Method: GetTrayMenu"
description: "Exact Method: GetTrayMenu contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a6e90403ab8246b9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTrayMenu

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTrayMenu`

<a id="api-9715e36191840e26"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTrayMenu(Inno.Native.Sdl3.SDLTray*) a1c080f6ac302341df247eee41e77c4f2a672080d0296749886766d1d8389cb7 -->

```csharp
public Inno.Native.Sdl3.SDLTrayMenu* Inno.Native.Sdl3.SDLContext.RawApi.GetTrayMenu(Inno.Native.Sdl3.SDLTray* tray)
```

Gets a previously created tray menu.
You should have called SDL_CreateTrayMenu() on the tray object. This
function allows you to fetch it again later.
This function does the same thing as SDL_GetTraySubmenu(), except that it
takes a SDL_Tray instead of a SDL_TrayEntry.
A menu does not need to be destroyed; it will be destroyed with the tray.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTray

**See also:** SDL_CreateTrayMenu

**Parameter `tray`:** the tray entry to bind the menu to.

**Returns:** the newly created menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L44239).
