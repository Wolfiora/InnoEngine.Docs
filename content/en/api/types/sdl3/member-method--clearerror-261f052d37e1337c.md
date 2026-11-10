---
title: "SDLContext — Method: ClearError"
description: "Exact Method: ClearError contracts in SDLContext."
uid: api.inno.native.sdl3.261f052d37e1337c
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: ClearError

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClearError`

<a id="api-6ae97d71c15b0ef0"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.ClearError d40b5979865e5b30f1e6f2d9be6da23e3459b7ccf8da4a1f8aed373dc8cf3e9c -->

```csharp
public bool Inno.Native.Sdl3.SDLContext.ClearError()
```

Clear any previous error message for this thread.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetError

**See also:** SDL_SetError

**Returns:** true.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L11773).
