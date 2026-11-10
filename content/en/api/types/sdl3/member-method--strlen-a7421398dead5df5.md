---
title: "SDLContext.RawApi — Method: Strlen"
description: "Exact Method: Strlen contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a7421398dead5df5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strlen

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strlen`

<a id="api-a68aaeb18a1a82bb"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strlen(System.SByte*) 1889caab3884713a265a7f220e2d2baa2e6fb2ad7ff7558694445d39b5068b86 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Strlen(sbyte* str)
```

This works exactly like strlen() but doesn't require access to a C runtime.
Counts the bytes in `str`, excluding the null terminator.
If you need the length of a UTF-8 string, consider using SDL_utf8strlen().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_strnlen

**See also:** SDL_utf8strlen

**See also:** SDL_utf8strnlen

**Parameter `str`:** The null-terminated string to read. Must not be NULL.

**Returns:** the length (in bytes, excluding the null terminator) of `str`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L27481).
