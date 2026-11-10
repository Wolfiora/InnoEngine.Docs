---
title: "SDLContext.RawApi — Method: DestroyMutex"
description: "Exact Method: DestroyMutex contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e8596cf83519c086
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyMutex

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyMutex`

<a id="api-aeee5402db95e471"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyMutex(Inno.Native.Sdl3.SDLMutex*) cdd36742b86d468c8c26499334658f0858805fceea661e97b97c2f73fe3cfe4f -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyMutex(Inno.Native.Sdl3.SDLMutex* mutex)
```

Destroy a mutex created with SDL_CreateMutex().
This function must be called on any mutex that is no longer needed. Failure
to destroy a mutex will result in a system memory or resource leak. While
it is safe to destroy a mutex that is _unlocked_, it is not safe to attempt
to destroy a locked mutex, and may result in undefined behavior depending
on the platform.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateMutex

**Parameter `mutex`:** the mutex to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L21992).
