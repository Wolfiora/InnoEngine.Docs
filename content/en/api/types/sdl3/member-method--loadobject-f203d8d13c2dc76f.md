---
title: "SDLContext.RawApi — Method: LoadObject"
description: "Exact Method: LoadObject contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f203d8d13c2dc76f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: LoadObject

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `LoadObject`

<a id="api-7c56888c8fa1f8cf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.LoadObject(System.SByte*) c93ff62ccb2eb4f2b0a84d470bdeb9c320410ba987608e8036d477db339d6ca9 -->

```csharp
public Inno.Native.Sdl3.SDLSharedObject* Inno.Native.Sdl3.SDLContext.RawApi.LoadObject(sbyte* sofile)
```

Dynamically load a shared object.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LoadFunction

**See also:** SDL_UnloadObject

**Parameter `sofile`:** a system-dependent name of the object file.

**Returns:** an opaque pointer to the object handle or NULL on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L24960).
