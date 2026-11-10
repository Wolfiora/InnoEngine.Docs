---
title: "SDL — Method: HasAvx"
description: "Exact Method: HasAvx contracts in SDL."
uid: api.inno.native.sdl3.9f71af78982938da
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasAvx

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAvx`

<a id="api-bd80b151648ece10"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasAvx d0636f40695dcf4a85e3432d185411fc71d2db847d84c30b03a0ea2aa00c041f -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasAvx()
```

Determine whether the CPU has AVX features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasAVX2

**See also:** SDL_HasAVX512F

**Returns:** true if the CPU has AVX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1642).
