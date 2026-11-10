---
title: "SDLContext — Method: HasSse41"
description: "Exact Method: HasSse41 contracts in SDLContext."
uid: api.inno.native.sdl3.612e3eaa1289a22e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasSse41

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse41`

<a id="api-bdebc59fda6b11ba"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasSse41 6de2ca5e467e4c57ac2aa90f1e955d4af0a3c34c453c0d9f559946c6c4ec6f99 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasSse41()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15703).
