---
title: "SDL — Method: HasAvx512F"
description: "Exact Method: HasAvx512F contracts in SDL."
uid: api.inno.native.sdl3.3945cb068c78f757
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasAvx512F

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAvx512F`

<a id="api-fd9bab722b9ad8dd"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasAvx512F 03da87036bcf223aae7b9a27f22cee5e9784f423e890eaca477c16067ebf27cf -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasAvx512F()
```

Determine whether the CPU has AVX-512F (foundation) features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasAVX

**See also:** SDL_HasAVX2

**Returns:** true if the CPU has AVX-512F features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L83).
