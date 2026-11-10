---
title: "SDLContext — Method: Isalnum"
description: "Exact Method: Isalnum contracts in SDLContext."
uid: api.inno.native.sdl3.e8333efe665bf9e2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isalnum

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isalnum`

<a id="api-e1b42b1411a4a7a9"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isalnum(System.Int32) b433ed3e31b73318d0605f1d579ca06ad1c7b0b841c6f2b193eb447b6f7d50ba -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isalnum(int x)
```

Query if a character is alphabetic (a letter) or a number.
**WARNING**: Regardless of system locale, this will only treat ASCII values
for English 'a-z', 'A-Z', and '0-9' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15397).
