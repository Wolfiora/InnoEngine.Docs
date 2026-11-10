---
title: "SDLContext — Method: GetSystemPageSize"
description: "Exact Method: GetSystemPageSize contracts in SDLContext."
uid: api.inno.native.sdl3.3db50850dc8acf60
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetSystemPageSize

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSystemPageSize`

<a id="api-68e737064fe986da"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetSystemPageSize a7985321f876f8d08256bb1bab31afa02d60f7713fc41d34f0fa92a740b9d34b -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetSystemPageSize()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13808).
