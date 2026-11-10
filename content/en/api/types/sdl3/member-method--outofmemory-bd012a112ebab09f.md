---
title: "SDLContext — Method: OutOfMemory"
description: "Exact Method: OutOfMemory contracts in SDLContext."
uid: api.inno.native.sdl3.bd012a112ebab09f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: OutOfMemory

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `OutOfMemory`

<a id="api-fcc31ac08449d997"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.OutOfMemory f9cd43d6ebc546d0254b946a0717213e501592ade822373ef269b9b5685e8bfe -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.OutOfMemory()
```

Set an error indicating that memory allocation failed.
This function does not do any memory allocation.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15216).
