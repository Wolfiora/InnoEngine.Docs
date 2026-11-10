---
title: "SDLContext.RawApi — Method: UnlockTexture"
description: "Exact Method: UnlockTexture contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.7695c2a19c07225d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnlockTexture

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockTexture`

<a id="api-30766e4a796e4235"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnlockTexture(Inno.Native.Sdl3.SDLTexture*) 24ff5b80e6ff6ec33daa2d8663ba6ed0e947f0aaa958bd34a7e4e9fb99b7aad4 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnlockTexture(Inno.Native.Sdl3.SDLTexture* texture)
```

Unlock a texture, uploading the changes to video memory, if needed.
**Warning**: Please note that SDL_LockTexture() is intended to be
write-only; it will not guarantee the previous contents of the texture will
be provided. You must fully initialize any area of a texture that you lock
before unlocking it, as the pixels might otherwise be uninitialized memory.
Which is to say: locking and immediately unlocking a texture can result in
corrupted textures, depending on the renderer in use.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockTexture

**Parameter `texture`:** a texture locked by SDL_LockTexture().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29267).
