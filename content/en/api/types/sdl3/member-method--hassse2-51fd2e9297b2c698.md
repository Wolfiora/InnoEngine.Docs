---
title: "SDL — Method: HasSse2"
description: "Exact Method: HasSse2 contracts in SDL."
uid: api.inno.native.sdl3.51fd2e9297b2c698
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: HasSse2

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse2`

<a id="api-c4bc0cf478fe0f40"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.HasSse2 fef283b7a1869709a795c4c23d849a9a80d15080f705ab64542502ea68c47d70 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.HasSse2()
```

Determine whether the CPU has SSE2 features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_HasSSE

**See also:** SDL_HasSSE3

**See also:** SDL_HasSSE41

**See also:** SDL_HasSSE42

**Returns:** true if the CPU has SSE2 features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1205).
