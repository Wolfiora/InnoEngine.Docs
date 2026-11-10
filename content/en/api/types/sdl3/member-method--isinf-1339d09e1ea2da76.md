---
title: "SDLContext — Method: Isinf"
description: "Exact Method: Isinf contracts in SDLContext."
uid: api.inno.native.sdl3.1339d09e1ea2da76
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isinf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isinf`

<a id="api-cf3ee0e9d4e7ce44"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isinf(System.Double) 1ac482308f291f77cfa0fb4686378652109be99457e39a7f0039576a53748ef0 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isinf(double x)
```

Return whether the value is infinity.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isinff

**Parameter `x`:** double-precision floating point value.

**Returns:** non-zero if the value is infinity, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15202).
