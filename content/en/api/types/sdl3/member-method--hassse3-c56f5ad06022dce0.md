---
title: "SDL — Method: HasSse3"
description: "Exact Method: HasSse3 contracts in SDL."
uid: api.inno.native.sdl3.c56f5ad06022dce0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasSse3

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse3`

<a id="api-16c49f3a7285304d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasSse3 1d629f50b7f97292096137c2801f9a2407aac0f0d5b67fef3ebd1eb901325d53 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasSse3()
```

Determine whether the CPU has SSE3 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasSSE

**See also:** SDL_HasSSE2

**See also:** SDL_HasSSE41

**See also:** SDL_HasSSE42

**Returns:** true if the CPU has SSE3 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L704).
