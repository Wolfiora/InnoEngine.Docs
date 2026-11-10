---
title: "SDLContext.RawApi — Method: UnlockProperties"
description: "Exact Method: UnlockProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3057a9b92e6d0a50
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnlockProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnlockProperties`

<a id="api-1b094288373537ee"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnlockProperties(System.UInt32) a3306f0ed134af1e9cf814f58dbf43fd90ab9c82e1f74114caf3528b802cdd35 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.UnlockProperties(uint props)
```

Unlock a group of properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_LockProperties

**Parameter `props`:** the properties to unlock.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23632).
