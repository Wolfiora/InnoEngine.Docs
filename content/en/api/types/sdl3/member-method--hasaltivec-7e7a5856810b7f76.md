---
title: "SDLContext — Method: HasAltiVec"
description: "Exact Method: HasAltiVec contracts in SDLContext."
uid: api.inno.native.sdl3.7e7a5856810b7f76
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasAltiVec

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasAltiVec`

<a id="api-8a2a53117ef1a63b"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasAltiVec ebebb66cae828de438d94aa30595ff4299074d474bee1e3db9fd19051e440e89 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasAltiVec()
```

Determine whether the CPU has AltiVec features.
This always returns false on CPUs that aren't using PowerPC instruction
sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has AltiVec features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16602).
