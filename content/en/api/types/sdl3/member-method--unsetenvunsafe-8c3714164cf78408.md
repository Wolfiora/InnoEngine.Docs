---
title: "SDLContext.RawApi — Method: UnsetenvUnsafe"
description: "Exact Method: UnsetenvUnsafe contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8c3714164cf78408
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: UnsetenvUnsafe

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `UnsetenvUnsafe`

<a id="api-b1ce18af131e4d89"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.UnsetenvUnsafe(System.SByte*) 7af2d8caf79e15523120894d5a3ab3955a295fbac65168599b7ade786fd6bd34 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.UnsetenvUnsafe(sbyte* name)
```

Clear a variable from the environment.

**Thread safety:** This function is not thread safe, consider using
SDL_UnsetEnvironmentVariable() instead.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_UnsetEnvironmentVariable

**Parameter `name`:** the name of the variable to unset.

**Returns:** 0 on success, -1 on error.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41421).
