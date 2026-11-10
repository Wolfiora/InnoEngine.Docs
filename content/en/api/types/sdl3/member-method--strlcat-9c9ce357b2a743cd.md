---
title: "SDLContext.RawApi — Method: Strlcat"
description: "Exact Method: Strlcat contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.9c9ce357b2a743cd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strlcat

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strlcat`

<a id="api-fdacde4c7e958c0b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strlcat(System.SByte*,System.SByte*,System.UInt64) cf4cecbe1bbf30aa593754bdc16aa3fdaf4b06a55bc920f8f91b5ff211937a78 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.Strlcat(sbyte* dst, sbyte* src, ulong maxlen)
```

Concatenate strings.
This function appends up to `maxlen` - SDL_strlen(dst) - 1 characters from
`src` to the end of the string in `dst`, then appends a null terminator.
`src` and `dst` must not overlap.
If `maxlen` - SDL_strlen(dst) - 1 is less than or equal to 0, then `dst` is
unmodified.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_strlcpy

**Parameter `dst`:** The destination buffer already containing the first
null-terminated string. Must not be NULL and must not overlap
with `src`.

**Parameter `src`:** The second null-terminated string. Must not be NULL, and must
not overlap with `dst`.

**Parameter `maxlen`:** The length (in characters) of the destination buffer.

**Returns:** the length (in characters, excluding the null terminator) of the
string in `dst` plus the length of `src`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39357).
