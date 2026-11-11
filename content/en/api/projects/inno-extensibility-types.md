---
title: Inno.Extensibility.Types
description: Stable type references, immutable discovery snapshots and owned transactional extension registries.
uid: project.inno-extensibility-types
kind: project
owners:
  - Inno.Extensibility.Types
---
# Inno.Extensibility.Types

This Foundation layer derives immutable type facts from the owning module catalog and an explicit metadata source. `TypeCatalog` provides discovery and identity queries; `TypeRegistry<TSnapshot>` builds feature indexes in the same publication transaction.

Start with [finding extension types](../../manual/extensions/find-types.md), [building an extension registry](../../extending/type-registries.md), and [module composition](../../extending/module-sources.md).

## Type identity and snapshot contract

The catalog borrows an initialized ModuleHost and a matching metadata source. Dynamic and static providers use the same boundary; Types does not select a provider by operating system or silently repair missing facts with reflection. Loader failures reject incomplete candidates.

`TypeRef` persists and compares its stable Guid only. Its runtime integer is a checked lookup hint and must not cross persistence/generation boundaries as logical identity. A reference holds no live Type or load context, but resolving it returns a generation-bound CLR declaration. Duplicate/invalid stable IDs reject the candidate; no former-ID alias table is inferred.

Snapshots strongly retain consistent type/source/metadata facts. Keep a snapshot or resolved object only for its protected generation and release it before unload. Reuse applies to unchanged Assembly object identities; a replacement collectible context receives new discovery even when its bytes match.

`current` reconciles pending host catalog changes. `AcquireOperation` protects a synchronous operation without itself refreshing; reconcile first at the host safe point and hold protection through access, notifications and compensation. Asynchronous Build/Export work uses the shared strict read lease. A scope does not reset a fault or authorize a second publication thread.

## Registry activation and retirement contract

Build complete unpublished snapshots. New extensions created or explicitly owned during Build are registered for candidate failure compensation, then transferred to the successful snapshot. Do not register borrowed previous instances or double-dispose already owned candidate resources.

Activation is reversible until global completion. Completion performs cleanup only; a failure after publication faults the host rather than pretending to roll back. Reentrant reconciliation runs after the outer transaction as a separate transaction.

Reverse-order retirement preserves dependencies. Ordinary errors aggregate; pending work retains its resource/batch/snapshot and faults at the terminal boundary if it cannot drain. Diagnostic hooks do not suppress failure. Repeated Clear/Dispose/Refresh cannot bypass retained ownership, and a resource timeout is not a compiler timeout.

Clear is reusable only after successful retirement; Dispose ends registration. Catalog and registry owners must retire before their module host. Long-lived state stores stable references and neutral data, not old Type, delegate or instance caches.

## API reference

Browse the [exact type and member contracts](../types/extensibility-types/index.md) in the selected CLR surface. Declaration coverage does not certify runtime or collectible-unload behavior.
