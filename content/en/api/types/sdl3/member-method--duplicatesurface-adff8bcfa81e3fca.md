---
title: "SDLContext.RawApi — Method: DuplicateSurface"
description: "Exact Method: DuplicateSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.adff8bcfa81e3fca
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DuplicateSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DuplicateSurface`

<a id="api-6c1b613cee41f5a3"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DuplicateSurface(Inno.Native.Sdl3.SDLSurface*) 437af7eaf2e304396b3dbadd42667a86bc640a4a3d37cbefd5638469e721fdaa -->

```csharp
public Inno.Native.Sdl3.SDLSurface* Inno.Native.Sdl3.SDLContext.RawApi.DuplicateSurface(Inno.Native.Sdl3.SDLSurface* surface)
```

Creates a new surface identical to the existing surface.
If the original surface has alternate images, the new surface will have a
reference to them as well.
The returned surface should be freed with SDL_DestroySurface().

**Thread safety:** This function can be called on different threads with
different surfaces.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_DestroySurface

**Parameter `surface`:** the surface to duplicate.

**Returns:** a copy of the surface or NULL on failure; call SDL_GetError() for
more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46127).
