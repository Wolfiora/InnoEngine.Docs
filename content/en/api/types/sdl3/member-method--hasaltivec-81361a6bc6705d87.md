---
title: "SDLContext.RawApi — Method: HasAltiVec"
description: "Exact Method: HasAltiVec contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.81361a6bc6705d87
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasAltiVec

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAltiVec`

<a id="api-4205a33a4e5c395b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasAltiVec a17bddbcb5d060ecbfa36b3ecf8e76219cf613a6f28ce27e953a5e479e5337a6 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasAltiVec()
```

Determine whether the CPU has AltiVec features.
This always returns false on CPUs that aren't using PowerPC instruction
sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has AltiVec features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52871).
