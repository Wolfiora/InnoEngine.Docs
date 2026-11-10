---
title: "SDLContext — Method: UnlockProperties"
description: "Exact Method: UnlockProperties contracts in SDLContext."
uid: api.inno.native.sdl3.1bde9e6ecd1629fd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: UnlockProperties

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockProperties`

<a id="api-0987643c7c3e9a10"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.UnlockProperties(System.UInt32) 6aeae4a48c489b09b7b8f5903f5fa14f836fbce6d894f18ae76394134115b8f6 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.UnlockProperties(uint props)
```

Unlock a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockProperties

**Parameter `props`:** the properties to unlock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12549).
