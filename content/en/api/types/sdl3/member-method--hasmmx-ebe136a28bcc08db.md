---
title: "SDLContext — Method: HasMmx"
description: "Exact Method: HasMmx contracts in SDLContext."
uid: api.inno.native.sdl3.ebe136a28bcc08db
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasMmx

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasMmx`

<a id="api-23af9b2bb3a6ea56"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasMmx f92d4b8116843564dd49e10e373b1b88530220d4c429a3a0436d4df6c72d3bda -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasMmx()
```

Determine whether the CPU has MMX features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has MMX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16634).
