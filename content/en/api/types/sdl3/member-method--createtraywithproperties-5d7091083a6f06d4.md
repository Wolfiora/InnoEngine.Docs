---
title: "SDLContext.RawApi — Method: CreateTrayWithProperties"
description: "Exact Method: CreateTrayWithProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.5d7091083a6f06d4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateTrayWithProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateTrayWithProperties`

<a id="api-26619bdb5c0cb848"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateTrayWithProperties(System.UInt32) d23c82579f7332eb4ee34e6f04f4dda612d4b72d3068d3283b341428ff7132b0 -->

```csharp
public Inno.Native.Sdl3.SDLTray* Inno.Native.Sdl3.SDLContext.RawApi.CreateTrayWithProperties(uint props)
```

Create an icon to be placed in the operating system's tray, or equivalent.
Many platforms advise not using a system tray unless persistence is a
necessary feature. Avoid needlessly creating a tray icon, as the user may
feel like it clutters their interface.
Using tray icons require the video subsystem.
These are the supported properties:
- `SDL_PROP_TRAY_CREATE_ICON_POINTER`: an SDL_Surface to be used as the
tray icon. May be NULL.
- `SDL_PROP_TRAY_CREATE_TOOLTIP_STRING`: a tooltip to be displayed when the
mouse hovers the icon in UTF-8 encoding. Not supported on all platforms.
May be NULL.
- `SDL_PROP_TRAY_CREATE_USERDATA_POINTER`: an optional pointer to associate
with the tray, which will be passed to click callbacks. May be NULL.
- `SDL_PROP_TRAY_CREATE_LEFTCLICK_CALLBACK_POINTER`: an
SDL_TrayClickCallback to be invoked when the tray icon is left-clicked.
Not supported on all platforms. The callback should return true to show
the default menu, or false to skip showing it. May be NULL.
- `SDL_PROP_TRAY_CREATE_RIGHTCLICK_CALLBACK_POINTER`: an
SDL_TrayClickCallback to be invoked when the tray icon is right-clicked.
Not supported on all platforms. The callback should return true to show
the default menu, or false to skip showing it. May be NULL.
- `SDL_PROP_TRAY_CREATE_MIDDLECLICK_CALLBACK_POINTER`: an
SDL_TrayClickCallback to be invoked when the tray icon is middle-clicked.
Not supported on all platforms. May be NULL.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.6.0.

**See also:** SDL_CreateTray

**See also:** SDL_CreateTrayMenu

**See also:** SDL_GetTrayMenu

**See also:** SDL_DestroyTray

**Parameter `props`:** the properties to use.

**Returns:** The newly created system tray icon.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L35533).
