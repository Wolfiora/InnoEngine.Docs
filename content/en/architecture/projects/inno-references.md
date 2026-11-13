---
title: Inno.References
description: Persistent reference intent, neutral Missing slots and coordinated recovery.
uid: project.inno-references
kind: project
owners:
  - Inno.References
---
# Inno.References

This Content layer separates a saved reference's intent from its current resolution. It provides neutral Missing payloads, ordered recovery participants and short-lived content reads. It does not own the Scene, Assets or Editor, discover plugins, or replace the shared generation coordinator.

Start with [handling an unresolved reference](../../manual/references/resolve-missing.md), [reading current content](../../manual/references/read-content.md), or [joining a recovery transaction](../../extending/reference-recovery.md).

## Reference and recovery contract

A `ReferenceKindId` identifies a resolution protocol, not an object. A `ReferenceKey` identifies a persistent owner's stable slot. A descriptor preserves target persistent identity, an optional stable type constraint and diagnostic name/path. Neither the name nor the path is resolution authority. An empty target is explicitly Unassigned, not Missing.

The catalog freezes the resolver collection for one generation; it does not make resolver instances independent of their owner. Each resolver must return the exact descriptor instance passed to it and resolve against its current canonical domain. Only a Resolved result carries a runtime identity. The result constructor checks this pairing, not the continued existence of the target. Never persist that runtime result in Scene data, settings or History.

Recovery captures copied neutral bytes and unique valid slot keys before changing live state. Participants apply provisional objects, then the transaction resolves all slots and validates the batch. The host's generation coordinator owns publication, commit and the two-part rollback ordering. No frame or unrelated reader may observe provisional state.

Use the transaction on its capture thread at the owner's safe point. Partial Prepare is compensatable; participants not yet attempted are not rolled back. Ordinary cleanup failures aggregate. Pending retirement, including wrapped signals, retains owners and dependencies and closes the shared gate. Repeated disposal is not a reset.

Successful completion releases participants and resolvers; retained changes are diagnostics, not a live object cache. Complete rollback clears changes. A participant can represent real neutral structural state without inventing object identities or reference slots.

## Content read contract

`ContentReadScope` freezes weak, generation-checked identities for one control-thread operation. Lookup returns only compatible live objects from the captured runtime slots and never rebinds a stale identity to a replacement generation. Returned object collections are strong references: copy domain data and release them before the next frame or reload.

Disposal revokes `GetValues` and `TryGetValue`; immutable `contents` and `activeContent` metadata remain readable. The scope does not own or dispose the content objects. A new `empty` scope is owned by its caller.

## API surfaces

The CLR surface includes host recovery and resolver composition. The runtime script export explicitly selects `ContentReadScope` under `InnoEngine.References`; it does not export the entire host recovery protocol. Foundation Settings and Graphs remain independent of this Content assembly; higher-level composition joins their state to recovery.

## API reference

Browse [types, overloads and exact member contracts](../../api/engine/references/index.md). Source declaration coverage is separate from runtime recovery and unload verification.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
