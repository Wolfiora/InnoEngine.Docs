---
title: "SDLContext.RawApi — Method: GetSystemRam"
description: "Exact Method: GetSystemRam contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.14adb13c99291ed6
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetSystemRam

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetSystemRam`

<a id="api-1205459a07ac9361"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetSystemRam 688ef6047432d381d565ecfe834cac2ba45730046475284908acab9e5bbf6853 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetSystemRam()
```

Get the amount of RAM configured in the system.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** the amount of RAM configured in the system in MiB.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L51197).
