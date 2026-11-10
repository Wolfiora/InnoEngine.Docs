---
title: "SDLContext.RawApi — Method: HasMmx"
description: "Exact Method: HasMmx contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1758bc162489ce36
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: HasMmx

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `HasMmx`

<a id="api-16a0907bc245ee79"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.HasMmx d28759ca713c9cd4ca3ee17169105431fbf35c2c943f916679b9d7c334056eb9 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.HasMmx()
```

Determine whether the CPU has MMX features.
This always returns false on CPUs that aren't using Intel instruction sets.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the CPU has MMX features or false if not.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L52909).
