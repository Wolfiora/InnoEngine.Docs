---
title: "SDLContext.RawApi — Method: UpdateWindowSurface"
description: "Exact Method: UpdateWindowSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0923ff00cdf84d2f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UpdateWindowSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UpdateWindowSurface`

<a id="api-d2191b4f7bad5030"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UpdateWindowSurface(Inno.Native.Sdl3.SDLWindow*) 8aa7e2fb92543eed4c781fd82ebc8b2c807eaae35eea0a4a407a8f3be5766207 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.UpdateWindowSurface(Inno.Native.Sdl3.SDLWindow* window)
```

Copy the window surface to the screen.
This is the function you use to reflect any changes to the surface on the
screen.
This function is equivalent to the SDL 1.2 API SDL_Flip().

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetWindowSurface

**See also:** SDL_UpdateWindowSurfaceRects

**Parameter `window`:** the window to update.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28548).
