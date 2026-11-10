---
title: "SDLContext — Method: Isupper"
description: "Exact Method: Isupper contracts in SDLContext."
uid: api.inno.native.sdl3.d03bcc09e21c3ff2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isupper

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isupper`

<a id="api-e7c33c3ab5685b4b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isupper(System.Int32) 288ac879275a94537611e5dfcf7743b667e71cb4d339bcd16debfde115ec69d2 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isupper(int x)
```

Report if a character is upper case.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'A' through 'Z' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14771).
