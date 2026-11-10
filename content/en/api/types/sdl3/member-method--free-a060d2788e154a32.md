---
title: "SDLContext.RawApi — Method: Free"
description: "Exact Method: Free contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a060d2788e154a32
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Free

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Free`

<a id="api-7112ad99689f4b5d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Free(System.Void*) 82192dbe989e3f581e0e105946c32f7daa136e166893780c4996c67a19cf8907 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.Free(void* mem)
```

Free allocated memory.
The pointer is no longer valid after this call and cannot be dereferenced
anymore.
If `mem` is NULL, this function does nothing.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_malloc

**See also:** SDL_calloc

**See also:** SDL_realloc

**Parameter `mem`:** a pointer to allocated memory, or NULL.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42084).
