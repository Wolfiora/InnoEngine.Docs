---
title: "SDLContext.RawApi — Method: HasSse"
description: "Exact Method: HasSse contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6c7534350b3ebff5
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasSse

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasSse`

<a id="api-9f193fe790b11434"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasSse 40ac345654e047aeabd0f0f23311a94e889e38a57971b889019575236294624a -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasSse()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52892).
