---
title: "SDL — Method: GetVersion"
description: "Exact Method: GetVersion contracts in SDL."
uid: api.inno.native.sdl3.37dcf945a2792451
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetVersion

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetVersion`

<a id="api-438c97113b89a00d"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetVersion 6add6bc8f968004e69a53ca49f0ebff53582928194124dab47a04c1ed912bfc7 -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetVersion()
```

Get the version of SDL that is linked against your program.
If you are linking to SDL dynamically, then it is possible that the current
version will be different than the version you compiled against. This
function returns the current version, while SDL_VERSION is the version you
compiled with.
This function may be called safely at any time, even before SDL_Init().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRevision

**Returns:** the version of the linked library.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L2512).
