---
title: "SDLContext.RawApi — Method: Iscntrl"
description: "Exact Method: Iscntrl contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6f16136e9f32c3cd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Iscntrl

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Iscntrl`

<a id="api-811a77814cbfabb5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Iscntrl(System.Int32) 3327290d672e283501a258ef882b3a02decfa8272f0343fd759b44b8d5b26cd4 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.Iscntrl(int x)
```

Report if a character is a control character.
**WARNING**: Regardless of system locale, this will only treat ASCII values
0 through 0x1F, and 0x7F, as true.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Parameter `x`:** character value to check.

**Returns:** non-zero if x falls within the character class, zero otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52134).
