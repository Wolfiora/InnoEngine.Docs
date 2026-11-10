---
title: "SDLContext — Method: HasSse"
description: "Exact Method: HasSse contracts in SDLContext."
uid: api.inno.native.sdl3.d3508261eabf9b3e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasSse

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse`

<a id="api-e50cc1fc8e063ddd"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasSse 9dee74ec5bf7203a114794d0bf7f1a89a663bf7440d631ad0e95beab956b6c37 -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasSse()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16620).
