---
title: "EditorActionAttribute"
description: "Reference for EditorActionAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.e76704434241f4a2
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorActionAttribute`

This reference describes `EditorActionAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-471c32a2bb73c024) | Method |
| [`#ctor`](#api-69aef0cada9c7add) | Method |
| [`action`](#api-d4ba7711ac76e96c) | Property |
| [`area`](#api-ada489976e591251) | Property |
| [`priority`](#api-8708e0cc09035069) | Property |

## Type declaration

<a id="api-e76704434241f4a2"></a>
<!-- api: T:InnoEditor.Interactions.EditorActionAttribute 18957184e45635a72a43fcbf12f8a2b3f98455a8a2295d1127f058e8d5ca8c69 -->

```csharp
public sealed class InnoEditor.Interactions.EditorActionAttribute : System.Attribute
```

Registers an editor action for automatic discovery and dispatch.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L9).

## `#ctor`

<a id="api-471c32a2bb73c024"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionAttribute.#ctor(System.String,System.Int32) d062b39abed2da688a03dfed0cf3646c3a689064f8992422bba1bd42606cd245 -->

```csharp
public InnoEditor.Interactions.EditorActionAttribute.EditorActionAttribute(string action, int priority = 0)
```

Creates an action registration available from every area.

**Parameter `action`:** The stable semantic action name.

**Parameter `priority`:** The tie-breaking priority used after target specificity.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L23).

## `#ctor`

<a id="api-69aef0cada9c7add"></a>
<!-- api: M:InnoEditor.Interactions.EditorActionAttribute.#ctor(System.String,System.String,System.Int32) 73cdc3b2e0ac276ab12b6d18bb204b47ba8c010ceb8bcfed0ae51ac2dbf806c8 -->

```csharp
public InnoEditor.Interactions.EditorActionAttribute.EditorActionAttribute(string action, string area, int priority = 0)
```

Creates an action registration restricted to one exact area.

**Parameter `action`:** The stable semantic action name.

**Parameter `area`:** The exact area, or an empty string for every area.

**Parameter `priority`:** The tie-breaking priority.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L46).

## `action`

<a id="api-d4ba7711ac76e96c"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionAttribute.action d96277b94c2a1a003dd1b9bc0fd1a9bbcd093aff6e22e573f5779610852165b1 -->

```csharp
public string InnoEditor.Interactions.EditorActionAttribute.action { get; }
```

Gets the stable action name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L61).

## `area`

<a id="api-ada489976e591251"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionAttribute.area c886608a9edaa003f9ddb4c38a862fd83e8f1eedbb2c2c44d98da6cedc61a251 -->

```csharp
public string InnoEditor.Interactions.EditorActionAttribute.area { get; }
```

Gets the optional exact interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L66).

## `priority`

<a id="api-8708e0cc09035069"></a>
<!-- api: P:InnoEditor.Interactions.EditorActionAttribute.priority a8b99aec874525e4bf1a1e8a81ada56283342b7caf47a4e227cb28db1065f998 -->

```csharp
public int InnoEditor.Interactions.EditorActionAttribute.priority { get; }
```

Gets the tie-breaking priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L71).
