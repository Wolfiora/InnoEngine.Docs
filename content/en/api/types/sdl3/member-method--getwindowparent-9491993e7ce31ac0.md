---
title: "SDLContext.RawApi — Method: GetWindowParent"
description: "Exact Method: GetWindowParent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9491993e7ce31ac0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowParent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowParent`

<a id="api-41610b00c407a81f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowParent(Inno.Native.Sdl3.SDLWindow*) e2aac0222dd41b361868b6b58185b7f794046e0b562dac18fa686270567f1809 -->

```csharp
public Inno.Native.Sdl3.SDLWindow* Inno.Native.Sdl3.SDLContext.RawApi.GetWindowParent(Inno.Native.Sdl3.SDLWindow* window)
```

Get parent of a window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreatePopupWindow

**Parameter `window`:** the window to query.

**Returns:** the parent of the window on success or NULL if the window has no
parent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16851).
