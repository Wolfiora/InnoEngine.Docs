---
exampleMode: host
exampleProjects: [Inno.Editor.Interactions]
title: Record undoable Editor changes
description: Record neutral domain changes, compensate failed transactions and respect History resource ownership.
uid: extending.editor-history
kind: how-to
owners: [Inno.Editor.Interactions]
contracts: [architecture.editor-generations, manual.identity-and-missing]
---
# Record undoable Editor changes

Use `IEditorHistory` to record a domain operation that can resolve its current objects and reverse its own change. History stores a stable protocol kind and neutral payload; it must not pin a collectible delegate, `Type` or runtime object across reload.

## Define the protocol first

A change has a globally unique `kind`, neutral payload and optional merge key. Payloads contain IDs, indices, strings and serialized bytes. The current generation discovers an `EditorHistoryHandler` with the corresponding stable kind. The handler resolves through the real domain owner and uses its transactions, not a global live-object database.

`Query` reports availability or a barrier without mutation. `Apply` captures enough rollback state before modifying anything. Missing handlers, removed targets or unresolved stable type IDs remain diagnosable barriers; they do not discard history or substitute another object.

## Record a change already applied

Most Editor controls apply through the domain first, then record the successful mutation:

```csharp
using System;
using Inno.Editor.Interactions;

internal static class AppliedChanges
{
    public static void Record(
        IEditorHistory history,
        string displayName,
        string registeredKind,
        ReadOnlySpan<byte> neutralPayload
    ) {
        using var change = new EditorHistoryChange(
            registeredKind, EditorHistoryPayload.FromBytes(neutralPayload));
        history.RecordApplied(displayName, change);
    }
}
```

The payload must match the registered handler contract. History retains its own data; the original change's ownership ends after the call. `Execute` is the alternative when the handler itself can safely perform the initial Redo.

Adjacent entries merge only when kind, a nonempty merge key and the handler's `TryMerge` all agree. Continuous text/numeric editing can opt in. A click, create, delete or reorder should remain an independent operation.

## Preserve state on failure

An ordinary failure means the input state was preserved. Failed Undo/Redo does not move the stack pointer and can be retried. If state integrity is lost, History faults and rejects recording and replay until the host explicitly clears it; an extension cannot manufacture that internal state-loss result to continue unchecked.

The built-in Edit/Undo and Edit/Redo menus show the next operation name. The primary platform modifier combines with Z, Shift+Z and the additional Y gesture through the shared resolver.

## Group reversible changes

A transaction groups individually reversible operations. Undo visits children in reverse order; Redo uses forward order. If a child fails, the opposite-direction compensation restores successful earlier children. Successful compensation preserves the top-level stack position. Failed compensation faults History.

Commit only after all required children succeed. Explicit rollback releases the transaction only after complete success; an ordinary preserved-state rollback failure retains it for retry. If disposal of an uncommitted transaction cannot roll it back while state remains coherent, it commits the still-applied transaction to Undo and throws. This preserves an actionable history entry instead of losing track of a live mutation.

`EditorEditGesture` owns this transaction across continuous input. Each sample records the applied change, commit produces one Undo step, and cancel reverses it. Non-LIFO completion is rejected without losing the transaction. Before Save, Revert, Apply, Close, another command or an extension transition, `EditorOperationPreparingEvent` lets presentation finish the gesture through the existing Core Events system.

## Bound memory and disk usage

The default history retains 256 top-level entries and applies resident/disk byte budgets. Small payloads remain in memory. Payloads reaching the inline threshold use the session blob store under `<Project>/Library/Editor/History`. Eviction, clearing, discarding Redo or closing the runtime releases owned files promptly.

These blobs are not Scene, Prefab, `.imeta` or layout persistence. Do not copy them into a project's saved semantic state. Host-only temporary history isolation preserves the previous branch and restores it when its scope ends; it does not grant scripts an independent Undo owner.

## Reload handlers transactionally

Prepare a candidate handler map before activation. Rollback restores the previous map if another registry fails. Only global completion releases the old handler generation and discards entries that are explicitly unsafe across reload. Kind conflicts fail while building the candidate, before lifecycle callbacks run.
