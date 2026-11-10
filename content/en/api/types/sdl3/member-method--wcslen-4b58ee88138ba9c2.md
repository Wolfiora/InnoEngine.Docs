---
title: "SDLContext.RawApi — Method: Wcslen"
description: "Exact Method: Wcslen contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4b58ee88138ba9c2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcslen

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcslen`

<a id="api-41fce161d726a6f5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcslen(System.UInt16*) 19e50b233c6a0fad05af47c2f415b48284c5b7c8f3b085164bb44bbf21866d0b -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Wcslen(ushort* wstr)
```

This works exactly like wcslen() but doesn't require access to a C runtime.
Counts the number of wchar_t values in `wstr`, excluding the null
terminator.
Like SDL_strlen only counts bytes and not codepoints in a UTF-8 string,
this counts wchar_t values in a string, even if the string's encoding is of
variable width, like UTF-16.
Also be aware that wchar_t is different sizes on different platforms (4
bytes on Linux, 2 on Windows, etc).

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_wcsnlen

**See also:** SDL_utf8strlen

**See also:** SDL_utf8strnlen

**Parameter `wstr`:** The null-terminated wide string to read. Must not be NULL.

**Returns:** the length (in wchar_t values, excluding the null terminator) of
`wstr`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L49223).
