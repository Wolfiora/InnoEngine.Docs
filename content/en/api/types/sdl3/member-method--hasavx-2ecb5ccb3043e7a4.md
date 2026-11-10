---
title: "SDLContext — Method: HasAvx"
description: "Exact Method: HasAvx contracts in SDLContext."
uid: api.inno.native.sdl3.2ecb5ccb3043e7a4
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasAvx

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAvx`

<a id="api-e5201b5e061ae04b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasAvx c80f68b24ccec1037493f9b55b81ec6271890a96e24fc37ae306fd7dfd3e023c -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasAvx()
```

Determine whether the CPU has AVX features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasAVX2

**See also:** SDL_HasAVX512F

**Returns:** true if the CPU has AVX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13339).
