---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d0c6bbf54f7daf92ace7d235e542ac94186583e14ea69078ee447dba6474cfb2
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.OwnerThreadExecution.Run``1(System.Func{System.Threading.Tasks.Task{``0}})
title: OwnerThreadExecution.Run
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
sourceFingerprint: 15eb1d14bbb2f4fe8f4d85bfe35b1a9d9a3ebfef7c0f99ba3cfd6f3bd6339fde
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
