---
title: "SDLContext.RawApi — Method: SetTrayTooltip"
description: "Exact Method: SetTrayTooltip contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6d3f24156b8f24c5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTrayTooltip

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTrayTooltip`

<a id="api-28607289d7ad13af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTrayTooltip(Inno.Native.Sdl3.SDLTray*,System.SByte*) cb97852ce4183894d0af66a692192387f0862e592d87c90ac3ed23333e0074df -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetTrayTooltip(Inno.Native.Sdl3.SDLTray* tray, sbyte* tooltip)
```

Updates the system tray icon's tooltip.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTray

**Parameter `tray`:** the tray icon to be updated.

**Parameter `tooltip`:** the new tooltip in UTF-8 encoding. May be NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39967).
