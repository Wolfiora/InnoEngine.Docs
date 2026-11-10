---
title: "SDLContext.RawApi — Method: Wcslcpy"
description: "Exact Method: Wcslcpy contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9267615351091bd2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcslcpy

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcslcpy`

<a id="api-194e45f02731882b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcslcpy(System.UInt16*,System.UInt16*,System.UInt64) 67c120ac44e39d6332be89ad11a0a5551e5cda36a958315272ca1d2de7c38b79 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Wcslcpy(ushort* dst, ushort* src, ulong maxlen)
```

Copy a wide string.
This function copies `maxlen` - 1 wide characters from `src` to `dst`, then
appends a null terminator.
`src` and `dst` must not overlap.
If `maxlen` is 0, no wide characters are copied and no null terminator is
written.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_wcslcat

**Parameter `dst`:** The destination buffer. Must not be NULL, and must not overlap
with `src`.

**Parameter `src`:** The null-terminated wide string to copy. Must not be NULL, and
must not overlap with `dst`.

**Parameter `maxlen`:** The length (in wide characters) of the destination buffer.

**Returns:** the length (in wide characters, excluding the null terminator) of
`src`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46889).
