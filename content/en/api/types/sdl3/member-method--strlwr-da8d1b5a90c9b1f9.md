---
title: "SDLContext.RawApi — Method: Strlwr"
description: "Exact Method: Strlwr contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.da8d1b5a90c9b1f9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strlwr

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strlwr`

<a id="api-d27585d9b9f1046d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strlwr(System.SByte*) ec526b4f867134039804a5ce1971ef17f6997c5fc336910e7f61f2e90591488e -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strlwr(sbyte* str)
```

Convert a string to lowercase.
**WARNING**: Regardless of system locale, this will only convert ASCII
values 'A' through 'Z' to lowercase.
This function operates on a null-terminated string of bytes--even if it is
malformed UTF-8!--and converts ASCII characters 'A' through 'Z' to their
lowercase equivalents in-place, returning the original `str` pointer.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_strupr

**Parameter `str`:** the string to convert in-place. Can not be NULL.

**Returns:** the `str` pointer passed into this function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L47805).
