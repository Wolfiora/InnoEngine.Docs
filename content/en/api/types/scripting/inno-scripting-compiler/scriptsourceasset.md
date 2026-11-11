---
title: "ScriptSourceAsset"
description: "Reference for ScriptSourceAsset in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.d7e928e85abd6845
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptSourceAsset`

This reference describes `ScriptSourceAsset` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-47a645edb7818274) | Method |
| [`declaredTypeNames`](#api-71d31112bbd8b7b1) | Property |
| [`parseDiagnostics`](#api-05a9644d8eb65756) | Property |
| [`scope`](#api-510620ef9ea4afee) | Property |

## Type declaration

<a id="api-d7e928e85abd6845"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptSourceAsset 6d67dd205add0968316a6268a79a3e5f2832f9c4d293123bc65c416acb412ac1 -->

```csharp
public sealed class Inno.Scripting.Compiler.ScriptSourceAsset : Inno.Assets.AssetObject
```

Describes an imported C# source snapshot and its parse diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptSourceAsset.cs#L11).

## `#ctor`

<a id="api-47a645edb7818274"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptSourceAsset.#ctor 27697db22ec259e3ce564f7fbbd7c89fd9211f8377ce1c7d7ef723db10ccf61e -->

```csharp
public Inno.Scripting.Compiler.ScriptSourceAsset.ScriptSourceAsset()
```

Creates an empty script source asset for deserialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptSourceAsset.cs#L34).

## `declaredTypeNames`

<a id="api-71d31112bbd8b7b1"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptSourceAsset.declaredTypeNames dd89427f64c0430e169148cf0abc5ebdb35daae67e8742c77f99cf50a8f1539e -->

```csharp
public string[] Inno.Scripting.Compiler.ScriptSourceAsset.declaredTypeNames { get; private set; }
```

Gets syntax-level type names declared by the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptSourceAsset.cs#L23).

## `parseDiagnostics`

<a id="api-05a9644d8eb65756"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptSourceAsset.parseDiagnostics 7e440e9ed3791aabe6c3d77bddb4c45f86102d61c4f91412ede27c5e760add7d -->

```csharp
public string[] Inno.Scripting.Compiler.ScriptSourceAsset.parseDiagnostics { get; private set; }
```

Gets parse diagnostics associated with the source snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptSourceAsset.cs#L29).

## `scope`

<a id="api-510620ef9ea4afee"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptSourceAsset.scope a0b7c44e2488943cc0070047eafd84eca4e6867411f0ef8f190d4efdffc55e93 -->

```csharp
public Inno.Scripting.Compiler.ScriptAssemblyScope Inno.Scripting.Compiler.ScriptSourceAsset.scope { get; private set; }
```

Gets the default assembly scope inferred for the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptSourceAsset.cs#L17).
