---
title: "SDLContext.RawApi — Method: DestroyProperties"
description: "Exact Method: DestroyProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c305c2e2c407ebee
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyProperties`

<a id="api-a167cc34028e4327"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyProperties(System.UInt32) 4bd6a0503787ae9f93a0d763f32795055eaead92a08065be0020a22fe23bfe13 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyProperties(uint props)
```

Destroy a group of properties.
All properties are deleted and their cleanup functions will be called, if
any.

**Thread safety:** This function should not be called while these properties are
locked or other threads might be setting or getting values
from these properties.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProperties

**Parameter `props`:** the properties to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36681).
