---
title: "SDLContext.RawApi — Method: GetNumAllocations"
description: "Exact Method: GetNumAllocations contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.8c82038ee9d03727
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetNumAllocations

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumAllocations`

<a id="api-50c76b3bedb3c7ca"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetNumAllocations 0e4a4f29e9c58a68462823221d482997470ff65edaf08709e689ffb70404f165 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetNumAllocations()
```

Get the number of outstanding (unfreed) allocations.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the number of allocations or -1 if allocation counting is
disabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L23044).
