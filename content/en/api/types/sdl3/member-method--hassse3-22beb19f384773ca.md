---
title: "SDLContext — Method: HasSse3"
description: "Exact Method: HasSse3 contracts in SDLContext."
uid: api.inno.native.sdl3.22beb19f384773ca
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasSse3

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse3`

<a id="api-599d26417f953167"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasSse3 087f969e891561c6305b5da8f032c36e24f7d7ca4140fd3e45d7be0505ea10e4 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasSse3()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12193).
