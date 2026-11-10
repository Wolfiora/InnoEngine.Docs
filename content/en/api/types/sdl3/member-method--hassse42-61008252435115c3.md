---
title: "SDLContext — Method: HasSse42"
description: "Exact Method: HasSse42 contracts in SDLContext."
uid: api.inno.native.sdl3.61008252435115c3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasSse42

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse42`

<a id="api-9cbc72dccd282871"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasSse42 ab50824af4495b7b6e4ba974b924a18c624279485ac7a8875d556d68dbe6300a -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasSse42()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14735).
