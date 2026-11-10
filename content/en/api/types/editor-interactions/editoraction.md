---
title: "EditorAction"
description: "Reference for EditorAction in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.1aceda58ded34ab6
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorAction`

This reference describes `EditorAction` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-14b987ec96e0f207) | Method |
| [`Activate`](#api-b8a1196568088ce8) | Method |
| [`Cancel`](#api-23b0a6072589a341) | Method |
| [`Complete`](#api-5f3819d110a8bbfb) | Method |
| [`Dispose`](#api-e3e2bb391980bd33) | Method |
| [`Execute`](#api-f7138d4162f38eaf) | Method |
| [`OnCancelled`](#api-3efbeb94910e1bc3) | Method |
| [`OnCompleted`](#api-b39479da13794635) | Method |
| [`OnPresentationLost`](#api-8705ab61acb889ce) | Method |
| [`Present`](#api-3aba94b5bfaf0b67) | Method |
| [`Query`](#api-6605dfdb929fc6d8) | Method |
| [`activeEditorContext`](#api-adbbbb34f80254c3) | Property |
| [`activeTarget`](#api-923a26610e95221b) | Property |
| [`isActive`](#api-1ac4c5505c0dfb63) | Property |
| [`targetType`](#api-8f7d7b00c04b659c) | Property |

## Type declaration

<a id="api-1aceda58ded34ab6"></a>
<!-- api: T:Inno.Editor.Interactions.EditorAction 04c6ba43a2be75216bc3e517c96dd09f729d30fb58993df34e12584da7c7f236 -->

```csharp
public abstract class Inno.Editor.Interactions.EditorAction : System.IDisposable
```

Defines one automatically discovered editor operation and owns its complete multi-frame lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L8).

## `#ctor`

<a id="api-14b987ec96e0f207"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.#ctor 743919a5adead66e3aff7cd493feca65972a3d8093d5a9285d97fd0724d73324 -->

```csharp
protected Inno.Editor.Interactions.EditorAction.EditorAction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L8).

## `Activate`

<a id="api-b8a1196568088ce8"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.Activate(Inno.Editor.Interactions.EditorActionContext) bdc08e74c6c933549a10dea73e26610c0ee8f7518f8ec5bd33d546456efefe96 -->

```csharp
protected void Inno.Editor.Interactions.EditorAction.Activate(Inno.Editor.Interactions.EditorActionContext context)
```

Activates this action for a target and cancels any operation it previously owned.

**Parameter `context`:** The contextual request that starts the operation.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L86).

## `Cancel`

<a id="api-23b0a6072589a341"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.Cancel 7ec34a2f616b8992a0fced45f9d0e89317deb9f384a50b6c22a0218096d08694 -->

```csharp
protected void Inno.Editor.Interactions.EditorAction.Cancel()
```

Cancels the current operation and returns the action to its idle state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L113).

## `Complete`

<a id="api-5f3819d110a8bbfb"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.Complete bc7050e4c1cc25ca80cec745017de0afa4947544c4dba5786b74ae5a7f524c95 -->

```csharp
protected void Inno.Editor.Interactions.EditorAction.Complete()
```

Completes the current operation and returns the action to its idle state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L99).

## `Dispose`

<a id="api-e3e2bb391980bd33"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.Dispose ca797df6f0740d88604ef00292aff82b50e0bfd5e83e2ba17defb8eb0dd2aec0 -->

```csharp
public void Inno.Editor.Interactions.EditorAction.Dispose()
```

Cancels active work and releases this action instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L177).

## `Execute`

<a id="api-f7138d4162f38eaf"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.Execute(Inno.Editor.Interactions.EditorActionContext) 2affa850e242b34da68481c811ba0cd45578f9c3cec8882d999cb15561178548 -->

```csharp
protected abstract void Inno.Editor.Interactions.EditorAction.Execute(Inno.Editor.Interactions.EditorActionContext context)
```

Executes the action for the supplied context.

**Parameter `context`:** The editor, area, target, and optional argument for the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L140).

## `OnCancelled`

<a id="api-3efbeb94910e1bc3"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.OnCancelled 94526f8642dc6de5095c8fa1493c6d7fce6308bd46c115a226e7ae65315bd7db -->

```csharp
protected virtual void Inno.Editor.Interactions.EditorAction.OnCancelled()
```

Runs after an active operation is cancelled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L161).

## `OnCompleted`

<a id="api-b39479da13794635"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.OnCompleted d8bd72955bcaa79e153f8d47e4aa6fc064ba1067638b4337d35333a18fd5e8ab -->

```csharp
protected virtual void Inno.Editor.Interactions.EditorAction.OnCompleted()
```

Runs after an active operation completes successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L154).

## `OnPresentationLost`

<a id="api-8705ab61acb889ce"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.OnPresentationLost 7abfd4a3cf5ea5c92ad188beef9bbc1f9f17d63a207babb2de443cf8f2d59351 -->

```csharp
protected virtual void Inno.Editor.Interactions.EditorAction.OnPresentationLost()
```

Runs when this action's active target loses editor presentation focus.

**Constraints:** The default behavior cancels the active operation. An action that owns an editable value may override this
method to validate and commit that value. The operation is cancelled automatically when an override returns
without calling `Inno.Editor.Interactions.EditorAction.Complete` or `Inno.Editor.Interactions.EditorAction.Cancel`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L173).

## `Present`

<a id="api-3aba94b5bfaf0b67"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.Present(Inno.Editor.Interactions.EditorActionContext) fdb25e4b16b8414c7ba0b85a3c621d652618e6712e08d05a3482219ad43fea09 -->

```csharp
protected virtual bool Inno.Editor.Interactions.EditorAction.Present(Inno.Editor.Interactions.EditorActionContext context)
```

Presents an active action at the current target location.

**Parameter `context`:** The current presentation area and target.

**Returns:** `true` when the action replaced the target's normal content; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L150).

## `Query`

<a id="api-6605dfdb929fc6d8"></a>
<!-- api: M:Inno.Editor.Interactions.EditorAction.Query(Inno.Editor.Interactions.EditorActionContext) 64302a954fbd9a87b916f2ddac175159f816a99b0ba5d0dd8bb9f4b14c7c3aea -->

```csharp
protected virtual Inno.Editor.Interactions.EditorActionState Inno.Editor.Interactions.EditorAction.Query(Inno.Editor.Interactions.EditorActionContext context)
```

Evaluates the action for the supplied context.

**Parameter `context`:** The editor, area, target, and optional argument for the query.

**Returns:** The current presentation and availability state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L133).

## `activeEditorContext`

<a id="api-adbbbb34f80254c3"></a>
<!-- api: P:Inno.Editor.Interactions.EditorAction.activeEditorContext ddfdc485982738bc51478254d1cec02bc005a4294e10519e85f266681457a4c7 -->

```csharp
protected Inno.Editor.Core.EditorContext? Inno.Editor.Interactions.EditorAction.activeEditorContext { get; private set; }
```

Gets the host-owned passive context of the active operation, or null after completion.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L75).

## `activeTarget`

<a id="api-923a26610e95221b"></a>
<!-- api: P:Inno.Editor.Interactions.EditorAction.activeTarget 1ced4db4fbb506830975bdf0f8a802138a4a3b8b86a0e541ab6e36a07b7a93c6 -->

```csharp
protected object? Inno.Editor.Interactions.EditorAction.activeTarget { get; }
```

Resolves the active target afresh for this callback; null means the identity is unavailable.

**Constraints:** Do not retain the result across callbacks. Activation stores a domain-qualified reference rather than the live object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L71).

## `isActive`

<a id="api-1ac4c5505c0dfb63"></a>
<!-- api: P:Inno.Editor.Interactions.EditorAction.isActive c16b48e8ed388ee9aa9d3dd344fe736294738133ae185b7c6f163cfb575643c7 -->

```csharp
public bool Inno.Editor.Interactions.EditorAction.isActive { get; }
```

Gets whether the action currently owns an active multi-frame operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L17).

## `targetType`

<a id="api-8f7d7b00c04b659c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorAction.targetType dcc47820f20a66b82dfc4b9c03e53091f1359a33f41560fef70a92b8c2913dfa -->

```csharp
public virtual System.Type? Inno.Editor.Interactions.EditorAction.targetType { get; }
```

Gets the required target type, or `null` for a targetless action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorAction.cs#L21).
