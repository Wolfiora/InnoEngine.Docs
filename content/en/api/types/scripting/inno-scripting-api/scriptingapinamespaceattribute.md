---
title: "ScriptingApiNamespaceAttribute"
description: "Reference for ScriptingApiNamespaceAttribute in Inno.Scripting.Api."
uid: api.inno.scripting.api.ce6d3b3545876a82
kind: api
owners:
  - Inno.Scripting.Api
apiSurface: source-clr
contracts:
  - project.inno-scripting-api
---
# `ScriptingApiNamespaceAttribute`

This reference describes `ScriptingApiNamespaceAttribute` in `Inno.Scripting.Api`. Read the [shared contract](../../../projects/inno-scripting-api.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d81ed8845797d251) | Method |
| [`implementationNamespace`](#api-17638db6873e8196) | Property |
| [`name`](#api-10a6fd943c3a0c9b) | Property |
| [`scope`](#api-f2f2f2407968e949) | Property |

## Type declaration

<a id="api-ce6d3b3545876a82"></a>
<!-- api: T:Inno.Scripting.Api.ScriptingApiNamespaceAttribute c3800aab3475c6f86716fca498a3064e13ccca1715f837d8414aaf9048e48bd5 -->

```csharp
public sealed class Inno.Scripting.Api.ScriptingApiNamespaceAttribute : System.Attribute
```

Maps a stable script-facing API namespace to one CLR implementation namespace.

**Constraints:** Multiple implementation namespaces can map to the same script API namespace. This keeps
script organization stable without introducing wrapper types with different runtime identities.
A feature assembly may declare a mapping for a dependency namespace when that feature owns the
decision to expose selected dependency types.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiNamespaceAttribute.cs#L15).

## `#ctor`

<a id="api-d81ed8845797d251"></a>
<!-- api: M:Inno.Scripting.Api.ScriptingApiNamespaceAttribute.#ctor(System.String,System.String,Inno.Scripting.Api.ScriptingApiScope) 794727996a908719c048d4f1c9e64f7aca5ba0b3880cd25ed132920ac6ba3c98 -->

```csharp
public Inno.Scripting.Api.ScriptingApiNamespaceAttribute.ScriptingApiNamespaceAttribute(string name, string implementationNamespace, Inno.Scripting.Api.ScriptingApiScope scope)
```

Creates a script API namespace mapping.

**Parameter `name`:** The stable script API namespace, such as `InnoEngine.Scene`.

**Parameter `implementationNamespace`:** The CLR namespace containing exported runtime types.

**Parameter `scope`:** The script profile that receives the mapping.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiNamespaceAttribute.cs#L29).

## `implementationNamespace`

<a id="api-17638db6873e8196"></a>
<!-- api: P:Inno.Scripting.Api.ScriptingApiNamespaceAttribute.implementationNamespace a2ee5839d4274447578801bf1dba063dd1d55c550f4443de7183624ca1b2a423 -->

```csharp
public string Inno.Scripting.Api.ScriptingApiNamespaceAttribute.implementationNamespace { get; }
```

Gets the CLR namespace that implements the script API namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiNamespaceAttribute.cs#L51).

## `name`

<a id="api-10a6fd943c3a0c9b"></a>
<!-- api: P:Inno.Scripting.Api.ScriptingApiNamespaceAttribute.name 233de5c09a60efba79ab765ef5db22e8fd5b19f5c14f251eaf90023f33778e01 -->

```csharp
public string Inno.Scripting.Api.ScriptingApiNamespaceAttribute.name { get; }
```

Gets the stable script API namespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiNamespaceAttribute.cs#L46).

## `scope`

<a id="api-f2f2f2407968e949"></a>
<!-- api: P:Inno.Scripting.Api.ScriptingApiNamespaceAttribute.scope d99cd31a4290380cdd019a2eac63f603412435f488988852a1ea96753f158332 -->

```csharp
public Inno.Scripting.Api.ScriptingApiScope Inno.Scripting.Api.ScriptingApiNamespaceAttribute.scope { get; }
```

Gets the script profile that receives the mapping.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/foundation/scripting/Inno.Scripting.Api/ScriptingApiNamespaceAttribute.cs#L56).
