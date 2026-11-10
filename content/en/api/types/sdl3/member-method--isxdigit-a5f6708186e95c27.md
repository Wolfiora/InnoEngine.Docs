---
title: "SDLContext.RawApi — Method: Isxdigit"
description: "Exact Method: Isxdigit contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a5f6708186e95c27
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isxdigit

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isxdigit`

<a id="api-dad528bb2d6cb7f2"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isxdigit(System.Int32) ae1d07a89a91a245da28ae15e77e03d19d7b5855d597fc8c45d37b28f21769fb -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isxdigit(int x)
```

Report if a character is a hexadecimal digit.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'A' through 'F', 'a' through 'f', and '0' through '9', as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L45731).
