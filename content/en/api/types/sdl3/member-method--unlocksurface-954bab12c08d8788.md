---
title: "SDLContext.RawApi — Method: UnlockSurface"
description: "Exact Method: UnlockSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.954bab12c08d8788
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnlockSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockSurface`

<a id="api-d8bdeb1556192a98"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnlockSurface(Inno.Native.Sdl3.SDLSurface*) 5b715cb7f2d674b61602600c72876a7a71fd6f7612ed133d50c503fc5d5629f7 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnlockSurface(Inno.Native.Sdl3.SDLSurface* surface)
```

Release a surface after directly accessing the pixels.

**Thread safety:** This function is not thread safe. The locking referred to by
this function is making the pixels available for direct
access, not thread-safe locking.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockSurface

**Parameter `surface`:** the SDL_Surface structure to be unlocked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30912).
