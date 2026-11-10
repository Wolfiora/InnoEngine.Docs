---
title: "SDLContext.RawApi — Method: LockTexture"
description: "Exact Method: LockTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8c33c68685257697
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LockTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LockTexture`

<a id="api-b44557f46f7eeb4f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LockTexture(Inno.Native.Sdl3.SDLTexture*,Inno.Native.Sdl3.SDLRect*,System.Void**,System.Int32*) f99ed67df16ed3768efdeb6c2aeb33d1c958ad862bdbf49198532e782c885b45 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.LockTexture(Inno.Native.Sdl3.SDLTexture* texture, Inno.Native.Sdl3.SDLRect* rect, void** pixels, int* pitch)
```

Lock a portion of the texture for **write-only** pixel access.
As an optimization, the pixels made available for editing don't necessarily
contain the old texture data. This is a write-only operation, and if you
need to keep a copy of the texture data you should do that at the
application level.
You must use SDL_UnlockTexture() to unlock the pixels and apply any
changes.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockTextureToSurface

**See also:** SDL_UnlockTexture

**Parameter `texture`:** the texture to lock for access, which was created with
`SDL_TEXTUREACCESS_STREAMING`.

**Parameter `rect`:** an SDL_Rect structure representing the area to lock for access;
NULL to lock the entire texture.

**Parameter `pixels`:** this is filled in with a pointer to the locked pixels,
appropriately offset by the locked area.

**Parameter `pitch`:** this is filled in with the pitch of the locked pixels; the
pitch is the length of one row in bytes.

**Returns:** true on success or false if the texture is not valid or was not
created with `SDL_TEXTUREACCESS_STREAMING`; call SDL_GetError()
for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L25167).
