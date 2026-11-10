---
title: "SDLContext.RawApi — Method: Isupper"
description: "Exact Method: Isupper contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.4d1d48491523b7b8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Isupper

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isupper`

<a id="api-470b5fd39791d649"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Isupper(System.Int32) 5974b5746e82eccbcdc1631fc63e4d775b1a3768abb97faa6fac04b1c86de551 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Isupper(int x)
```

Report if a character is upper case.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'A' through 'Z' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39102).
