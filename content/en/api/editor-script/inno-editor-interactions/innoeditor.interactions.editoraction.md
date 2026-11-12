---
title: "EditorAction"
description: "Reference for EditorAction in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.d6c3e70e7c827552
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorAction`

This reference describes `EditorAction` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5fdc490e15fcefee) | Method |
| [`Activate`](#api-49ba0df852be2b39) | Method |
| [`Cancel`](#api-c1f11067bbaa274a) | Method |
| [`Complete`](#api-e19fe3c67f444b3d) | Method |
| [`Dispose`](#api-b36f42780f241549) | Method |
| [`Execute`](#api-42cb9d53dc62b80c) | Method |
| [`OnCancelled`](#api-35ac2e0277e47986) | Method |
| [`OnCompleted`](#api-a1c428fb2a2a607e) | Method |
| [`OnPresentationLost`](#api-1b57be3ebf2b1b36) | Method |
| [`Present`](#api-6ad3529e3c677476) | Method |
| [`Query`](#api-7fb71ff15443b710) | Method |
| [`activeEditorContext`](#api-33e875edea2c768f) | Property |
| [`activeTarget`](#api-12cb1b2887eeccc0) | Property |
| [`isActive`](#api-4ee4fb7f2cac1f4b) | Property |
| [`targetType`](#api-a010cdcac6aa42ce) | Property |

## Type declaration

<a id="api-d6c3e70e7c827552"></a>
<!-- api: T:InnoEditor.Interactions.EditorAction 366eb461cd19133b125524f9dad523d916e97afe56bdd9d5c9dec42999d8bec8 -->

```csharp
public abstract class InnoEditor.Interactions.EditorAction : System.IDisposable
```

Defines one automatically discovered editor operation and owns its complete multi-frame lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L8).

## `#ctor`

<a id="api-5fdc490e15fcefee"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.#ctor 5dd2628680690c8bb22a5a14965f0bd54ac526772cbaa1debb96f513fa511ebf -->

```csharp
protected InnoEditor.Interactions.EditorAction.EditorAction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L8).

## `Activate`

<a id="api-49ba0df852be2b39"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.Activate(InnoEditor.Interactions.EditorActionContext) 40e5518b77ea43c29e30d9b06ad632e55646a09b0150cb3c29b07b9fe18beac0 -->

```csharp
protected void InnoEditor.Interactions.EditorAction.Activate(InnoEditor.Interactions.EditorActionContext context)
```

Activates this action for a target and cancels any operation it previously owned.

**Parameter `context`:** The contextual request that starts the operation.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L86).

## `Cancel`

<a id="api-c1f11067bbaa274a"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.Cancel c7eb9ea0b02aacd2b31b5accb870d6bc741ae354a4ea76b856541eb003353128 -->

```csharp
protected void InnoEditor.Interactions.EditorAction.Cancel()
```

Cancels the current operation and returns the action to its idle state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L113).

## `Complete`

<a id="api-e19fe3c67f444b3d"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.Complete 8d4d64eceb096e88526b8e14cbfec9284f1d3ed3b312a7565688ef4255263d3c -->

```csharp
protected void InnoEditor.Interactions.EditorAction.Complete()
```

Completes the current operation and returns the action to its idle state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L99).

## `Dispose`

<a id="api-b36f42780f241549"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.Dispose 67fe8bb09f712585d6b5a80e29c6c75d543c9e1ae9ae9b97e91aa743a847ab03 -->

```csharp
public void InnoEditor.Interactions.EditorAction.Dispose()
```

Cancels active work and releases this action instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L177).

## `Execute`

<a id="api-42cb9d53dc62b80c"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.Execute(InnoEditor.Interactions.EditorActionContext) 49c0ad362bbc8fdb44de3e692578803701c723d312fcda18ac1b8d3efae38d05 -->

```csharp
protected abstract void InnoEditor.Interactions.EditorAction.Execute(InnoEditor.Interactions.EditorActionContext context)
```

Executes the action for the supplied context.

**Parameter `context`:** The editor, area, target, and optional argument for the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L140).

## `OnCancelled`

<a id="api-35ac2e0277e47986"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.OnCancelled 5529b825cc85b4f282bcfaeae08cbae82db36558ba99a3814238bd1b7b344d67 -->

```csharp
protected virtual void InnoEditor.Interactions.EditorAction.OnCancelled()
```

Runs after an active operation is cancelled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L161).

## `OnCompleted`

<a id="api-a1c428fb2a2a607e"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.OnCompleted b2be646c6795825330732fca2b1b9220f408890d995ce59838809e9ce95cf3b2 -->

```csharp
protected virtual void InnoEditor.Interactions.EditorAction.OnCompleted()
```

Runs after an active operation completes successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L154).

## `OnPresentationLost`

<a id="api-1b57be3ebf2b1b36"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.OnPresentationLost 79c32f1f8f0476dc75b6e559f8da97e1eb2d07f5711d0fe89339001bf292b8ba -->

```csharp
protected virtual void InnoEditor.Interactions.EditorAction.OnPresentationLost()
```

Runs when this action's active target loses editor presentation focus.

**Constraints:** The default behavior cancels the active operation. An action that owns an editable value may override this
method to validate and commit that value. The operation is cancelled automatically when an override returns
without calling `InnoEditor.Interactions.EditorAction.Complete` or `InnoEditor.Interactions.EditorAction.Cancel`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L173).

## `Present`

<a id="api-6ad3529e3c677476"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.Present(InnoEditor.Interactions.EditorActionContext) 8318d5213b830ca5425bc14fc10c5bff2cb6552512872870c3be7622ddb574e0 -->

```csharp
protected virtual bool InnoEditor.Interactions.EditorAction.Present(InnoEditor.Interactions.EditorActionContext context)
```

Presents an active action at the current target location.

**Parameter `context`:** The current presentation area and target.

**Returns:** `true` when the action replaced the target's normal content; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L150).

## `Query`

<a id="api-7fb71ff15443b710"></a>
<!-- api: M:InnoEditor.Interactions.EditorAction.Query(InnoEditor.Interactions.EditorActionContext) 9e44d928ec99131095359fd0b65b49e134d17e5cb4488b96e7fc97eff9d0ff27 -->

```csharp
protected virtual InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorAction.Query(InnoEditor.Interactions.EditorActionContext context)
```

Evaluates the action for the supplied context.

**Parameter `context`:** The editor, area, target, and optional argument for the query.

**Returns:** The current presentation and availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L133).

## `activeEditorContext`

<a id="api-33e875edea2c768f"></a>
<!-- api: P:InnoEditor.Interactions.EditorAction.activeEditorContext 0cb042705c9d883b4f0b930790269b7a5586b3d66d5bcd7abcad7c831334f451 -->

```csharp
protected InnoEditor.Core.EditorContext? InnoEditor.Interactions.EditorAction.activeEditorContext { get; }
```

Gets the host-owned passive context of the active operation, or null after completion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L75).

## `activeTarget`

<a id="api-12cb1b2887eeccc0"></a>
<!-- api: P:InnoEditor.Interactions.EditorAction.activeTarget 49ce79ddd2c99f34cf451e8b2215993950e4bea4ce47a80e4f825fd86a0779b0 -->

```csharp
protected object? InnoEditor.Interactions.EditorAction.activeTarget { get; }
```

Resolves the active target afresh for this callback; null means the identity is unavailable.

**Constraints:** Do not retain the result across callbacks. Activation stores a domain-qualified reference rather than the live object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L71).

## `isActive`

<a id="api-4ee4fb7f2cac1f4b"></a>
<!-- api: P:InnoEditor.Interactions.EditorAction.isActive 014600727dafed93a729d523c69e5a943e5857f50a0596b18ffc0b177a3472dc -->

```csharp
public bool InnoEditor.Interactions.EditorAction.isActive { get; }
```

Gets whether the action currently owns an active multi-frame operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L17).

## `targetType`

<a id="api-a010cdcac6aa42ce"></a>
<!-- api: P:InnoEditor.Interactions.EditorAction.targetType ee27f2596584914861138b9330e395170eb0c5bcce66c9c699f3f2a73e569eac -->

```csharp
public virtual System.Type? InnoEditor.Interactions.EditorAction.targetType { get; }
```

Gets the required target type, or `null` for a targetless action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L21).
