---
title: "SDLContext.RawApi — Method: Wcsnlen"
description: "Exact Method: Wcsnlen contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2ee882ff7f5238eb
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Wcsnlen

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Wcsnlen`

<a id="api-53c08d83608ce2e4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Wcsnlen(System.UInt16*,System.UInt64) e3814bb046c8335e420c26c1819d696cdcad09ac4b5dbebc37c5a8744a269bac -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Wcsnlen(ushort* wstr, ulong maxlen)
```

This works exactly like wcsnlen() but doesn't require access to a C
runtime.
Counts up to a maximum of `maxlen` wchar_t values in `wstr`, excluding the
null terminator.
Like SDL_strnlen only counts bytes and not codepoints in a UTF-8 string,
this counts wchar_t values in a string, even if the string's encoding is of
variable width, like UTF-16.
Also be aware that wchar_t is different sizes on different platforms (4
bytes on Linux, 2 on Windows, etc).
Also, `maxlen` is a count of wide characters, not bytes!

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_wcslen

**See also:** SDL_utf8strlen

**See also:** SDL_utf8strnlen

**Parameter `wstr`:** The null-terminated wide string to read. Must not be NULL.

**Parameter `maxlen`:** The maximum amount of wide characters to count.

**Returns:** the length (in wide characters, excluding the null terminator) of
`wstr` but never more than `maxlen`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17854).
