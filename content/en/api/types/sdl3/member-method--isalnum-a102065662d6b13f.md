---
title: "SDL — Method: Isalnum"
description: "Exact Method: Isalnum contracts in SDL."
uid: api.inno.native.sdl3.a102065662d6b13f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isalnum

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isalnum`

<a id="api-2c4183fcb7f7533b"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isalnum(System.Int32) 7e709f242b6731b3a0facbbcaf2b1e43fba99cb0014962b597ea10c51e13ec77 -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isalnum(int x)
```

Query if a character is alphabetic (a letter) or a number.
**WARNING**: Regardless of system locale, this will only treat ASCII values
for English 'a-z', 'A-Z', and '0-9' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3333).
