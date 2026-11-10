---
title: "SDLContext.RawApi — Method: GetGlobalProperties"
description: "Exact Method: GetGlobalProperties contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.aad33aa94ca1a98f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetGlobalProperties

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetGlobalProperties`

<a id="api-c114a4c14b228026"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetGlobalProperties 5114808774c938ff36b5f25c299a5c8e1cbdbde275559e29661d59e905baf791 -->

```csharp
public uint Inno.Native.Sdl3.SDLContext.RawApi.GetGlobalProperties()
```

Get the global SDL properties.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** a valid property ID on success or 0 on failure; call
SDL_GetError() for more information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23859).
