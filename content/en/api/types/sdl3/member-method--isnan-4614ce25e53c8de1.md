---
title: "SDLContext — Method: Isnan"
description: "Exact Method: Isnan contracts in SDLContext."
uid: api.inno.native.sdl3.4614ce25e53c8de1
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Isnan

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Isnan`

<a id="api-d587911594d8d3d7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Isnan(System.Double) 0e36cf3f656a588bbdabaa4720e4cc4994c3e1b0d738679c70b1381799029851 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.Isnan(double x)
```

Return whether the value is NaN.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_isnanf

**Parameter `x`:** double-precision floating point value.

**Returns:** non-zero if the value is NaN, 0 otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15653).
