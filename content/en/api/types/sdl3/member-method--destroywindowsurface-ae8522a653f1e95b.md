---
title: "SDLContext.RawApi — Method: DestroyWindowSurface"
description: "Exact Method: DestroyWindowSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ae8522a653f1e95b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyWindowSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyWindowSurface`

<a id="api-986002b3b2cd684a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyWindowSurface(Inno.Native.Sdl3.SDLWindow*) cab877d12980e4b58ebb33463049df7cacaf0fa0e7e72644ff1ef1a60b59837b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.DestroyWindowSurface(Inno.Native.Sdl3.SDLWindow* window)
```

Destroy the surface associated with the window.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowSurface

**See also:** SDL_WindowHasSurface

**Parameter `window`:** the window to update.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31273).
