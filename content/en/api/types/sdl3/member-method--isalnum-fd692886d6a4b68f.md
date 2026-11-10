---
title: "SDLContext.RawApi — Method: Isalnum"
description: "Exact Method: Isalnum contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.fd692886d6a4b68f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isalnum

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isalnum`

<a id="api-e8524688a9d29fd9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isalnum(System.Int32) f4a8b076b20375547de45d4269be7e3b0deaf5b7cd137cfa6fed9cfb9d95cc60 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isalnum(int x)
```

Query if a character is alphabetic (a letter) or a number.
**WARNING**: Regardless of system locale, this will only treat ASCII values
for English 'a-z', 'A-Z', and '0-9' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43524).
