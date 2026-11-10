---
title: "SDLContext — Method: Toupper"
description: "Exact Method: Toupper contracts in SDLContext."
uid: api.inno.native.sdl3.dc57a00f0efedc2a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Toupper

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Toupper`

<a id="api-27037f8ba32d24ee"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Toupper(System.Int32) abf08cf7dedf454ac5e8c46939c1a6b68655aa852b719a0685bab9315aef4837 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Toupper(int x)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15417).
