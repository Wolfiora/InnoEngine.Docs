---
title: Inno.Extensibility.Modules
description: Explicit module sources, dependency closures, catalog candidates and the shared generation owner.
uid: project.inno-extensibility-modules
kind: project
owners:
  - Inno.Extensibility.Modules
---
# Inno.Extensibility.Modules

This Foundation layer owns module identities, catalog snapshots, dependency ordering and candidate transactions. It accepts code through explicit source contracts. Dynamic loading, reflection and shadow-copy storage belong to the selected adapter, not ModuleHost.

Use [module sources and participants](../../extending/module-sources.md) for composition and [generation publication](../../architecture/generation-publication.md) for commit/rollback and admission.

## Source and publication contract

Creating a host transfers ownership of the required assembly catalog source. The composition separately selects a matching type metadata source. External assembly registration does not transfer the caller's ultimate code lifetime. Static code must not be reported as collectible.

Source preflight declares the complete owned assembly names, upstream module dependencies and domain/scope classifications. Preparation receives a frozen candidate closure and returns a complete unpublished contribution. Failed acquisition must retire acquired resources and register any outstanding non-owning probe with the shared gate.

Participants prepare full derived state and expose reversible activation, cleanup-only completion and rollback. A recoverable candidate failure preserves last-good state only after successful compensation. Cleanup/rollback failure closes the generation gate; pending retirement retains owners and dependent transactions.

Reload contexts and snapshots hold live generation references and belong only to the transaction or protected operation. An unload return value is a probe, not successful retirement. Retire feature registries and type-derived state before the module host; no repeated refresh or disposal can reset a terminal fault.

Module handles identify runtime transactions, while module information is non-owning diagnostics. Foundation does not require a dynamic-loader cache directory or choose a process-wide source implicitly.

## API reference

Browse the [exact type and member contracts](../types/extensibility-modules/index.md) in the selected CLR surface. Declaration coverage does not certify runtime or collectible-unload behavior.
