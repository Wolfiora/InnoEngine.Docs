---
title: "SDLContext — Method: DestroyProperties"
description: "Exact Method: DestroyProperties contracts in SDLContext."
uid: api.inno.native.sdl3.608e414dec5c0097
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: DestroyProperties

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyProperties`

<a id="api-94ffac6f66908e55"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.DestroyProperties(System.UInt32) ac15591d18724b0e5363f7929ffb519e28ed5613409f68dc044dcb1f50d9dc5e -->

```csharp
public void Inno.Native.Sdl3.SDLContext.DestroyProperties(uint props)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14377).
