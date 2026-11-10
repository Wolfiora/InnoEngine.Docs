---
title: "SDLContext.RawApi — Method: SetLogPriorityPrefix"
description: "Exact Method: SetLogPriorityPrefix contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ccc47f931248007e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetLogPriorityPrefix

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetLogPriorityPrefix`

<a id="api-705e0f510ed26131"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetLogPriorityPrefix(Inno.Native.Sdl3.SDLLogPriority,System.SByte*) c3884a5f76dfe97490dcd6e13837ceb531a19fdfd20ad157d0e9cf437ddf746b -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetLogPriorityPrefix(Inno.Native.Sdl3.SDLLogPriority priority, sbyte* prefix)
```

Set the text prepended to log messages of a given priority.
By default SDL_LOG_PRIORITY_INFO and below have no prefix, and
SDL_LOG_PRIORITY_WARN and higher have a prefix showing their priority, e.g.
"WARNING: ".
This function makes a copy of its string argument, **prefix**, so it is not
necessary to keep the value of **prefix** alive after the call returns.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetLogPriorities

**See also:** SDL_SetLogPriority

**Parameter `priority`:** the SDL_LogPriority to modify.

**Parameter `prefix`:** the prefix to use for that log priority, or NULL to use no
prefix.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22870).
