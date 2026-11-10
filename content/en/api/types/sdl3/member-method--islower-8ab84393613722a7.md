---
title: "SDL — Method: Islower"
description: "Exact Method: Islower contracts in SDL."
uid: api.inno.native.sdl3.8ab84393613722a7
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Islower

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Islower`

<a id="api-f7b260653155f003"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Islower(System.Int32) f7a4eea96a1870728b823d051d682bdaa76c60e39193cbff70e6205b72103adb -->

```csharp
public static int Inno.Native.Sdl3.SDL.Islower(int x)
```

Report if a character is lower case.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'a' through 'z' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2629).
