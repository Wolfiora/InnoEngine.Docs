---
title: "SDL — Method: HasSse42"
description: "Exact Method: HasSse42 contracts in SDL."
uid: api.inno.native.sdl3.234b95c6fd21d77a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasSse42

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse42`

<a id="api-82940d665fb3273c"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasSse42 1d6b14fca3fae3bb79469c21e296b2f13cb691d9f5dc3ed75086cc71d69fae5c -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasSse42()
```

Determine whether the CPU has SSE4.2 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasSSE

**See also:** SDL_HasSSE2

**See also:** SDL_HasSSE3

**See also:** SDL_HasSSE41

**Returns:** true if the CPU has SSE4.2 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2791).
