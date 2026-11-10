---
title: "SDL — Method: ClearError"
description: "Exact Method: ClearError contracts in SDL."
uid: api.inno.native.sdl3.27cd8ab4b7956581
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: ClearError

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClearError`

<a id="api-6ce642df242750eb"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.ClearError e665cee0a979f543a9a68e861415416dbf6a248d6513a034f8eac986bde81798 -->

```csharp
public static bool Inno.Native.Sdl3.SDL.ClearError()
```

Clear any previous error message for this thread.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetError

**See also:** SDL_SetError

**Returns:** true.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L365).
