---
title: "SDLContext.RawApi — Method: GetWindowRelativeMouseMode"
description: "Exact Method: GetWindowRelativeMouseMode contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4b096f421fc30d6c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetWindowRelativeMouseMode

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowRelativeMouseMode`

<a id="api-0afc96d678716e35"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetWindowRelativeMouseMode(Inno.Native.Sdl3.SDLWindow*) 4b488744fc751f2bbdfff2608e100ae3360c75b00d96500c19ce7155dae601b7 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.GetWindowRelativeMouseMode(Inno.Native.Sdl3.SDLWindow* window)
```

Query whether relative mouse mode is enabled for a window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetWindowRelativeMouseMode

**Parameter `window`:** the window to query.

**Returns:** true if relative mode is enabled for a window or false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24044).
