---
title: "SDLContext — Method: HasSse2"
description: "Exact Method: HasSse2 contracts in SDLContext."
uid: api.inno.native.sdl3.5835ac4b34e3588d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: HasSse2

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse2`

<a id="api-0a6a99532e6bdd9f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.HasSse2 50b87f9bf5340db1787345eb992780bd813c5e6df2ea947bb22fa516c6b0b98b -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.HasSse2()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12822).
