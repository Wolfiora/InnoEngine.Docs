---
title: "SDLContext — Method: CleanupTls"
description: "Exact Method: CleanupTls contracts in SDLContext."
uid: api.inno.native.sdl3.257e52ca0b8579e9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: CleanupTls

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CleanupTls`

<a id="api-878bb66f14d7b571"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.CleanupTls 20e234ba43ce7b786c2523d1e07921b472a11332e35bc985d55552ef6fe1c3ed -->

```csharp
public void Inno.Native.Sdl3.SDLContext.CleanupTls()
```

Cleanup all TLS data for this thread.
If you are creating your threads outside of SDL and then calling SDL
functions, you should call this function before your thread exits, to
properly clean up SDL memory.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16102).
