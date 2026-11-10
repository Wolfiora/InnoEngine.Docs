---
title: "SDLContext — Method: HasArmsimd"
description: "Exact Method: HasArmsimd contracts in SDLContext."
uid: api.inno.native.sdl3.7808fc9872849246
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasArmsimd

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasArmsimd`

<a id="api-543f2a7d178e83af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasArmsimd d69753e2c96b7317f76e1f98601e158374e79df8758b608ed69b22281975f750 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasArmsimd()
```

Determine whether the CPU has ARM SIMD (ARMv6) features.
This is different from ARM NEON, which is a different instruction set.
This always returns false on CPUs that aren't using ARM instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasNEON

**Returns:** true if the CPU has ARM SIMD features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16159).
