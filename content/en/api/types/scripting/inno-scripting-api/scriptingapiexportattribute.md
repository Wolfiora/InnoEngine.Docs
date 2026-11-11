---
title: "ScriptingApiExportAttribute"
description: "Reference for ScriptingApiExportAttribute in Inno.Scripting.Api."
uid: api.inno.scripting.api.c08321ce7d4a65d3
kind: api
owners:
  - Inno.Scripting.Api
apiSurface: source-clr
contracts:
  - project.inno-scripting-api
---
# `ScriptingApiExportAttribute`

This reference describes `ScriptingApiExportAttribute` in `Inno.Scripting.Api`. Read the [shared contract](../../../projects/inno-scripting-api.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8e7c1e256cb3934a) | Method |
| [`#ctor`](#api-e26286d2f836ed54) | Method |
| [`name`](#api-c990b5e57d0e88c2) | Property |
| [`scope`](#api-6dccab98face4cee) | Property |
| [`type`](#api-e7528dffcbaf945c) | Property |

## Type declaration

<a id="api-c08321ce7d4a65d3"></a>
<!-- api: T:Inno.Scripting.Api.ScriptingApiExportAttribute 67b8b7c996941cb1c41cb2fa4366aabba8a55b5800269963ef093201681ed493 -->

```csharp
public sealed class Inno.Scripting.Api.ScriptingApiExportAttribute : System.Attribute
```

Exports one public runtime type to a script compilation profile.

**Constraints:** The declaration assembly does not need to own the exported type. Feature projects may expose
selected types from lower-level dependencies while the generated runtime reference preserves
the exported type's original assembly identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiExportAttribute.cs#L14).

## `#ctor`

<a id="api-8e7c1e256cb3934a"></a>
<!-- api: M:Inno.Scripting.Api.ScriptingApiExportAttribute.#ctor(System.Type,Inno.Scripting.Api.ScriptingApiScope) 333aaaa3e00a9cce47bb618e9d6f6e8c6f3fafbb15d1ce2a7c7ccc428f115370 -->

```csharp
public Inno.Scripting.Api.ScriptingApiExportAttribute.ScriptingApiExportAttribute(System.Type type, Inno.Scripting.Api.ScriptingApiScope scope)
```

Creates an explicit script API export.

**Parameter `type`:** The runtime type exposed to scripts.

**Parameter `scope`:** The script profile that receives the type.

**Throws `System.ArgumentNullException`:** Thrown when `type` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiExportAttribute.cs#L28).

## `#ctor`

<a id="api-e26286d2f836ed54"></a>
<!-- api: M:Inno.Scripting.Api.ScriptingApiExportAttribute.#ctor(System.Type,System.String,Inno.Scripting.Api.ScriptingApiScope) 5fc575217e26ebe91f719211efc2004982fce11f78d950138c3ffd2e5c908fe5 -->

```csharp
public Inno.Scripting.Api.ScriptingApiExportAttribute.ScriptingApiExportAttribute(System.Type type, string name, Inno.Scripting.Api.ScriptingApiScope scope)
```

Creates an explicit script API export with a script-facing type name.

**Parameter `type`:** The runtime type exposed to scripts.

**Parameter `name`:** The type name presented by the script facade.

**Parameter `scope`:** The script profile that receives the type.

**Throws `System.ArgumentNullException`:** Thrown when `type` is `null`.

**Throws `System.ArgumentException`:** Thrown when `name` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiExportAttribute.cs#L54).

## `name`

<a id="api-c990b5e57d0e88c2"></a>
<!-- api: P:Inno.Scripting.Api.ScriptingApiExportAttribute.name 9a7d0328e352c96a2e7dc0b116cf9e78c359acaa2d4285144c30540040dbbc39 -->

```csharp
public string Inno.Scripting.Api.ScriptingApiExportAttribute.name { get; }
```

Gets the type name presented by the script facade.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiExportAttribute.cs#L74).

## `scope`

<a id="api-6dccab98face4cee"></a>
<!-- api: P:Inno.Scripting.Api.ScriptingApiExportAttribute.scope 501fb97ecd240c69c459c9dca47e99b5a65a6444dac64a97faa937205e33c570 -->

```csharp
public Inno.Scripting.Api.ScriptingApiScope Inno.Scripting.Api.ScriptingApiExportAttribute.scope { get; }
```

Gets the script profile that receives the type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiExportAttribute.cs#L79).

## `type`

<a id="api-e7528dffcbaf945c"></a>
<!-- api: P:Inno.Scripting.Api.ScriptingApiExportAttribute.type f4d99e53abbe8749a900685b9130c6de6f17d6670e9b5a95cd0b78c629c363a6 -->

```csharp
public System.Type Inno.Scripting.Api.ScriptingApiExportAttribute.type { get; }
```

Gets the runtime type exposed to scripts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiExportAttribute.cs#L69).
