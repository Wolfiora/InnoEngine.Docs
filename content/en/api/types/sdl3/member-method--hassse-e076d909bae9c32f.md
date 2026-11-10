---
title: "SDL — Method: HasSse"
description: "Exact Method: HasSse contracts in SDL."
uid: api.inno.native.sdl3.e076d909bae9c32f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasSse

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse`

<a id="api-df03216cf71a86d5"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasSse 14c02d4042666861efabec49ff53e085ef14444df6e0715556bad54736e47124 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasSse()
```

Determine whether the CPU has SSE features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasSSE2

**See also:** SDL_HasSSE3

**See also:** SDL_HasSSE41

**See also:** SDL_HasSSE42

**Returns:** true if the CPU has SSE features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L4329).
