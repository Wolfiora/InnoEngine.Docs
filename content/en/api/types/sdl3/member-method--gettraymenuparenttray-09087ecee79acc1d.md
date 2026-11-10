---
title: "SDLContext.RawApi — Method: GetTrayMenuParentTray"
description: "Exact Method: GetTrayMenuParentTray contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.09087ecee79acc1d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTrayMenuParentTray

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTrayMenuParentTray`

<a id="api-4c15714f0061a924"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTrayMenuParentTray(Inno.Native.Sdl3.SDLTrayMenu*) f1e126c0d11b5072d0b2a70667cabd0cd44bd75108e2fa2b732113fee8775037 -->

```csharp
public Inno.Native.Sdl3.SDLTray* Inno.Native.Sdl3.SDLContext.RawApi.GetTrayMenuParentTray(Inno.Native.Sdl3.SDLTrayMenu* menu)
```

Gets the tray for which this menu is the first-level menu, if the current
menu isn't a submenu.
Either this function or SDL_GetTrayMenuParentEntry() will return non-NULL
for any given menu.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTrayMenu

**See also:** SDL_GetTrayMenuParentEntry

**Parameter `menu`:** the menu for which to get the parent enttrayry.

**Returns:** the parent tray, or NULL if this menu is a submenu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30842).
