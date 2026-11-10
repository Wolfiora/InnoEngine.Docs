---
title: "SDLContext — Method: GetSystemRam"
description: "Exact Method: GetSystemRam contracts in SDLContext."
uid: api.inno.native.sdl3.d1f8daf6e1cf008d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetSystemRam

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSystemRam`

<a id="api-c9ac96c7db9e6e1f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetSystemRam 358f20d872ff3206a74854b81c479c7ff0ecd576d164b18dc8865d8392c19974 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetSystemRam()
```

Get the amount of RAM configured in the system.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the amount of RAM configured in the system in MiB.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L16306).
