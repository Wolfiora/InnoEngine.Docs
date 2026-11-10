---
title: "SDLContext.RawApi — Method: DestroySurface"
description: "Exact Method: DestroySurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.252033caa2c3bf81
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroySurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroySurface`

<a id="api-ed3b48a2bb956052"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroySurface(Inno.Native.Sdl3.SDLSurface*) 69dd9f3c4d4f84983d113b4c0244063278cc509e525b90cfb89788f56e6ab696 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroySurface(Inno.Native.Sdl3.SDLSurface* surface)
```

Free a surface.
It is safe to pass NULL to this function.

**Thread safety:** No other thread should be using the surface when it is freed.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateSurface

**See also:** SDL_CreateSurfaceFrom

**Parameter `surface`:** the SDL_Surface to free.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17623).
