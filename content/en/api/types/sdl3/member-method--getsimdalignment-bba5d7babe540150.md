---
title: "SDLContext.RawApi — Method: GetSimdAlignment"
description: "Exact Method: GetSimdAlignment contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.bba5d7babe540150
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSimdAlignment

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSimdAlignment`

<a id="api-61332a4438b46994"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSimdAlignment 286a59bdd2c53113d4a4df1046a0aa72877d1c827cb2b0e42bb5d674845649c9 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.GetSimdAlignment()
```

Report the alignment this system needs for SIMD allocations.
This will return the minimum number of bytes to which a pointer must be
aligned to be compatible with SIMD instructions on the current machine. For
example, if the machine supports SSE only, it will return 16, but if it
supports AVX-512F, it'll return 64 (etc). This only reports values for
instruction sets SDL knows about, so if your SDL build doesn't have
SDL_HasAVX512F(), then it might return 16 for the SSE support it sees and
not 64 for the AVX-512 instructions that exist but SDL doesn't know about.
Plan accordingly.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_aligned_alloc

**See also:** SDL_aligned_free

**Returns:** the alignment in bytes needed for available, known SIMD
instructions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L50380).
