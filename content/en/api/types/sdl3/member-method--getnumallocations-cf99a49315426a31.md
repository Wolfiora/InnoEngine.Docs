---
title: "SDLContext — Method: GetNumAllocations"
description: "Exact Method: GetNumAllocations contracts in SDLContext."
uid: api.inno.native.sdl3.cf99a49315426a31
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetNumAllocations

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumAllocations`

<a id="api-e2379017f326c773"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetNumAllocations 055473e24b6207ed6069ee46ad064a3fa07abe79d4bcbab57993b9e00e9059b1 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetNumAllocations()
```

Get the number of outstanding (unfreed) allocations.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the number of allocations or -1 if allocation counting is
disabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12395).
