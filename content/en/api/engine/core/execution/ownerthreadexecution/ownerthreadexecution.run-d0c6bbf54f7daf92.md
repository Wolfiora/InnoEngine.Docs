---
uid: api.d0c6bbf54f7daf92ace7d235e542ac94186583e14ea69078ee447dba6474cfb2
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.OwnerThreadExecution.Run\u0060\u00601(System.Func{System.Threading.Tasks.Task{\u0060\u00600}})"
source: xml
reviewed: 589aab57c00ef5e53f1cb54df31923a0151e2a482136f9091bf9fd54bda7276c
title: "OwnerThreadExecution.Run"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Pumps continuations until the owned operation completes, then restores the previous context.

## Type parameters

**Type parameter `TResult`:** The result produced by the operation.

## Parameters

**Parameter `operation`:** Work that owns and retires every task it starts before returning. Async void work is not supported.

## Returns

The completed operation result. Operation failures and cancellation propagate unchanged.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The operation is null.

**Exception `T:System.InvalidOperationException`:** The operation returned a null task.

## Remarks

This is a blocking host boundary. Callback-driven hosts use their platform synchronization context instead. Work that explicitly suppresses context capture is responsible for returning to the owner before accessing thread-affine resources.
