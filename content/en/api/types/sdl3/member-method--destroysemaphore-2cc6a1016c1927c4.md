---
title: "SDLContext.RawApi — Method: DestroySemaphore"
description: "Exact Method: DestroySemaphore contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2cc6a1016c1927c4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroySemaphore

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroySemaphore`

<a id="api-11a27ec3a4968223"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroySemaphore(Inno.Native.Sdl3.SDLSemaphore*) e2bbb9e4352b979ab0e7336e55f95ceba22459b59ad547d0b3a0ab65cba57ba1 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroySemaphore(Inno.Native.Sdl3.SDLSemaphore* sem)
```

Destroy a semaphore.
It is not safe to destroy a semaphore if there are threads currently
waiting on it.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateSemaphore

**Parameter `sem`:** the semaphore to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L26901).
