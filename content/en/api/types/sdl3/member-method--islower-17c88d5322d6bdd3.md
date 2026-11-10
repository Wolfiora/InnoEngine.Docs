---
title: "SDLContext.RawApi — Method: Islower"
description: "Exact Method: Islower contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.17c88d5322d6bdd3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Islower

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Islower`

<a id="api-807a964110eae502"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Islower(System.Int32) c3f7d772cdaa3581b314ccf79f846850298bc2f7bcc598c85781f08ed318c21a -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Islower(int x)
```

Report if a character is lower case.
**WARNING**: Regardless of system locale, this will only treat ASCII values
'a' through 'z' as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37539).
