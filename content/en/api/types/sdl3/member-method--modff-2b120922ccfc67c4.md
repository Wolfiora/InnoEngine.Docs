---
title: "SDLContext.RawApi — Method: Modff"
description: "Exact Method: Modff contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.2b120922ccfc67c4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Modff

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Modff`

<a id="api-f3824355a027ab2b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Modff(System.Single,System.Single*) d31dd76676fdb857e12ebd96e0d0662d911db98aa566e19dc5b79ae3a801887c -->

```csharp
public float Inno.Native.Sdl3.SDLContext.RawApi.Modff(float x, float* y)
```

Split `x` into integer and fractional parts
This function operates on single-precision floating point values, use
SDL_modf for double-precision floats.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_modf

**See also:** SDL_truncf

**See also:** SDL_fmodf

**Parameter `x`:** floating point value.

**Parameter `y`:** output pointer to store the integer part of `x`.

**Returns:** the fractional part of `x`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L46411).
