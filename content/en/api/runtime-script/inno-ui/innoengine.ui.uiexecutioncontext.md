---
title: "UiExecutionContext"
description: "Reference for UiExecutionContext in Inno.UI."
uid: api.inno.ui.runtime-script.aa5b95ac81a33fc3
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiExecutionContext`

This reference describes `UiExecutionContext` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`EnterScope`](#api-98f684aec004077a) | Method |
| [`current`](#api-4e2e5cf815df4cd5) | Property |

## Type declaration

<a id="api-aa5b95ac81a33fc3"></a>
<!-- api: T:InnoEngine.UI.UiExecutionContext f0ddc57c45a484e1f9e3efb9320c78bb992a2fb433a7e13fcb0fe81efadc9c7f -->

```csharp
public static class InnoEngine.UI.UiExecutionContext
```

Binds one UI service to the current asynchronous execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L11).

## `EnterScope`

<a id="api-98f684aec004077a"></a>
<!-- api: M:InnoEngine.UI.UiExecutionContext.EnterScope(InnoEngine.UI.IUiService) 27a68978b38982a6191c18f2a686dcd4e9d1f22eb540e7141388fdbde633e4f2 -->

```csharp
public static System.IDisposable InnoEngine.UI.UiExecutionContext.EnterScope(InnoEngine.UI.IUiService ui)
```

Binds a UI service until the returned strict last-in-first-out scope is disposed.

**Parameter `ui`:** The host-owned UI service.

**Returns:** The caller-owned binding scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L29).

## `current`

<a id="api-4e2e5cf815df4cd5"></a>
<!-- api: P:InnoEngine.UI.UiExecutionContext.current fdf0ab6bb4e0f3e5475b4dfd77f2b17ef026037fdba8975fe75645cf3eadd5e6 -->

```csharp
public static InnoEngine.UI.IUiService InnoEngine.UI.UiExecutionContext.current { get; }
```

Gets the UI service bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UI.cs#L18).
