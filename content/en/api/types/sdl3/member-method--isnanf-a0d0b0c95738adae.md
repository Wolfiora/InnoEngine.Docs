---
title: "SDLContext — Method: Isnanf"
description: "Exact Method: Isnanf contracts in SDLContext."
uid: api.inno.native.sdl3.a0d0b0c95738adae
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isnanf

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isnanf`

<a id="api-e661c8fd2637e1d4"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isnanf(System.Single) c3d3b2bc18a6de0198f65fb57ccd6d31e05d5735fe036e250e03b8aaa63d1e3b -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isnanf(float x)
```

Return whether the value is NaN.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isnan

**Parameter `x`:** floating point value.

**Returns:** non-zero if the value is NaN, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13713).
