---
title: "SDLContext.RawApi — Method: Strnlen"
description: "Exact Method: Strnlen contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bcb5573735e7ce82
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strnlen

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strnlen`

<a id="api-16d072604c846523"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strnlen(System.SByte*,System.UInt64) ec88edaeb8b7b8df19482149e3d29fa765c19b3bd2d21cf373d9b4d5f9d1d42a -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Strnlen(sbyte* str, ulong maxlen)
```

This works exactly like strnlen() but doesn't require access to a C
runtime.
Counts up to a maximum of `maxlen` bytes in `str`, excluding the null
terminator.
If you need the length of a UTF-8 string, consider using SDL_utf8strnlen().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_strlen

**See also:** SDL_utf8strlen

**See also:** SDL_utf8strnlen

**Parameter `str`:** The null-terminated string to read. Must not be NULL.

**Parameter `maxlen`:** The maximum amount of bytes to count.

**Returns:** the length (in bytes, excluding the null terminator) of `src` but
never more than `maxlen`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30793).
