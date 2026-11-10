---
title: "SDLContext.RawApi — Method: CreateTray"
description: "Exact Method: CreateTray contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.afa5bce31509a632
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CreateTray

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CreateTray`

<a id="api-17cd47978da26912"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CreateTray(Inno.Native.Sdl3.SDLSurface*,System.SByte*) 836323716c1f238f8bbea78a3579025f65242cc3b2eff03e16f5d03f675a46b7 -->

```csharp
public Inno.Native.Sdl3.SDLTray* Inno.Native.Sdl3.SDLContext.RawApi.CreateTray(Inno.Native.Sdl3.SDLSurface* icon, sbyte* tooltip)
```

Create an icon to be placed in the operating system's tray, or equivalent.
Many platforms advise not using a system tray unless persistence is a
necessary feature. Avoid needlessly creating a tray icon, as the user may
feel like it clutters their interface.
Using tray icons require the video subsystem.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTrayWithProperties

**See also:** SDL_CreateTrayMenu

**See also:** SDL_GetTrayMenu

**See also:** SDL_DestroyTray

**Parameter `icon`:** a surface to be used as icon. May be NULL.

**Parameter `tooltip`:** a tooltip to be displayed when the mouse hovers the icon in
UTF-8 encoding. Not supported on all platforms. May be NULL.

**Returns:** The newly created system tray icon.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16925).
