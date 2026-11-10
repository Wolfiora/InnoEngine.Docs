---
title: "SDLContext — Method: GetGlobalProperties"
description: "Exact Method: GetGlobalProperties contracts in SDLContext."
uid: api.inno.native.sdl3.ba1d3c1908e59b81
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetGlobalProperties

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGlobalProperties`

<a id="api-fa0b92d80fa06af5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetGlobalProperties 0480202cb529059cf0bf44f58b504370e6ae940f91a719531509d0d136b3b388 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.GetGlobalProperties()
```

Get the global SDL properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12563).
