---
title: "SDLContext.RawApi — Method: UnloadObject"
description: "Exact Method: UnloadObject contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.469dd4a6d8a84f36
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnloadObject

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnloadObject`

<a id="api-8c6978654aaf63e8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnloadObject(Inno.Native.Sdl3.SDLSharedObject*) 42231b97fb488a83f31504253ba68de460d92a4b315d230a6c7d275a6666483b -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnloadObject(Inno.Native.Sdl3.SDLSharedObject* handle)
```

Unload a shared object from memory.
Note that any pointers from this object looked up through
SDL_LoadFunction() will no longer be valid.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LoadObject

**Parameter `handle`:** a valid shared object handle returned by SDL_LoadObject().


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42933).
