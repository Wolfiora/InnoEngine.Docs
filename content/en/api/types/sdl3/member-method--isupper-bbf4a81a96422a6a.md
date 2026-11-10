---
title: "SDL — Method: Isupper"
description: "Exact Method: Isupper contracts in SDL."
uid: api.inno.native.sdl3.bbf4a81a96422a6a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isupper

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isupper`

<a id="api-8d294845c4dfd53b"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isupper(System.Int32) 93c51806c38eab35090ef730cd83bcb7252294b6a22c03cc381071e134f56a48 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isupper(int x)
```

Report if a character is upper case.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'A' through 'Z' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2819).
