---
title: "SDL — Method: HasSse41"
description: "Exact Method: HasSse41 contracts in SDL."
uid: api.inno.native.sdl3.bc9825f209c12dfc
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasSse41

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse41`

<a id="api-25ec00ac25af5209"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasSse41 2dde328df46658bc7de5c56e77aadf3b428e4b38b562587f6842f2869404fb16 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasSse41()
```

Determine whether the CPU has SSE4.1 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasSSE

**See also:** SDL_HasSSE2

**See also:** SDL_HasSSE3

**See also:** SDL_HasSSE42

**Returns:** true if the CPU has SSE4.1 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3579).
