---
title: "SDLContext.RawApi — Method: HasAvx"
description: "Exact Method: HasAvx contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.40b4277f728eb88a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasAvx

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAvx`

<a id="api-b2f35298a03775ab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasAvx 696a6749f36ec51701a2d3c2954e0c834bf966815f78f7ef97b60269e844f46e -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasAvx()
```

Determine whether the CPU has AVX features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasAVX2

**See also:** SDL_HasAVX512F

**Returns:** true if the CPU has AVX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L30618).
