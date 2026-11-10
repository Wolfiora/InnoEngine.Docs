---
title: "SDLContext.RawApi — Method: SetWindowMinimumSize"
description: "Exact Method: SetWindowMinimumSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.78af1ab20761eaf8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetWindowMinimumSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetWindowMinimumSize`

<a id="api-b202257d3dff98b8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetWindowMinimumSize(Inno.Native.Sdl3.SDLWindow*,System.Int32,System.Int32) 9714ec63b562d9336e90211b594c253702183e042d15dd4604cad2906e2c239c -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetWindowMinimumSize(Inno.Native.Sdl3.SDLWindow* window, int min_w, int min_h)
```

Set the minimum size of a window's client area.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowMinimumSize

**See also:** SDL_SetWindowMaximumSize

**Parameter `window`:** the window to change.

**Parameter `min_w`:** the minimum width of the window, or 0 for no limit.

**Parameter `min_h`:** the minimum height of the window, or 0 for no limit.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39689).
