---
title: "ScriptingApiIgnoreAttribute"
description: "Reference for ScriptingApiIgnoreAttribute in Inno.Scripting.Api."
uid: api.inno.scripting.api.6f64bf8a64a6282e
kind: api
owners:
  - Inno.Scripting.Api
apiSurface: source-clr
contracts:
  - project.inno-scripting-api
---
# `ScriptingApiIgnoreAttribute`

This reference describes `ScriptingApiIgnoreAttribute` in `Inno.Scripting.Api`. Read the [shared contract](../../../projects/inno-scripting-api.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3ee7f0324c93025e) | Method |

## Type declaration

<a id="api-6f64bf8a64a6282e"></a>
<!-- api: T:Inno.Scripting.Api.ScriptingApiIgnoreAttribute 76402879ea76ad699104685feb38265ab44ec80e91272cc503ad79c32ac9d3df -->

```csharp
public sealed class Inno.Scripting.Api.ScriptingApiIgnoreAttribute : System.Attribute
```

Explicitly excludes one otherwise visible member from generated scripting reference assemblies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiIgnoreAttribute.cs#L16).

## `#ctor`

<a id="api-3ee7f0324c93025e"></a>
<!-- api: M:Inno.Scripting.Api.ScriptingApiIgnoreAttribute.#ctor ba879d92c40177bd4827930d9e6800881acac89356fd5f2a1e9bf4164498152e -->

```csharp
public Inno.Scripting.Api.ScriptingApiIgnoreAttribute.ScriptingApiIgnoreAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiIgnoreAttribute.cs#L16).
