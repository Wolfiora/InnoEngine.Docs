---
title: "SDLContext.RawApi — Method: GetGrabbedWindow"
description: "Exact Method: GetGrabbedWindow contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d657cc440164e0ac
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGrabbedWindow

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGrabbedWindow`

<a id="api-5399e0291fbfc553"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGrabbedWindow c9cb47abde94e26f9c9766b3be4d9c5f3c9db951d56b1a475f213a6851d3b2c4 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.GetGrabbedWindow()
```

Get the window that currently has an input grab enabled.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowMouseGrab

**See also:** SDL_SetWindowKeyboardGrab

**Returns:** the window if input is grabbed or NULL otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32273).
