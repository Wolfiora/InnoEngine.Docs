---
title: "SDLContext.RawApi — Method: SetTrayIcon"
description: "Exact Method: SetTrayIcon contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d14b6217858916b2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTrayIcon

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTrayIcon`

<a id="api-ab5d2ae9b3e36788"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTrayIcon(Inno.Native.Sdl3.SDLTray*,Inno.Native.Sdl3.SDLSurface*) 1854821cbe6dcf56e3449e4bb1f12235d79d6b7f6ab70d6016550b5764ad30f0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetTrayIcon(Inno.Native.Sdl3.SDLTray* tray, Inno.Native.Sdl3.SDLSurface* icon)
```

Updates the system tray icon's icon.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTray

**Parameter `tray`:** the tray icon to be updated.

**Parameter `icon`:** the new icon. May be NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17139).
