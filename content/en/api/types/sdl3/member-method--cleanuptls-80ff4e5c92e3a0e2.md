---
title: "SDLContext.RawApi — Method: CleanupTls"
description: "Exact Method: CleanupTls contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.80ff4e5c92e3a0e2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: CleanupTls

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CleanupTls`

<a id="api-5ef686426709b7dc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.CleanupTls 55b3659db99ef11ecea9aa3f2b532b11ff230ee55abeb770a58c1ca3dd4f4b4e -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.CleanupTls()
```

Cleanup all TLS data for this thread.
If you are creating your threads outside of SDL and then calling SDL
functions, you should call this function before your thread exits, to
properly clean up SDL memory.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49934).
