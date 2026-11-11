---
title: "ScriptingAttachableTypeAttribute"
description: "Reference for ScriptingAttachableTypeAttribute in Inno.Scripting.Api."
uid: api.inno.scripting.api.0d395e2cc6e06408
kind: api
owners:
  - Inno.Scripting.Api
apiSurface: source-clr
contracts:
  - project.inno-scripting-api
---
# `ScriptingAttachableTypeAttribute`

This reference describes `ScriptingAttachableTypeAttribute` in `Inno.Scripting.Api`. Read the [shared contract](../../../projects/inno-scripting-api.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6acd0337a55098a2) | Method |
| [`kind`](#api-6eed48de95272ec8) | Property |

## Type declaration

<a id="api-0d395e2cc6e06408"></a>
<!-- api: T:Inno.Scripting.Api.ScriptingAttachableTypeAttribute 44cb8ff97523e449e25f6636f08112e0b2c6eb6225632113eb023fc8914a64a0 -->

```csharp
public sealed class Inno.Scripting.Api.ScriptingAttachableTypeAttribute : System.Attribute
```

Marks a script API base type whose concrete script-derived types require stable source-owned
identity metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingAttachableTypeAttribute.cs#L10).

## `#ctor`

<a id="api-6acd0337a55098a2"></a>
<!-- api: M:Inno.Scripting.Api.ScriptingAttachableTypeAttribute.#ctor(System.String) 7f6178e15493d2867d3b8bbd757ab3251b072bd71009e67740a6e6e31c0cea0c -->

```csharp
public Inno.Scripting.Api.ScriptingAttachableTypeAttribute.ScriptingAttachableTypeAttribute(string kind)
```

Creates attachable script-type metadata for one extensible base class.

**Parameter `kind`:** The non-empty domain-defined kind written to script type manifests and diagnostics.

**Throws `System.ArgumentException`:** Thrown when `kind` is empty or contains only whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingAttachableTypeAttribute.cs#L21).

## `kind`

<a id="api-6eed48de95272ec8"></a>
<!-- api: P:Inno.Scripting.Api.ScriptingAttachableTypeAttribute.kind 9fb39b1c4d60673dcdf09d1cb9851b9d7e3355c64942e1bf1991fd87a3d417dd -->

```csharp
public string Inno.Scripting.Api.ScriptingAttachableTypeAttribute.kind { get; }
```

Gets the domain-defined attachable type kind recorded in script manifests.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingAttachableTypeAttribute.cs#L30).
