---
title: "SDLContext — Method: Islower"
description: "Exact Method: Islower contracts in SDLContext."
uid: api.inno.native.sdl3.8ba328f2b4ce4964
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Islower

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Islower`

<a id="api-df53c739bdea949d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Islower(System.Int32) bdd87185f34f8abc85a82df5aac27fabf9f277a44bbf936706acb61c17fb862f -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Islower(int x)
```

Report if a character is lower case.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'a' through 'z' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14541).
