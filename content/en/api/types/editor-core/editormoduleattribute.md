---
title: "EditorModuleAttribute"
description: "Reference for EditorModuleAttribute in Inno.Editor.Core."
uid: api.inno.editor.core.94860657e3662e9a
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorModuleAttribute`

This reference describes `EditorModuleAttribute` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-640ef6c928fa2e02) | Method |
| [`id`](#api-366994a72c8309aa) | Property |
| [`order`](#api-2d2ceebcfc794b91) | Property |

## Type declaration

<a id="api-94860657e3662e9a"></a>
<!-- api: T:Inno.Editor.Core.EditorModuleAttribute 8a9287dcbd8a488c28b6710196b34ac85ae3f9401c68c9470283926a09a0e022 -->

```csharp
public sealed class Inno.Editor.Core.EditorModuleAttribute : System.Attribute
```

Registers an editor feature module with a stable identity for automatic discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModuleAttribute.cs#L9).

## `#ctor`

<a id="api-640ef6c928fa2e02"></a>
<!-- api: M:Inno.Editor.Core.EditorModuleAttribute.#ctor(System.String,System.Int32) ff52b7895ed6392d7fceded3a637b398c16d882f444a07e96d9a36607060a67d -->

```csharp
public Inno.Editor.Core.EditorModuleAttribute.EditorModuleAttribute(string id, int order = 0)
```

Creates a module registration with stable identity and deterministic lifecycle order.

**Parameter `id`:** The globally unique module identifier used for discovery diagnostics and optional persisted
module state.

**Parameter `order`:** The ascending order used to start and update the module.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModuleAttribute.cs#L24).

## `id`

<a id="api-366994a72c8309aa"></a>
<!-- api: P:Inno.Editor.Core.EditorModuleAttribute.id 09f8b6d5ee24e164eefec680a9ee50b1ca2dd687222224f1fd496285fd25644e -->

```csharp
public string Inno.Editor.Core.EditorModuleAttribute.id { get; }
```

Gets the stable module identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModuleAttribute.cs#L37).

## `order`

<a id="api-2d2ceebcfc794b91"></a>
<!-- api: P:Inno.Editor.Core.EditorModuleAttribute.order 3afebae9a23967db296004bd27d7dc6ae862bcca179dbc6f05035a3ab386a41b -->

```csharp
public int Inno.Editor.Core.EditorModuleAttribute.order { get; }
```

Gets the stable lifecycle order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModuleAttribute.cs#L42).
