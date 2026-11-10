---
title: "SDLContext.RawApi — Method: MetalGetLayer"
description: "Exact Method: MetalGetLayer contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.17f46a9a9f3d4c8f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: MetalGetLayer

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MetalGetLayer`

<a id="api-ea72abba474d0541"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.MetalGetLayer(System.Void*) 923ee604c9adcecd7764afde13aee8df1655c962a91c0963090223b484a42184 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.MetalGetLayer(void* view)
```

Get a pointer to the backing CAMetalLayer for the given view.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `view`:** the SDL_MetalView object.

**Returns:** a pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22889).
