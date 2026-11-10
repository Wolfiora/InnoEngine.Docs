---
title: "SDL — Method: GetSystemPageSize"
description: "Exact Method: GetSystemPageSize contracts in SDL."
uid: api.inno.native.sdl3.dd211edaaa5aa20a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetSystemPageSize

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSystemPageSize`

<a id="api-583f910a4497fd42"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetSystemPageSize 163aa39cccf55050a516ce84b8229ea3b92ca8a977edb48f2c87b9c76d84a901 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetSystemPageSize()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2018).
