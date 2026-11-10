---
title: "SDLContext.RawApi — Method: Strupr"
description: "Exact Method: Strupr contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2e39af6066285af3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Strupr

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Strupr`

<a id="api-49967961e00abaaf"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Strupr(System.SByte*) a7ef24e91cac66dc6fc5093ca34b9234e31bd9da858496a5ce93a38065a01b2d -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.Strupr(sbyte* str)
```

Convert a string to uppercase.
**WARNING**: Regardless of system locale, this will only convert ASCII
values 'a' through 'z' to uppercase.
This function operates on a null-terminated string of bytes--even if it is
malformed UTF-8!--and converts ASCII characters 'a' through 'z' to their
uppercase equivalents in-place, returning the original `str` pointer.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_strlwr

**Parameter `str`:** the string to convert in-place. Can not be NULL.

**Returns:** the `str` pointer passed into this function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31786).
