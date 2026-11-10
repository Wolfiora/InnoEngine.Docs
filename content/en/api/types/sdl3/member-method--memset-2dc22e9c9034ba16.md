---
title: "SDLContext.RawApi — Method: Memset"
description: "Exact Method: Memset contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2dc22e9c9034ba16
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Memset

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Memset`

<a id="api-72ed70a0cb0f6e18"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Memset(System.Void*,System.Int32,System.UInt64) 4e20b34a525ef91dd6456024e052e0ef995bea30bb80868f75505b656ae667f3 -->

```csharp
public void* Inno.Native.Sdl3.SDLContext.RawApi.Memset(void* dst, int c, ulong len)
```

Initialize all bytes of buffer of memory to a specific value.
This function will set `len` bytes, pointed to by `dst`, to the value
specified in `c`.
Despite `c` being an `int` instead of a `char`, this only operates on
bytes; `c` must be a value between 0 and 255, inclusive.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `dst`:** the destination memory region. Must not be NULL.

**Parameter `c`:** the byte value to set.

**Parameter `len`:** the length, in bytes, to set in `dst`.

**Returns:** `dst`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47466).
