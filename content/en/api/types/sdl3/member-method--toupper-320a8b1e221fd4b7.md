---
title: "SDLContext.RawApi — Method: Toupper"
description: "Exact Method: Toupper contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.320a8b1e221fd4b7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Toupper

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Toupper`

<a id="api-2375fce7775e6c58"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Toupper(System.Int32) 8e8f115a0e9aa94f842166b62640e2c5e7f4f4359e1129f2e223299787836137 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Toupper(int x)
```

Convert low-ASCII English letters to uppercase.
**WARNING**: Regardless of system locale, this will only convert ASCII
values 'a' through 'z' to uppercase.
This function returns the uppercase equivalent of `x`. If a character
cannot be converted, or is already uppercase, this function returns `x`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** capitalized version of x, or x if no conversion available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L43775).
