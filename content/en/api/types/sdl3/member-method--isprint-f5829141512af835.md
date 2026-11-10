---
title: "SDL — Method: Isprint"
description: "Exact Method: Isprint contracts in SDL."
uid: api.inno.native.sdl3.f5829141512af835
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Isprint

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isprint`

<a id="api-e55e4b6f3393f9f1"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Isprint(System.Int32) 0715c7dd7c86ea8d7438041fe8980b373d71553039d27f1c14a1baae414da43a -->

```csharp
public static int Inno.Native.Sdl3.SDL.Isprint(int x)
```

Report if a character is "printable".
Be advised that "printable" has a definition that goes back to text
terminals from the dawn of computing, making this a sort of special case
function that is not suitable for Unicode (or most any) text management.
**WARNING**: Regardless of system locale, this will only treat ASCII values
' ' (0x20) through '~' (0x7E) as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L466).
