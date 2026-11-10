---
title: "SDLContext.RawApi — Method: DestroyRwLock"
description: "Exact Method: DestroyRwLock contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.826a502e65bafa87
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyRwLock

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyRwLock`

<a id="api-ba866370ca48eb48"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyRwLock(Inno.Native.Sdl3.SDLRWLock*) 539f2696fab501ab3055fa0ba90ecf4f57792a46ca5217e49322088a17dcce15 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyRwLock(Inno.Native.Sdl3.SDLRWLock* rwlock)
```

Destroy a read/write lock created with SDL_CreateRWLock().
This function must be called on any read/write lock that is no longer
needed. Failure to destroy a rwlock will result in a system memory or
resource leak. While it is safe to destroy a rwlock that is _unlocked_, it
is not safe to attempt to destroy a locked rwlock, and may result in
undefined behavior depending on the platform.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateRWLock

**Parameter `rwlock`:** the rwlock to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37518).
