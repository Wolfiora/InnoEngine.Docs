---
title: "SDLContext — Method: HasNeon"
description: "Exact Method: HasNeon contracts in SDLContext."
uid: api.inno.native.sdl3.8b6b2539279b4abe
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasNeon

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasNeon`

<a id="api-281b9f140b677d1a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasNeon 5eee1707f785767e5d9b3377dda850466e2d590fdd2dee86f295c2f5a967d8ef -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasNeon()
```

Determine whether the CPU has NEON (ARM SIMD) features.
This always returns false on CPUs that aren't using ARM instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has ARM NEON features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12114).
