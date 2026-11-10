---
title: "SDLContext.RawApi — Method: OutOfMemory"
description: "Exact Method: OutOfMemory contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.0ceb321543915dd8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: OutOfMemory

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OutOfMemory`

<a id="api-83acf8dcd6af5f3e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.OutOfMemory 7d5b8afb4775ece3685cbf39252fcf0869f6036ea1b406ff649e8388a7260d26 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.OutOfMemory()
```

Set an error indicating that memory allocation failed.
This function does not do any memory allocation.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L42623).
