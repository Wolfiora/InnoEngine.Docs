---
title: "SDLContext — Method: Tolower"
description: "Exact Method: Tolower contracts in SDLContext."
uid: api.inno.native.sdl3.8a50bc25aab17ca8
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Tolower

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Tolower`

<a id="api-c5b9bf93b6dd7159"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Tolower(System.Int32) c0b20a4378d6b3e71ef8fcb04c6c5ef3982838bf32de1a85c1d146d0fd618d0c -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Tolower(int x)
```

Convert low-ASCII English letters to lowercase.
**WARNING**: Regardless of system locale, this will only convert ASCII
values 'A' through 'Z' to lowercase.
This function returns the lowercase equivalent of `x`. If a character
cannot be converted, or is already lowercase, this function returns `x`.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** lowercase version of x, or x if no conversion available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15935).
