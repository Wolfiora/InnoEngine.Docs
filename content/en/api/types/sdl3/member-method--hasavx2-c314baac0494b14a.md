---
title: "SDLContext — Method: HasAvx2"
description: "Exact Method: HasAvx2 contracts in SDLContext."
uid: api.inno.native.sdl3.c314baac0494b14a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasAvx2

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAvx2`

<a id="api-8572a2bbb0a56f3d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasAvx2 6d0da5efe09a151a362c790a3a14e201a2607a0526df6ab941e1e2c809bd44d2 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasAvx2()
```

Determine whether the CPU has AVX2 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasAVX

**See also:** SDL_HasAVX512F

**Returns:** true if the CPU has AVX2 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15882).
