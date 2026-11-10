---
title: "SDLContext.RawApi — Method: SetWindowMouseRect"
description: "Exact Method: SetWindowMouseRect contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ecd9307aac08fa03
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowMouseRect

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowMouseRect`

<a id="api-f0729c45858fa87e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowMouseRect(Inno.Native.Sdl3.SDLWindow*,Inno.Native.Sdl3.SDLRect*) 9994d6b2fc166433bd8d3a6ba1627064a349c7a304ebeae3707ecb9617efc91c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowMouseRect(Inno.Native.Sdl3.SDLWindow* window, Inno.Native.Sdl3.SDLRect* rect)
```

Confines the cursor to the specified area of a window.
Note that this does NOT grab the cursor, it only defines the area a cursor
is restricted to when the window has mouse focus.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowMouseRect

**See also:** SDL_GetWindowMouseGrab

**See also:** SDL_SetWindowMouseGrab

**Parameter `window`:** the window that will be associated with the barrier.

**Parameter `rect`:** a rectangle area in window-relative coordinates. If NULL the
barrier for the specified window will be destroyed.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32615).
