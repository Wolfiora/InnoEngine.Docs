---
title: "SDLContext — Method: HasAvx512F"
description: "Exact Method: HasAvx512F contracts in SDLContext."
uid: api.inno.native.sdl3.f561e39ca0de5daa
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasAvx512F

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAvx512F`

<a id="api-5ca2d8e590e33db5"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasAvx512F b2fad0c11c388b05996e5de5248eda818f5ae57749cfdd0555cba9cbb04d6290 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasAvx512F()
```

Determine whether the CPU has AVX-512F (foundation) features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasAVX

**See also:** SDL_HasAVX2

**Returns:** true if the CPU has AVX-512F features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11430).
