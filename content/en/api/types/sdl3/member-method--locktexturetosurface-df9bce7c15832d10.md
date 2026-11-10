---
title: "SDLContext.RawApi — Method: LockTextureToSurface"
description: "Exact Method: LockTextureToSurface contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.df9bce7c15832d10
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LockTextureToSurface

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockTextureToSurface`

<a id="api-5e3de3d58d946f92"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LockTextureToSurface(Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLRect*,Inno.Native.Sdl3.SDLSurface**) de0449febbf5948ff7ba18adb77ef1e722795c307cc18ce9db1732bc629197da -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.LockTextureToSurface(Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLRect* rect, Inno.Native.Sdl3.SDLSurface** surface)
```

Lock a portion of the texture for **write-only** pixel access, and expose
it as a SDL surface.
Besides providing an SDL_Surface instead of raw pixel data, this function
operates like SDL_LockTexture.
As an optimization, the pixels made available for editing don't necessarily
contain the old texture data. This is a write-only operation, and if you
need to keep a copy of the texture data you should do that at the
application level.
You must use SDL_UnlockTexture() to unlock the pixels and apply any
changes.
The returned surface is freed internally after calling SDL_UnlockTexture()
or SDL_DestroyTexture(). The caller should not free it.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockTexture

**See also:** SDL_UnlockTexture

**Parameter `texture`:** the texture to lock for access, which must be created with
`SDL_TEXTUREACCESS_STREAMING`.

**Parameter `rect`:** a pointer to the rectangle to lock for access. If the rect is
NULL, the entire texture will be locked.

**Parameter `surface`:** a pointer to an SDL surface of size **rect**. Don't assume
any specific pixel content.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17362).
