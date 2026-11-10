---
title: "SDLContext.RawApi — Method: GetTicksNs"
description: "Exact Method: GetTicksNs contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e3b3a45680b05a4c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTicksNs

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTicksNs`

<a id="api-066336400271456d"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTicksNs 7316f863f7e46ff930670cf3f25d0afffef77d1fcc4a7bc69dfd3d7306ddd603 -->

```csharp
public ulong Inno.Native.Sdl3.SDLContext.RawApi.GetTicksNs()
```

Get the number of nanoseconds since SDL library initialization.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** an unsigned 64-bit value representing the number of nanoseconds
since the SDL library initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L39374).
