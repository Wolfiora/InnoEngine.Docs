---
title: "SDLContext.RawApi — Method: GetenvUnsafe"
description: "Exact Method: GetenvUnsafe contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.f259b80bdaab8252
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetenvUnsafe

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetenvUnsafe`

<a id="api-6cf50fb94ec4182a"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetenvUnsafe(System.SByte*) 93ea696bc38f76ae56cc8ce1ec9f19c037cc297a75ec785aa0018ab15145d099 -->

```csharp
public sbyte* Inno.Native.Sdl3.SDLContext.RawApi.GetenvUnsafe(sbyte* name)
```

Get the value of a variable in the environment.
This function bypasses SDL's cached copy of the environment and is not
thread-safe.
On some platforms, this may make case-insensitive matches, while other
platforms are case-sensitive. It is best to be precise with strings used
for queries through this interface. SDL_getenv is always case-sensitive,
however.

**Thread safety:** This function is not thread safe, consider using SDL_getenv()
instead.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_getenv

**Parameter `name`:** the name of the variable to get.

**Returns:** a pointer to the value of the variable or NULL if it can't be
found.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L31920).
