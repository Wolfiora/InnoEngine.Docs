---
title: "SDLContext.RawApi — Method: DestroyTray"
description: "Exact Method: DestroyTray contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1954d42a05a0dc35
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyTray

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyTray`

<a id="api-78934bedbcf3e0a1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyTray(Inno.Native.Sdl3.SDLTray*) 0e242990ed978d8e2866466c611f44f7260ca61127046090fb076def020ac822 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyTray(Inno.Native.Sdl3.SDLTray* tray)
```

Destroys a tray object.
This also destroys all associated menus and entries.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateTray

**Parameter `tray`:** the tray icon to be destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28283).
