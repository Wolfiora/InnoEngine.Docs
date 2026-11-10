---
title: "SDLContext — Method: Isspace"
description: "Exact Method: Isspace contracts in SDLContext."
uid: api.inno.native.sdl3.23be81ce6112029b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isspace

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isspace`

<a id="api-5954028953b5ae8a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isspace(System.Int32) 0875a4b3f87183303dd6b32eab4f8b0f77823438cc3545fd422ce163792b4fbc -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isspace(int x)
```

Report if a character is whitespace.
**WARNING**: Regardless of system locale, this will only treat the
following ASCII values as true:
- space (0x20)
- tab (0x09)
- newline (0x0A)
- vertical tab (0x0B)
- form feed (0x0C)
- return (0x0D)

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15261).
