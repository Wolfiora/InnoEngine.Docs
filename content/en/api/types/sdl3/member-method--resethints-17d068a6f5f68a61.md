---
title: "SDLContext.RawApi — Method: ResetHints"
description: "Exact Method: ResetHints contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.17d068a6f5f68a61
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: ResetHints

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ResetHints`

<a id="api-cf276307f08388ab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.ResetHints 17380d9b6e64e80dd13caef78088aff91b91561938a9ca3a211792cc06b2c01f -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.ResetHints()
```

Reset all hints to the default values.
This will reset all hints to the value of the associated environment
variable, or NULL if the environment isn't set. Callbacks will be called
normally with this change.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_ResetHint


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L37002).
