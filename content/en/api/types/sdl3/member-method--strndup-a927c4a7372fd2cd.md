---
title: "SDLContext.RawApi — Method: Strndup"
description: "Exact Method: Strndup contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a927c4a7372fd2cd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strndup

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strndup`

<a id="api-e6794bf2afc9de2d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strndup(System.SByte*,System.UInt64) ecb974fe2f568ee37bcbc7124d75f83177b2ac18c2b468882658a009c1367a8d -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strndup(sbyte* str, ulong maxlen)
```

Allocate a copy of a string, up to n characters.
This allocates enough space for a null-terminated copy of `str`, up to
`maxlen` bytes, using SDL_malloc, and then makes a copy of the string into
this space.
If the string is longer than `maxlen` bytes, the returned string will be
`maxlen` bytes long, plus a null-terminator character that isn't included
in the count.
The returned string is owned by the caller, and should be passed to
SDL_free when no longer needed.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `str`:** the string to copy.

**Parameter `maxlen`:** the maximum length of the copied string, not counting the
null-terminator character.

**Returns:** a pointer to the newly-allocated string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52190).
