---
title: "SDLContext.RawApi — Method: GetSystemPageSize"
description: "Exact Method: GetSystemPageSize contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f2b3aa16d46b1dc0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSystemPageSize

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSystemPageSize`

<a id="api-8eaf7f7a8402d96a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSystemPageSize 649ecb2485ad7e775f629754cbeeab6881d8b796cfeb432c2782a51ec655b953 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetSystemPageSize()
```

Report the size of a page of memory.
Different platforms might have different memory page sizes. In current
times, 4 kilobytes is not unusual, but newer systems are moving to larger
page sizes, and esoteric platforms might have any unexpected size.
Note that this function can return 0, which means SDL can't determine the
page size on this platform. It will _not_ set an error string to be
retrieved with SDL_GetError() in this case! In this case, defaulting to
4096 is often a reasonable option.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.4.0.

**Returns:** the size of a single page of memory, in bytes, or 0 if SDL can't
determine this information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L33562).
