---
title: "SDLContext — Method: IsTablet"
description: "Exact Method: IsTablet contracts in SDLContext."
uid: api.inno.native.sdl3.42bf8cbeb460ac37
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: IsTablet

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsTablet`

<a id="api-84692006e1517e81"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.IsTablet 31e038f6710decc850b5d820ee239b0c36748ba0dae3970a77e1b12113e7b77d -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.IsTablet()
```

Query if the current device is a tablet.
If SDL can't determine this, it will return false.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**Returns:** true if the device is a tablet, false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12311).
